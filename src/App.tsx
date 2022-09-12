import * as React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Nav from './components/Nav'

export const App = () => {
	return (
		<div className='bg-gray w-[428px] mx-auto min-h-screen scroll-smooth relative'>
			<Router>
			<Nav/>
				<Routes>
					<Route path='/' element={<Header/>}/>

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
					<Route path='/login' element={<div/>}/>
					<Route path='*' element={<div>Lol</div>}/>
				</Routes>
			</Router>
		</div>
	)
}