import { combineReducers, configureStore } from '@reduxjs/toolkit'
import userReducer from '../store/reducers/UserSlice'
import currencyReducer from '../store/reducers/CurrencySlice'
import settingsReducer from '../store/reducers/SettingsSlice'
import walletsListReducer from '../store/reducers/WalletsListSlice'
import navElementsReducer from '../store/reducers/NavElementsSlice'

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