import * as React from 'react'
import { useState, useEffect, useRef } from 'react'

import { Balance } from '../Balance'
import { Currency } from '../Currency'
import { IconSetting } from '../Icons/Icons';
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { fetchCurrency } from '../../store/reducers/ActionCreators'


import { useAnimate } from '../../hooks/useAnimate'



export const Header = () => {
	
	const dispatch = useAppDispatch()
	const {currency, isLoading, error} = useAppSelector(state => state.currencyReducer)
	error && console.log(error)
	
	const {list = {}, listOfNames = []} = useAppSelector(state => state.walletsListReducer)
	const listOfKeys = Object.keys(list)

	
	const { topElement } = useAppSelector(state => state.navElementsReducer)
	const currencyRef = useRef<HTMLDivElement>(null)
	const titleRef = useRef<HTMLDivElement>(null)
	const [refHeight, setRefHeight] = useState(0)
	const [lastTitle, setLastTitle] = useState("Title:")

	const styleOfButtons:string = "cursor-pointer transition-all w-[40px] h-[40px]"
	
	const headerClasses = useAnimate({
		"currency":  {
			bodyRadius: `rounded-3xl`,
			currencyPosition: `-translate-y-1/2`,
			titlePosition: `-translate-y-[300%]`,
		},
		"hide": {
			bodyRadius: ``,
			currencyPosition: `-translate-y-[300%]`,
			titlePosition: `-translate-y-[300%]`,
		},
		"title": {
			bodyRadius: `rounded-b-3xl`,
			currencyPosition: `-translate-y-[300%]`,
			titlePosition: `-translate-y-1/2`,
	
		},
		"search": {
			bodyRadius: `rounded-b-3xl`,
	
		}
	},{
		other:{
			bodyRadius: `rounded-3xl`,
		}, 
		prev: topElement.type, 
		hide: 'translate-y-[-300%]'
	})
	const headerStyles = headerClasses.classes

	useEffect(() => {
		if (topElement.type === 'currency') {
			setRefHeight(currencyRef.current!.clientHeight)
		}
		if(topElement.type === 'title') {
			setLastTitle(topElement.title)
			setRefHeight(titleRef.current!.clientHeight)
		}
		if(topElement.type === 'hide') {
			setRefHeight(0)
		}
		headerClasses.update(topElement.type)
	}, [topElement])

	useEffect(() => {
		if (!currency) {
			dispatch(fetchCurrency())
		}
	}, [])


  return (
	 <header className={`relative bg-white overflow-y-hidden transition-all duration-[2s] ${headerStyles.bodyRadius}`} style={{height: refHeight}}>
		<div ref={currencyRef} className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 w-full
													flex flex-row flex-nowrap snap-x overflow-x-scroll overflow-y-hidden
													transition-all duration-[2s] ${headerStyles.currencyPosition}`}>
			{isLoading && <div className='flex flex-col flex-center flex-[0_0_100%] w-full h-full self-center py-5 snap-center'><h2>Loading...</h2></div>}		
			{currency && 
				<>
					<Balance/> 
					{listOfKeys.reverse().map((el) => {
						return <Balance data={list[el]} key={el}/> 
					})}
					{listOfNames.length > 1 && <Currency/>}
				</>
			}
		</div>
		<div ref={titleRef} className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 
												w-full px-8 py-5
												flex flex-row flex-nowrap text-center justify-between items-center 
												transition-all duration-[2s] ${headerStyles.titlePosition}`}>
			<h2 className='font-OpenS font-semibold'>{lastTitle}</h2> 
			{(lastTitle.includes("Settings"))?<IconSetting className={`hover:rotate-45 ${styleOfButtons}`}/>: <div className={`${styleOfButtons}`}></div>}
		</div>
		
	 </header>
  )
} 


