import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface NavElementsState {
	topElement: boolean
	navElement: boolean
}


const initialState:NavElementsState = {
	topElement: true, 
	navElement: true
}

export const navElementsSlice = createSlice({
	name: 'navElements',
	initialState,
	reducers: {
		// inc(state, action: PayloadAction<number>) {
		// 	state.count += action.payload
		//  },
		inc(state, action: PayloadAction<number>) {
			// state.count += action.payload
		 },
	}
})

export default navElementsSlice.reducer