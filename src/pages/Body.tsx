import * as React from 'react'
import { Outlet } from 'react-router-dom'
// import { useState, useEffect, useRef } from 'react' 

import { useAppSelector } from '../hooks/redux'
// import { userSlice } from '../store/reducers/UserSlice'
// import { fetchUserData } from '../store/reducers/ActionCreators'
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
	 <div className={'relative bg-gray max-w-[768px] w-full mx-auto min-h-screen overflow-y-hidden scroll-smooth pb-32'}>
			{ currentUser && <Header/> }
			<Outlet/>
			<Nav/>
	 </div>
  )
} 