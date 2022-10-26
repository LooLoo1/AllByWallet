import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { UserState } from '../types'
import { useAppDispatch } from '../../../hooks/redux';
// import { settingsSlice } from '../../../store/reducers/SettingsSlice';

import { db } from '../../../firebase';
import { doc, setDoc, collection, addDoc, getDocs, updateDoc, arrayUnion} from "firebase/firestore"; 

// const {setSettings} = settingsSlice.actions
// const dispatch = useAppDispatch()


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
		settingsChange(state){
			
			if (state.currentUser !== null && state.currentUser.uid !== null) {
				const uid = state.currentUser.uid;
				(async () => {
					// https://www.fastforex.io/?gclid=Cj0KCQjwnP-ZBhDiARIsAH3FSRf-Lvxjopgu1gxDrIUBOSSWnrOOyAkK2h7inUGtfMlRLbVnqqQv1Y4aAhaUEALw_wcB
					// console.log(222);
					//✅✅✅
					// 	displayName: state.currentUser?.displayName,
					// 	email: state.currentUser?.email,
					// 	uid: state.currentUser?.uid,
					// await setDoc(doc(db, "users", uid), {
					// 	displayName: "Віталій Петрів",
					// 	email: "vamnir132132@gmail.com",
					// 	uid: "ui2tV04ucnagGAYX1I4MTaap2SU2",
					// 	settings:{
					// 		baseCurrency: "USD",
					// 		colorThema: 'white',
					// 		whiteThemaId: 'standart',
					// 		darkThemaId: 'standart',
					// 	}
					// }, { merge: true });

					//✅✅✅
// 						await setDoc(doc(db, "currency", "2022-10-10"), {}


					//✅✅✅
					// const cityRef = doc(db, "users", uid);
					// // setDoc(cityRef, data, { merge: true });
					
					// setDoc(cityRef, {"Cards && Wallets":{
					// 	"#id2":{
					// 		name: "TestWallet",
					// 		currency: ["EUR", "UAN"],
					// 		type: 'Wallet',
					// 		values: [20, 50]
					// 	}
					// 	}}, { merge: true });
					




				// 	const washingtonRef = doc(db, "users", uid);

				// 	await updateDoc(washingtonRef, {
				// 		// 'Cards && Wallets': arrayUnion("greater_virginia")
				// 		// 'Cards && Wallets': increment(50)
				//   });

				})()
			}
		},

		userDataFetching(state){
			state.isLoading = true
		},
		userDataFetchingSuccess(state, action){
			state.isLoading = false
			state.error = ''
			// console.log(action);
			// dispatch(setSettings(action.payload))
			// currencyFindFrech
		},
		userDataFetchingError(state, action: PayloadAction<string>){
			state.isLoading = false
			state.error = action.payload
		},

		singOut(state){
			localStorage.setItem('user', JSON.stringify(null))
			state.currentUser = null
		},
		// currencyFetchinh(state){
			
		// }

	}
})

export default userSlice.reducer
