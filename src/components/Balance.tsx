import * as React from 'react'
import {IBalance, ICurrency} from '../interfaces'

interface BalanceProps{
	balance: IBalance
}

export const Balance = ({balance}: BalanceProps) => {
	const values = balance.values

	const currencyGenerate = (values:ICurrency[]) => {
		if (values.length == 1) {
			return <span className='mx-auto'>{values[0].amount}{values[0].currency}</span>
		}
		let circle = <span className='block w-[5px] h-[5px] bg-black rounded-full my-auto mx-5'></span>
		
		return values.map((obj:ICurrency, i:number) => {	
			let tempalte:string = obj['amount'] + obj['currency'];
			return (i < values.length - 1)
				? <span className='snap-center scroll-ml-[45px] flex flex-row' key={values[i].amount}>{tempalte}{circle}</span>
				: <span className='snap-center' key={values[i].amount}>{tempalte}</span>
		})
		
	}

  return (
	 <div className='flex-[0_0_100%] w-full h-full py-5 snap-center '>
		<span className='text-base opacity-50 text-center font-OpenS font-semibold mx-auto block'>{balance.title}</span>
		<h1 className='flex flex-row flex-nowrap text-center overflow-x-scroll overflow-y-hidden font-OpenS font-semibol px-6 snap-mandatory snap-x'>
			{currencyGenerate(values)}
		</h1>
	 </div>
  )
}