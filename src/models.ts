export interface IBalance{
	title: string
	values: ICurrency[]
}

export interface ICurrency{
	currency: string
	amount: number
}

export interface IConversion{
	base: string
	results: Record<string, number>
	updated: string
	ms: number
}