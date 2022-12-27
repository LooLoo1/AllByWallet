import * as React from 'react'
import { useState, useEffect, useRef } from 'react'
import { useNavigate, useLocation} from 'react-router-dom';

import { Balance } from '../Balance'
import { Currency } from '../Currency'
import { Icons, IconSetting } from '../Icons/Icons';
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { settingsSlice } from '../../store/reducers/SettingsSlice';
import { fetchCurrency } from '../../store/reducers/ActionCreators'

import { useAnimate } from '../../hooks/useAnimate'
import { EscButton } from '../EscButton';


export const Header = () => {
	
	const dispatch = useAppDispatch()
	const {currency, isLoading, error} = useAppSelector(state => state.currencyReducer)
	error && console.log(error)
	
	const {list = {}, listOfNames = []} = useAppSelector(state => state.walletsListReducer)
	const listOfKeys = Object.keys(list)

	
	const { topElement } = useAppSelector(state => state.navElementsReducer)
	const currencyRef = useRef<HTMLDivElement>(null)
	const titleRef = useRef<HTMLDivElement>(null)
	const searchRef = useRef<HTMLDivElement>(null)
	const [refHeight, setRefHeight] = useState(0)
	const [lastTitle, setLastTitle] = useState("Title:")
	const navigate = useNavigate()
	const path = useLocation()


	const styleOfButtons:string = "cursor-pointer transition-all w-[40px] h-[40px]"
	
	const headerClasses = useAnimate({
		"currency":  {
			bodyRadius: `rounded-3xl`,
			currencyPosition: `-translate-y-1/2`,
			titlePosition: `-translate-y-[300%]`,
			searchPosition: `-translate-y-[300%]`,

		},
		"hide": {
			bodyRadius: `rounded-b-3xl`,
			currencyPosition: `-translate-y-[300%]`,
			titlePosition: `-translate-y-[300%]`,
			searchPosition: `-translate-y-[300%]`,

		},
		"title": {
			bodyRadius: `rounded-b-3xl`,
			currencyPosition: `-translate-y-[300%]`,
			titlePosition: `-translate-y-1/2`,
			searchPosition: `-translate-y-[300%]`,
	
		},
		"search": {
			bodyRadius: `rounded-b-3xl`,
			currencyPosition: `-translate-y-[300%]`,
			titlePosition: `-translate-y-[300%]`,
			searchPosition: `-translate-y-1/2`,
		}
	},{
		other:{
			body: `translate-y-0`,
			bodyRadius: `rounded-b-3xl`,
			currencyPosition: `-translate-y-[300%]`,
			titlePosition: `-translate-y-[300%]`,
			searchPosition: `-translate-y-[300%]`,
		}, 
		prev: topElement,
		hide: '-translate-y-[300%]',
		text: lastTitle
	})
	const headerStyles = headerClasses.classes
	const headerText = headerClasses.texts || ''


	useEffect(() => {
		if (topElement.type === 'currency') {
			setRefHeight(currencyRef.current!.clientHeight)
		}
		if(topElement.type === 'title') {
			setLastTitle(topElement.title)
			setRefHeight(titleRef.current!.clientHeight)
		}
		if(topElement.type === 'search') {
			setRefHeight(searchRef.current!.clientHeight)
		}
		if(topElement.type === 'hide') {
			setRefHeight(1)
		}
		headerClasses.update(topElement.type)

	}, [topElement])

	useEffect(() => {
		if (!currency) {
			dispatch(fetchCurrency())
		}
		
	}, [])


	
	const { categoryFillter } = useAppSelector(state => state.settingsReducer)
	const { setCategoryFillter, cleanCategoryFillter } = settingsSlice.actions


  return (
	 <header className={`relative bg-white shadow-block transition-all duration-[2s] ${headerStyles.bodyRadius} ${headerStyles.body}
	 							child:absolute child:top-1/2 child:left-1/2 child:transform child:-translate-x-1/2`} style={{height: refHeight}}>
		<div ref={currencyRef} className={`w-full flex flex-row flex-nowrap snap-x overflow-x-scroll overflow-y-hidden
													transition-all duration-[2s] ${headerStyles.currencyPosition}`}>
			{isLoading && <div className='flex flex-col flex-center flex-[0_0_100%] w-full h-full self-center py-5 snap-center'><h2 className='text-center'>Loading...</h2></div>}		
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

		<div ref={titleRef} className={`w-full px-8 py-5
												flex flex-row flex-nowrap text-center justify-between items-center 
												transition-all duration-[2s] ${headerStyles.titlePosition}`}>
			<h2 className='font-OpenS font-semibold'>{headerText}</h2> 
			<div onClick={()=>{navigate(-1); localStorage.removeItem(`form${path.pathname}`)}}>{(headerText.includes("Settings"))?<IconSetting className={`hover:rotate-45 ${styleOfButtons}`}/>: <EscButton className={`${styleOfButtons}`} color="white"/>}</div>
		</div>
		<div ref={searchRef} className={`w-full px-8 py-5
												flex flex-row flex-nowrap text-center justify-between items-center 
												transition-all duration-[2s] ${headerStyles.searchPosition}`}>
			<label htmlFor='search' className='cursor-pointer transition-all duration-100 hover:rotate-90'><Icons type='Search' className='min-w-[40px] min-h-[40px]' color='black'/></label>
			<input id="search" type='text' placeholder='Сategories:' value={categoryFillter} onChange={(e)=>{dispatch(setCategoryFillter(e.target.value))}}
					 className='w-3/5 outline-none text-3xl font-OpenS font-semibold leading-normal rounded-xl px-4
					 				focus-visible:border-none focus:border-none 
									placeholder:text-center
					 				placeholder:transition-all placeholder:duration-500
									placeholder:focus:transparent '/>
			<div onClick={()=>{navigate(-1); setTimeout(()=>{dispatch(cleanCategoryFillter())},1000) }}><EscButton className={`${styleOfButtons}`} color="white"/></div>
		</div>
		
	 </header>
  )
} 

