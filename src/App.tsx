import * as React from 'react'
import { useEffect } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'

import { Login, Home, Body, Operations, Statistics, Settings, New, Categiries, CardsChange, CardsNew, Cards } from './pages'
import { useAppSelector } from './hooks/redux'


export const App = () => {

	const navigate = useNavigate()
	const {currentUser} = useAppSelector(state => state.userReducer)

	useEffect(() => {
		if(!currentUser) {navigate('/login')}
	}, [currentUser])
	
	return (
		// <div className='bg-gray w-[428px] mx-auto min-h-screen scroll-smooth relative'>
		// 	<Header/>
		// 	<Nav/>
			<Routes>
				<Route path='/' element={<Body/>}>
					<Route path='/' element={<Navigate to={'/home'}/>}/>

					<Route path='/home' element={<Home/>}/>
					<Route path='/operations' element={<Operations/>}/>

					<Route path='/statistics' element={<Statistics/>}/>
					<Route path='/statistics/income' element={<div/>}/>
					<Route path='/statistics/costs' element={<div/>}/>

					<Route path='/purposes' element={<div/>}/>
					<Route path='/purposes/new' element={<div/>}/>

					<Route path='/new' element={<New/>}/>
					<Route path='/new/categories' element={<Categiries/>}/>
					<Route path='/newcategory' element={<div/>}/>
					<Route path='/newcategory/images' element={<div/>}/>

					<Route path='/cards' element={<Cards/>}/>
					<Route path='/cards/new' element={<CardsNew/>}/>
					<Route path='/cards/change' element={<CardsChange/>}/>

					<Route path='/standby' element={<div/>}/>
					<Route path='/settings' element={<Settings/>}/>
					<Route path='/login' element={<Login/>}/>
					<Route path='*' element={<div>404</div>}/>
				</Route>
			</Routes>
		// </div>
	)
}