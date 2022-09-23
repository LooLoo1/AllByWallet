import * as React from 'react'
import { Balance } from './Balance'
import { Currency } from './Currency'
import { cards } from '../data/MoneyInfo'

export const Header = () => {
  return (
	 <header className='snap-mandatory snap-x flex flex-row flex-nowrap text-center overflow-x-scroll overflow-y-hidden bg-white rounded-3xl'>
		{cards.map((el) => {
			return <Balance balance={el} key={el.title}/> 
		})}
		<Currency/>
	 </header>
  )
} 