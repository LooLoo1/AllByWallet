import * as React from 'react'; 
import { useEffect } from 'react'; 
import { Routes, Route, useLocation, useNavigate, Navigate } from 'react-router-dom'
import { Header } from './components/Header'
import { Nav } from './components/Nav'
import { Login } from './Pages'

import { useAppDispatch, useAppSelector } from './hooks/redux';
import { userSlice } from './store/reducers/UserSlice';



export const App = () => {

	const navigate = useNavigate()
	const {currentUser} = useAppSelector(state => state.userReducer)
	const currentURL = useLocation()
	useEffect(() => {
		// console.log(currentUser);
		if(!currentUser) {
			navigate('/login')
		}
	}, [currentUser])

	// useEffect(() => {

	// }, [currentURL])

	const {settingsChange} = userSlice.actions
	const dispatch = useAppDispatch()
	dispatch(settingsChange())
	

	return (
		<div className='bg-gray w-[428px] mx-auto min-h-screen scroll-smooth relative'>
			<Header/>
			<Nav/>
			<Routes>
				<Route path='/' element={<div/>}/>

				<Route path='/operations' element={<div/>}/>

				<Route path='/statistics' element={<div/>}/>
				<Route path='/statistics/income' element={<div/>}/>
				<Route path='/statistics/costs' element={<div/>}/>

				<Route path='/purposes' element={<div/>}/>
				<Route path='/purposes/new' element={<div/>}/>

				<Route path='/new' element={<div/>}/>
				<Route path='/new/catogories' element={<div/>}/>
				<Route path='/newcategory' element={<div/>}/>
				<Route path='/newcategory/images' element={<div/>}/>

				<Route path='/cards' element={<div/>}/>
				<Route path='/cards/new' element={<div/>}/>
				<Route path='/cards/change' element={<div/>}/>

				<Route path='/standby' element={<div/>}/>
				<Route path='/settings' element={<div/>}/>
				<Route path='/login' element={<Login/>}/>
				<Route path='*' element={<div>404</div>}/>
			</Routes>
		</div>
	)
}