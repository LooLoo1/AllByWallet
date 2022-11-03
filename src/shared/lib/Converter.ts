import type { TCurrency, currencyData } from '../../store/reducers/types'

type TSettings = {
	from:TCurrency, 
	to:TCurrency, 
	value:number
}

export const Converter = (settings:TSettings, currencyState:currencyData):number => {
	if (currencyState) {
		const {from, to, value} = settings		
		const {data} = currencyState
		const result = (value * data.results[to] / data.results[from])
		return Number(result.toFixed(2))
	}
	return 0
}