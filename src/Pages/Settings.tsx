import * as React from 'react'
import { useState, useEffect } from 'react'
import{ useNavigate } from 'react-router-dom'

import { logout } from '../firebase'
import { TCurrency } from '../store/reducers/types'

import { CurrenctSelect } from '../components/Forms/CurrenctSelect'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { Block } from '../components/Block'
import { useDynamicElement } from '../hooks/useDynamicElement'

import { updatedBaseCurrency } from '../store/reducers/SettingsSlice'



export const Settings = () => {

	useDynamicElement('topElement', {
		type: 'title',
		title: 'Settings:'
	})
	useDynamicElement('navElement', {type: 'show'})

	const dispatch = useAppDispatch()
	const navigate = useNavigate()
	const { currentUser } = useAppSelector(state => state.userReducer)
	const { baseCurrency } = useAppSelector(state => state.settingsReducer)

	const [mainCurrency, setMainCurrency] = useState<TCurrency>(baseCurrency) 
  
	
	useEffect(()=>{
		dispatch(updatedBaseCurrency(
			{
				currentUser: currentUser?.uid, 
				currency: mainCurrency
			}
			))
	},[mainCurrency])

	return (
	  <div className='mt-8 child:mt-8'>
		 <Block>
		 	<div className='flex flex-row justify-start items-center child:mr-6 last:child:mr-0'>
				<div className='min-w-24 w-24 min-h-24 h-24 bg-eye bg-cover shadow-eye rounded-full'></div>
				<div className='flex flex-col'>
					<h2 className='text-3xl font-semibold font-Nunito'>{currentUser?.displayName || '404...'}</h2>
					<p className='text-base font-light font-Nunito'>{currentUser?.email || `4@4.${navigator.language}`}</p>
				</div>
			</div>
		 	<div className='flex items-center justify-between'>
				<h3 className='font-OpenS text-2xl font-semibold'>Main currency</h3>
				<CurrenctSelect defaulte={mainCurrency}
					onClick={(e:any) => {if(e.target.innerText){setMainCurrency(e.target.innerText.slice(0, 3))}}}
				/>
			</div>
		 </Block>

		 <button className={`flex mx-auto transition-all duration-[2s] 
								bg-black text-white font-Nunito font-semibold text-3xl px-7 py-3 rounded-2xl 
								hover:bg-white hover:text-black`} 
					onClick={()=>{
						logout()
						navigate('/login')
					}}
					>Exit</button>
	  </div>
  	)
} 