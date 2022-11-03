import type { TCurrency, currencyData } from '../../store/reducers/types'

export const ExchangeRate = (baseCurrency:TCurrency, toCurrency:TCurrency, currencyState:currencyData) => {
	if (currencyState) {	
		const {data} = currencyState
		let result = data.results[baseCurrency] / data.results[toCurrency]
		// https://stackoverflow.com/questions/31001901/how-can-i-count-the-number-of-zero-decimals-in-javascript
		// return (result <= 0.1)? Number(result.toFixed(-Math.floor( Math.log10(result) + 1) + 2)) : Number(result.toFixed(2))		

		if(result <= 0.1) return Number(result.toFixed(-Math.floor( Math.log10(result) + 1) + 2))
		return Number(result.toFixed(2))	
		
		// Old methoad
		// return (result <= 0.1)? Number(result.toFixed(4)) :Number(result.toFixed(2))		
	}
	return 0
}
