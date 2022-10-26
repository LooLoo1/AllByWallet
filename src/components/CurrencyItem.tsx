import * as React from 'react'

import { TCurrency } from "../store/reducers/types";

type props = {
	currancyName:TCurrency,
	value: number
}

export const CurrencyItem = ({currancyName, value}:props) => {
	const PaddingSize = `px${String(value).length * 2 - 16}`
	return (
		<p data-number={currancyName} className={`relative font-normal text-lg ${PaddingSize}
			after:content-[attr(data-number)] after:absolute after:opacity-20 after:font-extrabold after:text-4xl
			after:top-1/2 after:left-1/2 after:transform after:-translate-x-1/2 after:-translate-y-1/2`}>
				{value}
		</p>
	)
}