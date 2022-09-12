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

export interface INav{
	title: string
	icon: string
}

export interface IdivEL {
	current: HTMLDivElement | null;
 }