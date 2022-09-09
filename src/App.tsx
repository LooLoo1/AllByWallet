import * as React from 'react';
import Header from './components/Header'
import Nav from './components/Nav'

export const App = () => {
	return (
		<div className='bg-gray w-[428px] mx-auto min-h-screen scroll-smooth relative'>
			<Header/>
			<Nav/>
		</div>
	)
}