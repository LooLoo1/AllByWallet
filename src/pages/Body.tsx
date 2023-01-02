import * as React from 'react'
import { Outlet } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'; 

import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { userSlice } from '../store/reducers/UserSlice';
import { fetchUserData } from '../store/reducers/ActionCreators'
import { Header } from '../components/Header'
import { Nav } from '../components/Nav'
import { useClass } from '../hooks/useClass'


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
	// const bodyAnimation = useClass('opacity-0', 'opacity-100')

  return (
	 <div className={`relative bg-gray max-w-[768px] w-full mx-auto min-h-screen overflow-y-hidden scroll-smooth pb-32`}>
							{/* mt-11 md:mt-0 
							shadow-[0_-44px_0_0_#000] md:shadow-none
							transition-all duration-1000 
	 					${(navElement.type === "hide")?"pb-10":"pb-32"} */}
			{ currentUser && <Header/>}
			
			{/* <div className={`transition-all duration-1000 ${bodyAnimation}`}> */}
				<Outlet/>
			{/* </div> */}
			<Nav/>

	 </div>
  )
} 