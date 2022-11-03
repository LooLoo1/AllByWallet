// type colorThema = 'white' | 'dark' | 'dynamic'

export type TCurrency = 'AED' | 'AFN' | 'ALL' | 'AMD' | 'ANG' | 'AOA' | 'ARS' | 'AUD' | 'AWG' | 'AZN' | 'BAM' | 'BBD' | 'BDT' | 'BGN' | 'BHD' | 'BIF' | 'BMD' | 'BND' | 'BOB' | 'BRL' | 'BSD' | 'BTN' | 'BWP' | 'BZD' | 'CAD' | 'CDF' | 'CHF' | 'CLF' | 'CLP' | 'CNH' | 'CNY' | 'COP' | 'CUP' | 'CVE' | 'CZK' | 'DJF' | 'DKK' | 'DOP' | 'DZD' | 'EGP' | 'ERN' | 'ETB' | 'EUR' | 'FJD' | 'FKP' | 'GBP' | 'GEL' | 'GHS' | 'GIP' | 'GMD' | 'GNF' | 'GTQ' | 'GYD' | 'HKD' | 'HNL' | 'HRK' | 'HTG' | 'HUF' | 'IDR' | 'ILS' | 'INR' | 'IQD' | 'IRR' | 'ISK' | 'JMD' | 'JOD' | 'JPY' | 'KES' | 'KGS' | 'KHR' | 'KMF' | 'KPW' | 'KRW' | 'KWD' | 'KYD' | 'KZT' | 'LAK' | 'LBP' | 'LKR' | 'LRD' | 'LSL' | 'LYD' | 'MAD' | 'MDL' | 'MGA' | 'MKD' | 'MMK' | 'MNT' | 'MOP' | 'MRU' | 'MUR' | 'MVR' | 'MWK' | 'MXN' | 'MYR' | 'MZN' | 'NAD' | 'NGN' | 'NOK' | 'NPR' | 'NZD' | 'OMR' | 'PAB' | 'PEN' | 'PGK' | 'PHP' | 'PKR' | 'PLN' | 'PYG' | 'QAR' | 'RON' | 'RSD' | 'RUB' | 'RWF' | 'SAR' | 'SCR' | 'SDG' | 'SEK' | 'SGD' | 'SHP' | 'SLL' | 'SOS' | 'SRD' | 'SYP' | 'SZL' | 'THB' | 'TJS' | 'TMT' | 'TND' | 'TOP' | 'TRY' | 'TTD' | 'TWD' | 'TZS' | 'UAH' | 'UGX' | 'USD' | 'UYU' | 'UZS' | 'VND' | 'VUV' | 'WST' | 'XAF' | 'XCD' | 'XDR' | 'XOF' | 'XPF' | 'YER' | 'ZAR' | 'ZMW'

// type transaction = {
// 	values: number
// 	dataTime: string
// 	note?: string
// 	eventId?: string
// } & {
// 	type: "income" | "costs"
// 	categoryId: string
// 	currency: TCurrency
// 	cardId: string
	
// } | {
// 	type: "conversion"
// 	from: TCurrency
// 	to: TCurrency
// 	base: TCurrency
// 	fromCardId: string
// 	toCardId: string
// 	currency: {
// 		[key: TCurrency | string]: number
// 	}
// }

type Loading = {
	isLoading: boolean
	error: string
}

export type template = {
	// currentUser: string | null
	// currentUser: {
	// 	displayName: string
	// 	email: string
	// 	uid: string
	// } | null
	// settings?: {
	// 	baseCurrency: TCurrency
	// 	colorThema: 'white' | 'dark' | 'dynamic',
	// 	whiteThemaId: string
	// 	darkThemaId: string
	// }
	walletsList?: {
		[key: string]: {
			name: string
			currency: Array<TCurrency>
			type: string
			values: Array<number>
		}
	}
	// transaction?: transaction
}

export type CurentUser = {
	displayName: string
	email: string
	uid: string
}

export type UserState = {
	currentUser: CurentUser | null
} & Loading

export type SettingsState = {
	baseCurrency: TCurrency
	colorThema: 'white' | 'dark' | 'dynamic',
	whiteThemaId: string
	darkThemaId: string
} 

export type TWallet = {
		name: string
		currency: Array<TCurrency>
		type: string
		values: Array<number>
}

export type WalletsListState = {
	list?: {
		[key: string]: TWallet
	}
	listOfNames?: Array<TCurrency>
	listOfValues?: Array<number>
} 

export type currencyObject = {
	base: TCurrency
	results: {
		[key: TCurrency | string]: number
	}
	updated: string
}

export type currencyData = {
	id: string
	data: currencyObject 
} | null

export type currencyState = {
	currency: currencyData,
	currencyAll: Array<currencyData>,
} & Loading