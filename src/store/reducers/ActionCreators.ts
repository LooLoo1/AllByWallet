import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { doc, getDoc, setDoc } from "firebase/firestore"; 
import { db } from '../../firebase';
import { settingsSlice } from '../../store/reducers/SettingsSlice';
import { walletsListSlice } from '../../store/reducers/WalletsListSlice';
import { ReserveCurrency } from "../../shered/api/ReserveCurrency";
import { options } from "../../shered/api/CurrencyAPI";

import type { CurentUser, currencyObject} from './types'


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

		// Get from FireBase
		// const docRef = doc(db, "currency", '2022-10-30');
		const docRef = doc(db, "currency", new Date().toISOString().split('T')[0]);
		const docSnap = await getDoc(docRef);
		const data = await docSnap.data()
		if (data) {
			return {id:docSnap.id, data}
		}

		// Get from CurrencyAPI
		axios.request(options).then(function (response) {
			const {rates:results, updated, base} = response.data
			const dateFormat = new Date().toISOString()
			const data:currencyObject = {
				results, 
				updated: [dateFormat.split("T")[0], dateFormat.split("T")[1].split(".")[0]].join(' '), 
				base: "USD"
			}
			setDoc(doc(db, "currency", data.updated.split(' ')[0]), data, { merge: true });

			return {
				data,
				id: data.updated.split(" ")[0]
			}
		 })

		// Get from Template
		return ReserveCurrency

})