import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { currencyData, currencyState } from '../types'

const initialState:currencyState = {
	currency: null,
	currencyAll: [null],
	isLoading: false,
	error: ''
}

export const currencySlice = createSlice({
	name: 'currency',
	initialState,
	reducers: {
		currencyFetching(state){
			state.isLoading = true
		},
		currencyFetchingSuccess(state, action){
			state.isLoading = false
			state.error = ''
			state.currencyAll = action.payload

			// currencyFindFrech
			state.currency = state.currencyAll[state.currencyAll.length - 1]
			localStorage.setItem('currency', JSON.stringify(state.currencyAll[state.currencyAll.length - 1]))

		},
		currencyFetchingError(state, action: PayloadAction<string>){
			state.isLoading = false
			state.error = action.payload
		},

		currencyFetchingStorageSuccess(state, action){
			state.isLoading = false
			state.error = ''
			state.currency = action.payload
		},

		currencyFetchingAPISuccess(state, action:PayloadAction<currencyData>){
			state.currency = action.payload
			localStorage.setItem('currency', JSON.stringify(action.payload))
			state.currencyAll = [...state.currencyAll, action.payload]
		},
		currencyFetchingAPIError(state, action){
			state.error = action.payload
		}
	}
})

export default currencySlice.reducer