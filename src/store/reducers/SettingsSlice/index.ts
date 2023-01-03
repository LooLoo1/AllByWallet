import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import { Category } from '../../../shared/lib/Category'
import { SettingsState } from '../types'
import { db } from '../../../firebase'
import { doc, setDoc} from 'firebase/firestore' 

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

export const updatedBaseCurrency = createAsyncThunk(
	'settings/updated',
	async ({currentUser, currency}: any, thunkAPI) => {
		try {
			if (currentUser) {
				setDoc(doc(db, 'users', currentUser ), {'settings': {'baseCurrency': currency}}, { merge: true })
				return  {...initialState, ...{'baseCurrency': currency}} 
			}
		}
		catch (e) {
			thunkAPI.rejectWithValue(e)
		}
	}
)

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
	},
	extraReducers: {
		[updatedBaseCurrency.fulfilled.type]: (state, action) => {
			state.baseCurrency = action.payload.baseCurrency
			localStorage.setItem('settings', JSON.stringify(action.payload))
		},
	
	}
})

export default settingsSlice.reducer
