import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { SettingsState } from '../types'

const localStore = localStorage.getItem('settings')
const settingsStore = (typeof localStore === 'string')? JSON.parse(localStore) : null


const initialState: SettingsState = settingsStore || {
	baseCurrency: 'USD',
	colorThema: 'white',
	whiteThemaId: 'standart',
	darkThemaId: 'standart'
}


export const settingsSlice = createSlice({
	name: 'settings',
	initialState,
	reducers: {
		setSettings(state, action){
			state = action.payload
			localStorage.setItem('settings', JSON.stringify({...action.payload}))

		},
	}
})

export default settingsSlice.reducer
