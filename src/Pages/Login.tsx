import * as React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

import { auth } from "../firebase";
import { userSlice } from '../store/reducers/UserSlice';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { fetchUserData } from '../store/reducers/ActionCreators'

// import { IconGoogle } from '../Icons/Icons'


export const Login = () => {	
	const {setUser} = userSlice.actions
	const dispatch = useAppDispatch()
	const navigate = useNavigate()
	const [ErrorMessage, setErrorMessage] = useState('');
	
	const handleLogin = () => {
		const provider = new GoogleAuthProvider();
		signInWithPopup(auth, provider).then((result) => {
			const user = result.user
			// if (user.uid === process.env.WHITE_LIST_ID) {
				const {displayName, email, uid}:any = user
				dispatch(setUser({displayName, email, uid}))
				navigate('/')
		  		dispatch(fetchUserData({displayName, email, uid}))
			// }
		}).catch(() => {setErrorMessage('Error, try again...')}) 
	}

  return (
	 <div className='flex flex-col justify-center items-center py-6 px-8 h-[100vh] 
	 						child:font-Nunito child:font-semibold child:mb-6 child:last::mb-0 child:text-center' >
		<h1 className='h0'>Login:</h1>
		<p>Create an account with your email and access your data from any device at any time.</p>
		<span className='text-red-600'>{ErrorMessage}</span>
		<button onClick={handleLogin} className='flex flex-row items-center text-white bg-black text-3xl py-[.5em] px-[1.5em] rounded-2xl
								child:mr-[.25em] transition-all duration-100 ease-in-over hover:scale-110'>
			{/* <IconGoogle color='white' className='w-[1em] h-[1em]'/> */}
			Google
		</button>
	 </div>
  )
} 