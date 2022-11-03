import * as React from 'react'; 
import { useEffect } from 'react'; 
import { Routes, Route, useLocation, useNavigate, Navigate } from 'react-router-dom'

import { Login, Home, Body } from './pages'
import { useAppDispatch, useAppSelector } from './hooks/redux';

import { db } from './firebase';
import { doc, getDoc, setDoc, query, limitToLast, orderBy, collection, getDocs, endAt } from "firebase/firestore"; 


export const App = () => {



// 	const test = async () => {
// 		const citiesRef = collection(db, "currency");
// 		const q = query(citiesRef, orderBy("updated") ,limitToLast(1));
// 		const querySnapshot = await getDocs(q);

// // console.log(querySnapshot); 
// 		querySnapshot.forEach((doc) => {
// 		// doc.data() is never undefined for query doc snapshots
// 			console.log(doc.id, " => ", doc.data());
// 		});
// 	}


	// test()




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
				</Route>
			</Routes>
		// </div>
	)
}