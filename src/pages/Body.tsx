import * as React from 'react'
import { Outlet } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'; 

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

	// const { navElement } = useAppSelector(state => state.navElementsReducer)


  return (
	 <div className={`relative bg-gray max-w-[744px] w-full mx-auto min-h-screen overflow-y-hidden scroll-smooth pb-32`}>
							{/* transition-all duration-1000 
	 					${(navElement.type === "hide")?"pb-10":"pb-32"} */}
			{ currentUser && <Header/>}
			
			<Outlet/>
			<Nav/>

	 </div>
  )
} 