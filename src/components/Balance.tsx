import * as React from 'react' 
import { useState, useEffect }from 'react' 

import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { Converter } from "../shared/lib/Converter"
import { Curencies } from "../shared/lib/Curencies"
import { walletsListSlice } from '../store/reducers/WalletsListSlice'

import type { TWallet } from "../store/reducers/types"

type props = {
	data?: TWallet
} 

export const Balance = ({data}: props) => {
	const dispatch = useAppDispatch()
	const {resetListOfCurrencyNames, resetListOfCurrencyValues} = walletsListSlice.actions
	const {currency} = useAppSelector(state => state.currencyReducer)
	const {baseCurrency} = useAppSelector(state => state.settingsReducer)
	
	const {list, listOfNames = [], listOfValues = []} = useAppSelector(state => state.walletsListReducer)
	const [showCurrency, setShowCurrency] = useState(baseCurrency)

	const showCurrencyList = Array.from(new Set([baseCurrency, ...listOfNames]))
	const align = (data && data.values.length >= 3)? 'justify-start' : 'justify-center'  
	let template

	if (data) {
		const {values, currency} = data 
		if (values.length === currency.length){
			const circle = <span className='block w-[5px] h-[5px] bg-black rounded-full my-auto mx-5'></span>
			template = values.map((_, i) => {
				// const templateInfo:string = values[i] + currency[i]
				// const templateInfo:string = new Intl.NumberFormat(navigator.language, { style: 'currency', currency: currency[i] }).format(values[i])
				// if(values[i] !== 0){
					const templateInfo = <><span>{new Intl.NumberFormat(navigator.language, { style: 'decimal', maximumFractionDigits: 2 }).format(values[i])}</span><span className='ml-2'>{Curencies[currency[i]].symbol}</span> </>
					return (i < values.length - 1)
							? <span className='snap-center scroll-ml-[45px] flex flex-row' key={values[i]}>{templateInfo}{circle}</span>
							: <span className='snap-center' key={values[i]}>{templateInfo}</span>	
				// }
			})
		}
		if (values.length === 0) {
			template = <span className='snap-center'>Don't have money</span>	
		}

	} else {
		const currencyResult: number | string  = listOfValues.reduce((acc:number, el:number, i:number) => 
			acc + Converter({from: listOfNames[i], to: showCurrency, value: listOfValues[i]}, currency)
		,0) 
		// currencyResult = Number(currencyResult.toFixed(2))	+ baseCurrency
		// currencyResult = new Intl.NumberFormat('en-US', { style: 'currency', currency: baseCurrency }).format(currencyResult)
		// currencyResult = new Intl.NumberFormat(navigator.language, { style: 'currency', currency: baseCurrency }).format(currencyResult)
		const currencyResultElem = <><span>{new Intl.NumberFormat(navigator.language, { style: 'decimal', maximumFractionDigits: 2 }).format(currencyResult)}</span><span className='ml-2'>{Curencies[showCurrency].symbol}</span> </>
		// currencyResult = `${new Intl.NumberFormat(navigator.language, { style: 'decimal', maximumFractionDigits: 2 }).format(currencyResult)} ${Curencies[showCurrency].symbol}`
		template = <span className='mx-auto'>{currencyResultElem}</span> 
	}

	const changeCyrrency = () => {
		setShowCurrency((showCurrencyList.indexOf(showCurrency) + 1 == showCurrencyList.length)? showCurrencyList[0]: showCurrencyList[showCurrencyList.indexOf(showCurrency) + 1])		
	}

	useEffect(() => {
		dispatch(resetListOfCurrencyNames(list))
		dispatch(resetListOfCurrencyValues(list))
	},[list])

	useEffect(()=>{
		setShowCurrency(baseCurrency)
	},[baseCurrency])
	
   return (
		<div className='flex-[0_0_100%] w-full h-full py-5 snap-center cursor-pointer' onClick={(!data)? () => {changeCyrrency()}: changeCyrrency}>
			<span className='text-base opacity-50 text-center font-OpenS font-semibold mx-auto block'>{(data)? data.name : "Global"} balance</span>
			<h1 className={`flex flex-row flex-nowrap flex-center ${align} text-center overflow-x-scroll overflow-y-hidden font-OpenS font-semibol px-6 snap-mandatory snap-x`}>
				{template} 
			</h1>
		</div>
   )
}