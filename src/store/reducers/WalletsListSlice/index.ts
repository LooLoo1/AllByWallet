import { createSlice } from '@reduxjs/toolkit'
import type { WalletsListState, TCurrency } from '../types'

const initialState: WalletsListState = {
	//Template
	list: {
		'#id': {
			'currency': [ 'EUR',  'PLN', 'USD'],
			'type': 'Wallet',
			'name': 'TestWallet2',
			'values': [ 200, 500, 20 ]
	  },
	  '#id2': {
			'currency': [ 'JPY', 'UAH' ],
			'type': 'Wallet',
			'values': [ 20, 50 ],
			'name': 'TestWallet'
	  }
	}
}


export const walletsListSlice = createSlice({
	name: 'walletsList',
	initialState,
	reducers: {
		setWalletsList(state, action){
			state.list = action.payload
			console.log(action.payload);
			
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
	}
})

export default walletsListSlice.reducer
