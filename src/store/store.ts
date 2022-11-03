import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from './reducers/UserSlice'
import navReducer from './reducers/NavElementsSlice'
import currencyReducer from './reducers/CurrencySlice'
import settingsReducer from './reducers/SettingsSlice'
import walletsListReducer from './reducers/WalletsListSlice'

const rootReducer = combineReducers({
	userReducer, 
	navReducer, 
	currencyReducer,
	settingsReducer,
	walletsListReducer
})

export const setupStore = () => {
	return configureStore({
		reducer: rootReducer
	})
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']