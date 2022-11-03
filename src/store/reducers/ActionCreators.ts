import { createAsyncThunk } from "@reduxjs/toolkit";
import { doc, getDoc, setDoc, query, limitToLast, orderBy, collection, getDocs } from "firebase/firestore"; 
import { db } from '../../firebase';
import { settingsSlice } from '../../store/reducers/SettingsSlice';
import { walletsListSlice } from '../../store/reducers/WalletsListSlice';
import { ReserveCurrency } from "../../shared/api/ReserveCurrency";
import { requestAPI } from "../../shared/api/CurrencyAPI";

import type { CurentUser} from './types'


const settings = {
	baseCurrency: 'USD',
	colorThema: 'white',
	whiteThemaId: 'standart',
	darkThemaId: 'standart'
}

const walletTemplate = {
	'#id': {
		'currency': ['USD'],
		'type': 'Wallet',
		'name': 'Wallet',
		'values': [0]
	}
}


const {setSettings} = settingsSlice.actions
const {setWalletsList} = walletsListSlice.actions

export const fetchUserData = createAsyncThunk(
	'user/fetchUserData',
	async (currentUser:CurentUser, thunkAPI) => {
		try {
			if (currentUser) {
				const docRef = doc(db, "users", currentUser.uid)
				const docSnap = await getDoc(docRef)
				let data = docSnap.data()
				if (!data) {
					setDoc(doc(db, "users", currentUser.uid), {
						currentUser,
						settings,
						"Cards && Wallets": walletTemplate
					}, { merge: true });
					data = {
						currentUser,
						settings,
						"Cards && Wallets": walletTemplate
					}
				}
				if (data) {
					if (!data.currentUser) {
						setDoc(doc(db, "users", currentUser.uid), {
							currentUser
						}, { merge: true });
						data = {...data, currentUser}
					}
					if (!data.settings) {
						setDoc(doc(db, "users", currentUser.uid), {
							settings
						}, { merge: true });
						data = {...data, settings}
					}
					if (!data["Cards && Wallets"]) {
						setDoc(doc(db, "users", currentUser.uid), {"Cards && Wallets": walletTemplate}, { merge: true });
						data = {...data, "Cards && Wallets": walletTemplate}
					}
					thunkAPI.dispatch(setSettings(data.settings))
					thunkAPI.dispatch(setWalletsList(data["Cards && Wallets"]))
				}
				console.log(data)
				return data
			}
		} catch (e) {
			thunkAPI.rejectWithValue(e)
		}
})

export const fetchCurrency = createAsyncThunk(
	'currency/fetchCurrency',
	async (_, thunkAPI) => {

		// Get from localStorage
		const localStore = localStorage.getItem('currency')
		const currencyStore = (typeof localStore === 'string')? await JSON.parse(localStore) : null
		if (currencyStore) {
			if(currencyStore.data.updated.split(' ')[0] == new Date().toISOString().split('T')[0]){
				return currencyStore
			}
		}

		// Old ======================================= 
		// Get from FireBase
		// const docRef = doc(db, "currency", '2022-10-30');

		// const docRef = doc(db, "currency", new Date().toISOString().split('T')[0]);
		// const docSnap = await getDoc(docRef);
		// const data = await docSnap.data()
		// if (data) {
		// 	return {id:docSnap.id, data}
		// }
		// =======================================

		// Get last from FireBase
		const citiesRef = collection(db, "currency")
		const q = query(citiesRef, orderBy("updated"), limitToLast(1))
		const querySnapshot = await getDocs(q)
		let lastCurrencyFB 
		querySnapshot.forEach((doc) => {
			lastCurrencyFB = {id: doc.id, data: doc.data()}
		})

		// Set last from FireBase if it was updated today 
		if(lastCurrencyFB){
			if(lastCurrencyFB!.data.updated.split(' ')[0] == new Date().toISOString().split('T')[0]){
				return lastCurrencyFB
			}
		}

		// Get from localStorage and work only with admin uid
		const localStoreUser = localStorage.getItem('user')
		const currencyStoreUser = (typeof localStoreUser === 'string')? await JSON.parse(localStoreUser) : null
		if (currencyStoreUser.uid === process.env.WHITE_LIST_ID) {
			// Get from CurrencyAPI
			const currency = requestAPI()
			if(currency){
				return currency
			}
		}
		
		// Set last from FireBase
		if(lastCurrencyFB){
			return lastCurrencyFB
		}
		
		// Get from Template
		return ReserveCurrency

})