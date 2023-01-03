import { combineReducers, configureStore } from '@reduxjs/toolkit'
import userReducer from './reducers/UserSlice'
import currencyReducer from './reducers/CurrencySlice'
import settingsReducer from './reducers/SettingsSlice'
import walletsListReducer from './reducers/WalletsListSlice'
import navElementsReducer from './reducers/NavElementsSlice'

const rootReducer = combineReducers({
	userReducer, 
	currencyReducer,
	settingsReducer,
	walletsListReducer,
	navElementsReducer,
})

export const setupStore = () => {
	return configureStore({
		reducer: rootReducer
	})
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']