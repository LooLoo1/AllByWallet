import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { UserState } from '../types'

import { fetchUserData } from '../ActionCreators';

const localStore = localStorage.getItem('user')
const userStore = (typeof localStore === 'string')? JSON.parse(localStore) : null

const initialState: UserState = {
	currentUser: userStore,
	isLoading: false,
	error: ''
}


export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUser(state, action){
			const {displayName, email, uid} = action.payload
			localStorage.setItem('user', JSON.stringify({displayName, email, uid}))
			state.currentUser = {displayName, email, uid}
			
			//// Old, without secyrity
			// localStorage.setItem('user', JSON.stringify(action.payload.user))
			// state.currentUser = action.payload
		},
		singOut(state){
			localStorage.setItem('user', JSON.stringify(null))
			state.currentUser = null
		},

	},
	extraReducers: {
		[fetchUserData.pending.type]: (state) => {
			state.isLoading = true
		},
		[fetchUserData.fulfilled.type]: (state, action) => {
			state.isLoading = false
			state.error = ''
		},
		[fetchUserData.rejected.type]: (state, action) => {
			state.isLoading = false
			state.error = action.payload
		}
	}
})

export default userSlice.reducer
