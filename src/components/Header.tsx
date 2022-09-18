import * as React from 'react'
import Balance from './Balance'
import Currency from './Currency'
import { cards } from '../data/MoneyInfo'
import {IBalance} from '../models'

export default function Header() {
  return (
	 <header className='snap-mandatory snap-x flex flex-row flex-nowrap text-center overflow-x-scroll overflow-y-hidden bg-white rounded-3xl'>
		{cards.map((el:IBalance, i:number) => {
			return <Balance balance={cards[i]} key={cards[i].title}/> 
		})}
		<Currency/>
	 </header>
  )
}