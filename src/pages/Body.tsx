import * as React from 'react'
import { Outlet } from 'react-router-dom'
import { useEffect } from 'react'; 

import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { userSlice } from '../store/reducers/UserSlice';
import { fetchUserData } from '../store/reducers/ActionCreators'
import { Header } from '../components/Header'
import { Nav } from '../components/Nav'


export const Body = () => {
	const { currentUser } = useAppSelector(state => state.userReducer)
	// const {settingsChange} = userSlice.actions
	// const dispatch = useAppDispatch()
	// useEffect(() => {
	// 	// dispatch(settingsChange())
	// 	// if(currentUser){
	// 	// 	// Need
	// 	// 	// dispatch(fetchUserData(currentUser))
	// 	// }
	// }, [])

  return (
	 <div className='bg-gray w-[428px] mx-auto min-h-screen scroll-smooth relative'>
			{ currentUser && <Header/>}
			<Nav/>
			<Outlet/>
	 </div>
  )
} 