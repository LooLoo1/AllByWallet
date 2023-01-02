import * as React from 'react'
import { useEffect } from 'react'

import { CurrencyItem } from './CurrencyItem'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { ExchangeRate } from "../shared/lib/ExchangeRate";
import { walletsListSlice } from '../store/reducers/WalletsListSlice';


export const Currency = () => {
	const dispatch = useAppDispatch()

	const {currency} = useAppSelector(state => state.currencyReducer)
	const {baseCurrency} = useAppSelector(state => state.settingsReducer)
	const {list, listOfNames = []} = useAppSelector(state => state.walletsListReducer)
	const {resetListOfCurrencyNames} = walletsListSlice.actions

	const align = (listOfNames.length < 5)? 'justify-center': 'justify-start'

	useEffect(() => {
		dispatch(resetListOfCurrencyNames(list))
	},[list])
	
	return (
		<div className='flex flex-col flex-center flex-[0_0_100%] w-full h-full self-center py-5 snap-center'>
			<span className={`flex flex-row flex-center flex-nowrap ${align} text-center overflow-x-scroll overflow-y-hidden font-OpenS font-semibol px-6`}>
				{listOfNames.map((el) => {
					if (baseCurrency != el) {
						return <CurrencyItem currancyName={el} value={ExchangeRate(baseCurrency, el, currency)} key={el}/>
					}
				})}
			</span>
			<span className='text-xs opacity-50 text-center font-OpenS font-bold mx-auto mt-[1em] block'>{currency?.id.split('-').reverse().join('.')}</span>
			{/* <i className='px-4 px-6 px-8 px-10 px-12 px-14 px-0'></i> */}
		</div>
	)
}