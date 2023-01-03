import { createSlice } from '@reduxjs/toolkit'
import type { currencyState } from '../types'
import { fetchCurrency } from '../ActionCreators'

const initialState:currencyState = {
	currency: null,
	currencyAll: [null],
	isLoading: false,
	error: ''
}

export const currencySlice = createSlice({
	name: 'currency',
	initialState,
	reducers: {},
	extraReducers: {
		[fetchCurrency.pending.type]: (state) => {
			state.isLoading = true
		},
		[fetchCurrency.fulfilled.type]: (state, action) => {
			state.isLoading = false
			state.error = ''
			state.currency = action.payload
			if (action.payload.data && action.payload.id) {
				localStorage.setItem('currency', JSON.stringify(action.payload))
			}

		},
		[fetchCurrency.rejected.type]: (state, action) => {
			state.isLoading = false
			state.error = action.payload
		}
	}
})

export default currencySlice.reducer