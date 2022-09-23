import * as React from 'react'
import { CurrencyItem } from './CurrencyItem'
import { IBalance, ICurrency } from '../interfaces'
import { currencyNow, currencyNow2 } from '../data/MoneyInfo'

// currencyNow, currencyNow2 it is 2 static templates

// interface BalanceProps{
// 	balance: IBalance
// }

export const Currency = () => {
	const align = (currencyNow.length <= 3)? 'justify-center': 'justify-start'

  return (
		<div className='flex flex-col flex-center flex-[0_0_100%] w-full h-full self-center py-5 snap-center'>
			<span className={`flex flex-row flex-center flex-nowrap ${align} text-center overflow-x-scroll overflow-y-hidden font-OpenS font-semibol px-6`}>
				{currencyNow.map((el) => {
					return <CurrencyItem data={el} key={el.code}/>
				})}
			</span>
			<span className='text-xs opacity-50 text-center font-OpenS font-bold mx-auto mt-[1em] block'>30.08.2022</span>
		</div>
  )
}