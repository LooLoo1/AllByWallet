import * as React from 'react'
import { useEffect } from 'react'
import { Balance } from './Balance'
import { Currency } from './Currency'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { fetchCurrency } from '../store/reducers/ActionCreators'

export const Header = () => {
	const dispatch = useAppDispatch()
	const {currency, isLoading, error} = useAppSelector(state => state.currencyReducer)
	error && console.log(error)
	
	const {list = {}, listOfNames = []} = useAppSelector(state => state.walletsListReducer)
	const listOfKeys = Object.keys(list)
	
	useEffect(() => {
		dispatch(fetchCurrency())
	}, [])

  return (
	 <header className='snap-mandatory snap-x flex flex-row flex-nowrap text-center overflow-x-scroll overflow-y-hidden bg-white rounded-3xl'>
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
	 </header>
  )
} 