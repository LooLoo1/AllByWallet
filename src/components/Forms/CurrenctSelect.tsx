import * as React from 'react'
import { useState, useEffect, useMemo, DetailedHTMLProps, HTMLAttributes } from 'react'
import { useAppSelector } from '../../hooks/redux'

import { IconArrow } from '../Icons/Icons'


type props = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>,HTMLDivElement> & { defaulte:string, name?:string }


export const CurrenctSelect = (atributes:props) => {
	
	const {className, defaulte, ...props} = atributes

	const { currency } = useAppSelector(state => state.currencyReducer)
	const { baseCurrency } = useAppSelector(state => state.settingsReducer)
	const { listOfNames = [] } = useAppSelector(state => state.walletsListReducer)

	const [selectCurrency, setSelectCurrency] = useState<string>(defaulte || baseCurrency)
	const [openList, setOpenList] = useState<boolean>(false)

	const selectCurrencyList = useMemo(() => Array.from(new Set([...listOfNames, ...Object.keys(currency?.data.results || [])])) ,[listOfNames])

	useEffect(()=>{
		setSelectCurrency(defaulte)
	},[defaulte])

	return (
		<div tabIndex={0} {...props} className={`relative flex items-center child:mr-1.5 last:child:m-0 cursor-pointer ${className}`} 
				 onFocus={()=>{setOpenList(true)}}
				 onBlur={()=>{setOpenList(false)}}>
			<IconArrow className={`w-4 h-4 transition-all duration-200  ${(openList)?'rotate-180':'rotate-0'}`}/>
			<span className='font-OpenS font-semibold text-black text-2xl'>{selectCurrency}</span>
			<ul className={`absolute translate-y-full bottom-0 z-50
								w-16 max-h-52 overflow-y-auto transition-all duration-500 
								bg-white rounded-xl shadow-block 
								${(openList)?'max-h-52 opacity-100 pointer-events-auto':'max-h-0 opacity-0 pointer-events-none'}`}> 
				{selectCurrencyList.map((el) => <li className={`cursor-pointer text-center opacity-50 px-3 py-1 transition-all duration-200 
														  hover:bg-black hover:font-bold hover:text-white 	
														  ${(selectCurrency === el)?'bg-black font-bold text-white opacity-100':''}`} 
														  onClick={(e:any)=>{
																setSelectCurrency(el)
																e.target.parentElement.parentElement.blur()
														  }} 
														  key={el}>{el}</li>)}
			</ul>
		</div>
	)
} 