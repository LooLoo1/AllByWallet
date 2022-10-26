import { AppDispatch } from "../store";
import { db } from '../../firebase';
import { collection, getDocs, doc, getDoc, setDoc } from "firebase/firestore"; 
import { userSlice } from "./UserSlice";
import { currencySlice } from "./CurrencySlice";
import { settingsSlice } from '../../store/reducers/SettingsSlice';
import { walletsListSlice } from '../../store/reducers/WalletsListSlice';

import type { CurentUser, currencyObject} from './types'



const {setSettings} = settingsSlice.actions
const {setWalletsList} = walletsListSlice.actions

export const fetchUserData = (currentUser:CurentUser) => async (dispatch: AppDispatch) => {
	try {
		dispatch(userSlice.actions.userDataFetching())
		if (currentUser) {
			const docRef = doc(db, "users", currentUser.uid);
			const docSnap = await getDoc(docRef);
			const data = docSnap.data()
			dispatch(setSettings(data!.settings))
			dispatch(setWalletsList(data!["Cards && Wallets"]))
			dispatch(userSlice.actions.userDataFetchingSuccess(docSnap.data()))
		}
	} catch (e) {
		dispatch(userSlice.actions.userDataFetchingError((e as Error).message))
	}
}

export const addCurrencyFireDB = async (data?:any) => {
	await setDoc(doc(db, "currency", data.updated.split(' ')[0]), data, { merge: true });
}

const options = {
	method: 'GET',
	url: 'https://currencyapi-net.p.rapidapi.com/rates',
	params: {output: 'JSON', base: 'USD'},
	headers: {
	  'X-RapidAPI-Key': process.env.REACT_APP_CURRENCY_API_KEY,
	  'X-RapidAPI-Host': 'currencyapi-net.p.rapidapi.com'
	}
 };
 
 import axios from "axios";
 export const fetchAPICurrency = () => async (dispatch: AppDispatch) => {
	 axios.request(options).then(function (response) {
		const {rates:results, updated, base} = response.data

		const dateFormat = new Date().toISOString()
		const data:currencyObject = {
			results, 
			updated: [dateFormat.split("T")[0], dateFormat.split("T")[1].split(".")[0]].join(' '), 
			base: "USD"
		}
		addCurrencyFireDB(data)
		dispatch(currencySlice.actions.currencyFetchingAPISuccess({
			data,
			id: data.updated.split(" ")[0]
		}))
	 })
	 .catch(function (e) {
		 console.error(e);
		 dispatch(currencySlice.actions.currencyFetchingAPIError((e as Error).message))
	 });
 }


export const fetchCurrency = () => async (dispatch: AppDispatch) => {
	try {
		dispatch(currencySlice.actions.currencyFetching())
		const localStore = localStorage.getItem('currency')
		const currencyStore = (typeof localStore === 'string')? await JSON.parse(localStore) : null
		if(currencyStore.data.updated.split(' ')[0] == new Date().toISOString().split('T')[0]){
			dispatch(currencySlice.actions.currencyFetchingStorageSuccess(currencyStore))
		}else{
			const querySnapshot = await getDocs(collection(db, "currency"));
			let data:any[] = []
			querySnapshot.forEach((doc) => {
				data[data.length] = {
					id: doc.id, 
					data: doc.data()
				}
			 });
			 
			 dispatch(currencySlice.actions.currencyFetchingSuccess(data))
			 
			 // Last date update !== today date
			 if (data[data.length - 1].data.updated.split(' ')[0] !== new Date().toISOString().split('T')[0]) {
				dispatch(fetchAPICurrency())
			}	
		}
		

	} catch (e) {
		dispatch(currencySlice.actions.currencyFetchingError((e as Error).message))
	}
}