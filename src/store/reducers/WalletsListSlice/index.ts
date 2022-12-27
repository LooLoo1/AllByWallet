import { createSlice } from '@reduxjs/toolkit'
import { createAsyncThunk } from "@reduxjs/toolkit";
import { walletTemplate } from "../../../shared/lib/SettingsTemplates";
import { db } from '../../../firebase';
import { doc, getDoc, setDoc, Timestamp, updateDoc, arrayUnion } from "firebase/firestore"; 

import type { WalletsListState, TCurrency } from '../types'

// const typeTransaction: Array<string> = ['-', '+', 'CONVERSION', 'CORRECTION'] 

const localStore = localStorage.getItem('walletsList')
const settingsStore = (typeof localStore === 'string')? JSON.parse(localStore) : null

const initialState: WalletsListState = {
	list: settingsStore || walletTemplate
}

export const updatedWalletsList = createAsyncThunk(
	'walletsList/updated',
	async ({currentUser, transactionData}: any, thunkAPI) => {
		try {
			if (currentUser) {
				
				const time = new Date(Date.parse(transactionData.time))
				const year = time.getFullYear()
				const month = time.getMonth() + 1
				const date = time.getDate()

				const {icon = "QuestionMark", category = '', type = '-'} = JSON.parse(transactionData.type)
				const transactionRef = await doc(db, `categories`, currentUser, `${year}`, `${month}`);

				const {currency, wallet, note, event, amount: value } = transactionData

				const informaton = {
					[date]: arrayUnion(
						{
							category, 
							type,
							currency,
							value,
							wallet,
							time: Timestamp.fromDate(time),
							...(note)?{note}:{},
							...(event)?{event}:{}
						}
					)
				}

				const userRef = doc(db, `users`, currentUser)
				const docSnap = await getDoc(userRef)
				let data = docSnap.data()

				if(data && data["Cards && Wallets"][wallet]){
					// Save in FireBase
					try {
						await updateDoc(transactionRef, informaton)
					} catch (e) {
						await setDoc(transactionRef, informaton)
					}

					const updatedWallet = data["Cards && Wallets"][wallet]

					if(type === 'CONVERSION'){
						currency.map((v:number) => updatedWallet.currency.indexOf(v)).forEach((currencyIndex:number, i:number) => {
							if (currencyIndex < 0){
								updatedWallet.currency.push(currency[i])
								if (i == 0) {
									updatedWallet.values.push(-value[i])
								}
								if (i == 1) {
									updatedWallet.values.push(value[i])
								}
							} 
							else {
								if (i == 0) {
									updatedWallet.values[currencyIndex] -= value[i]
								}
								if (i == 1) {
									updatedWallet.values[currencyIndex] += value[i]
								}
							}
						})
					}
					else {
						const currencyIndex:number = updatedWallet.currency.indexOf(currency);
						if (currencyIndex < 0){
							updatedWallet.currency.push(currency)
							if(type === '+' || type === 'CORRECTION'){
								updatedWallet.values.push(value)
							}
							if(type === '-'){
								updatedWallet.values.push(-value)
							}
						} 
						else {
							if(type === '+'){
								updatedWallet.values[currencyIndex] += value
							}
							if(type === '-'){
								updatedWallet.values[currencyIndex] -= value
							}
							if(type === 'CORRECTION'){
								updatedWallet.values[currencyIndex] = value
							}
						}
					}
					
					updatedWallet.values.forEach((v:number, i:number)=>{
						if (v == 0) {
							updatedWallet.currency.splice(i, 1)
							updatedWallet.values.splice(i, 1)
						}
					})
					setDoc(doc(db, "users", currentUser), {"Cards && Wallets": {[wallet]: updatedWallet}}, { merge: true });
					return  {...data["Cards && Wallets"], ...{[wallet]: updatedWallet}} 
				}
			}
		}
		catch (e) {
			thunkAPI.rejectWithValue(e)
		}
	}
)

export const walletsListSlice = createSlice({
	name: 'walletsList',
	initialState,
	reducers: {
		setWalletsList(state, action){
			state.list = action.payload
			localStorage.setItem('walletsList', JSON.stringify({...action.payload}))
		},
		resetListOfCurrencyNames(state, action){
			const keys = Object.keys(state.list!)
			let arr:TCurrency[] | [] = []
			keys.map(id => {
				arr = arr.concat(action.payload[id].currency)
			})
			const mySet = new Set(arr)
			state.listOfNames = Array.from(mySet)
		},

		resetListOfCurrencyValues(state, action){
			const list = state.list || {}
			const listOfNames = state.listOfNames || []
			const listOfKeys = Object.keys(list)
			
			const listOfValues = Array(listOfNames.length).fill(0)
			listOfKeys.map((el) => {
				list[el].currency.map((currency:TCurrency, i) => {
					listOfValues[listOfNames.indexOf(currency)] += list[el].values[i]
				})
			})
			state.listOfValues = listOfValues
		}
	},
	extraReducers: {
		[updatedWalletsList.fulfilled.type]: (state, action) => {
			state.list = action.payload
			localStorage.setItem('walletsList', JSON.stringify(action.payload))
		},
	
	}
})

export default walletsListSlice.reducer
