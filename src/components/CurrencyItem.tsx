import * as React from 'react'

type TCurrencyItem = {
	data: {
		code: string
		value: number
	}
}

export const CurrencyItem = ({data}:TCurrencyItem) => {
 const {code, value} = data
 
  return (
	<p data-number={code} className='relative font-normal text-lg px-5
		after:content-[attr(data-number)] after:absolute after:opacity-20 after:font-extrabold after:text-4xl
		after:top-1/2 after:left-1/2 after:transform after:-translate-x-1/2 after:-translate-y-1/2'>
			{value}
	</p>
  )
}