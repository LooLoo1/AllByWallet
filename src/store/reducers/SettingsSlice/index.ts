import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Category } from '../../../shared/lib/Category'
import { SettingsState } from '../types'

const localStore = localStorage.getItem('settings')
const settingsStore = (typeof localStore === 'string')? JSON.parse(localStore) : null

const settingsTemplate:SettingsState = {
	baseCurrency: 'USD',
	colorThema: 'white',
	whiteThemaId: 'standart',
	darkThemaId: 'standart',
	Сategories: Category,
	categoryFillter: ''
}

const initialState: SettingsState = {...settingsTemplate, ...settingsStore}


export const settingsSlice = createSlice({
	name: 'settings',
	initialState,
	reducers: {
		setSettings(state, action){
			state = action.payload
			localStorage.setItem('settings', JSON.stringify({...action.payload}))

		},
		setCategoryFillter(state, action:PayloadAction<string>){
			state.categoryFillter = action.payload
			
		},
		cleanCategoryFillter(state){
			state.categoryFillter = ''
	
		},
	}
})

export default settingsSlice.reducer
