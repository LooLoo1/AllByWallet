import type { TCurrency } from '../../store/reducers/types'

type TCurencies = {
	[key: string | TCurrency]: {
		'fullName': string
		'code': string
		'symbol': string
  }
}

export const Curencies:TCurencies = {
	'ALL': {
		 'fullName': 'Albania Lek',
		 'code': 'ALL',
		 'symbol': 'Lek'
	},
	'AFN': {
		 'fullName': 'Afghanistan Afghani',
		 'code': 'AFN',
		 'symbol': '؋'
	},
	'ARS': {
		 'fullName': 'Argentina Peso',
		 'code': 'ARS',
		 'symbol': '$'
	},
	'AWG': {
		 'fullName': 'Aruba Guilder',
		 'code': 'AWG',
		 'symbol': 'ƒ'
	},
	'AUD': {
		 'fullName': 'Australia Dollar',
		 'code': 'AUD',
		 'symbol': '$'
	},
	'AZN': {
		 'fullName': 'Azerbaijan Manat',
		 'code': 'AZN',
		 'symbol': '₼'
	},
	'BSD': {
		 'fullName': 'Bahamas Dollar',
		 'code': 'BSD',
		 'symbol': '$'
	},
	'BBD': {
		 'fullName': 'Barbados Dollar',
		 'code': 'BBD',
		 'symbol': '$'
	},
	'BYN': {
		 'fullName': 'Belarus Ruble',
		 'code': 'BYN',
		 'symbol': 'Br'
	},
	'BZD': {
		 'fullName': 'Belize Dollar',
		 'code': 'BZD',
		 'symbol': 'BZ$'
	},
	'BMD': {
		 'fullName': 'Bermuda Dollar',
		 'code': 'BMD',
		 'symbol': '$'
	},
	'BOB': {
		 'fullName': 'Bolivia Bolíviano',
		 'code': 'BOB',
		 'symbol': '$b'
	},
	'BAM': {
		 'fullName': 'Bosnia and Herzegovina Convertible Mark',
		 'code': 'BAM',
		 'symbol': 'KM'
	},
	'BWP': {
		 'fullName': 'Botswana Pula',
		 'code': 'BWP',
		 'symbol': 'P'
	},
	'BGN': {
		 'fullName': 'Bulgaria Lev',
		 'code': 'BGN',
		 'symbol': 'лв'
	},
	'BRL': {
		 'fullName': 'Brazil Real',
		 'code': 'BRL',
		 'symbol': 'R$'
	},
	'BND': {
		 'fullName': 'Brunei Darussalam Dollar',
		 'code': 'BND',
		 'symbol': '$'
	},
	'KHR': {
		 'fullName': 'Cambodia Riel',
		 'code': 'KHR',
		 'symbol': '៛'
	},
	'CAD': {
		 'fullName': 'Canada Dollar',
		 'code': 'CAD',
		 'symbol': '$'
	},
	'KYD': {
		 'fullName': 'Cayman Islands Dollar',
		 'code': 'KYD',
		 'symbol': '$'
	},
	'CLP': {
		 'fullName': 'Chile Peso',
		 'code': 'CLP',
		 'symbol': '$'
	},
	'CNY': {
		 'fullName': 'China Yuan Renminbi',
		 'code': 'CNY',
		 'symbol': '¥'
	},
	'COP': {
		 'fullName': 'Colombia Peso',
		 'code': 'COP',
		 'symbol': '$'
	},
	'CRC': {
		 'fullName': 'Costa Rica Colon',
		 'code': 'CRC',
		 'symbol': '₡'
	},
	'HRK': {
		 'fullName': 'Croatia Kuna',
		 'code': 'HRK',
		 'symbol': 'kn'
	},
	'CUP': {
		 'fullName': 'Cuba Peso',
		 'code': 'CUP',
		 'symbol': '₱'
	},
	'CZK': {
		 'fullName': 'Czech Republic Koruna',
		 'code': 'CZK',
		 'symbol': 'Kč'
	},
	'DKK': {
		 'fullName': 'Denmark Krone',
		 'code': 'DKK',
		 'symbol': 'kr'
	},
	'DOP': {
		 'fullName': 'Dominican Republic Peso',
		 'code': 'DOP',
		 'symbol': 'RD$'
	},
	'XCD': {
		 'fullName': 'East Caribbean Dollar',
		 'code': 'XCD',
		 'symbol': '$'
	},
	'EGP': {
		 'fullName': 'Egypt Pound',
		 'code': 'EGP',
		 'symbol': '£'
	},
	'SVC': {
		 'fullName': 'El Salvador Colon',
		 'code': 'SVC',
		 'symbol': '$'
	},
	'EUR': {
		 'fullName': 'Euro Member Countries',
		 'code': 'EUR',
		 'symbol': '€'
	},
	'FKP': {
		 'fullName': 'Falkland Islands (Malvinas) Pound',
		 'code': 'FKP',
		 'symbol': '£'
	},
	'FJD': {
		 'fullName': 'Fiji Dollar',
		 'code': 'FJD',
		 'symbol': '$'
	},
	'GHS': {
		 'fullName': 'Ghana Cedi',
		 'code': 'GHS',
		 'symbol': '¢'
	},
	'GIP': {
		 'fullName': 'Gibraltar Pound',
		 'code': 'GIP',
		 'symbol': '£'
	},
	'GTQ': {
		 'fullName': 'Guatemala Quetzal',
		 'code': 'GTQ',
		 'symbol': 'Q'
	},
	'GGP': {
		 'fullName': 'Guernsey Pound',
		 'code': 'GGP',
		 'symbol': '£'
	},
	'GYD': {
		 'fullName': 'Guyana Dollar',
		 'code': 'GYD',
		 'symbol': '$'
	},
	'HNL': {
		 'fullName': 'Honduras Lempira',
		 'code': 'HNL',
		 'symbol': 'L'
	},
	'HKD': {
		 'fullName': 'Hong Kong Dollar',
		 'code': 'HKD',
		 'symbol': '$'
	},
	'HUF': {
		 'fullName': 'Hungary Forint',
		 'code': 'HUF',
		 'symbol': 'Ft'
	},
	'ISK': {
		 'fullName': 'Iceland Krona',
		 'code': 'ISK',
		 'symbol': 'kr'
	},
	'INR': {
		 'fullName': 'India Rupee',
		 'code': 'INR',
		 'symbol': '₹'
	},
	'IDR': {
		 'fullName': 'Indonesia Rupiah',
		 'code': 'IDR',
		 'symbol': 'Rp'
	},
	'IRR': {
		 'fullName': 'Iran Rial',
		 'code': 'IRR',
		 'symbol': '﷼'
	},
	'IMP': {
		 'fullName': 'Isle of Man Pound',
		 'code': 'IMP',
		 'symbol': '£'
	},
	'ILS': {
		 'fullName': 'Israel Shekel',
		 'code': 'ILS',
		 'symbol': '₪'
	},
	'JMD': {
		 'fullName': 'Jamaica Dollar',
		 'code': 'JMD',
		 'symbol': 'J$'
	},
	'JPY': {
		 'fullName': 'Japan Yen',
		 'code': 'JPY',
		 'symbol': '¥'
	},
	'JEP': {
		 'fullName': 'Jersey Pound',
		 'code': 'JEP',
		 'symbol': '£'
	},
	'KZT': {
		 'fullName': 'Kazakhstan Tenge',
		 'code': 'KZT',
		 'symbol': 'лв'
	},
	'KPW': {
		 'fullName': 'Korea (North) Won',
		 'code': 'KPW',
		 'symbol': '₩'
	},
	'KRW': {
		 'fullName': 'South Korean Won',
		 'code': 'KRW',
		 'symbol': '₩'
	},
	'KGS': {
		 'fullName': 'Kyrgyzstan Som',
		 'code': 'KGS',
		 'symbol': 'лв'
	},
	'LAK': {
		 'fullName': 'Laos Kip',
		 'code': 'LAK',
		 'symbol': '₭'
	},
	'LBP': {
		 'fullName': 'Lebanon Pound',
		 'code': 'LBP',
		 'symbol': '£'
	},
	'LRD': {
		 'fullName': 'Liberia Dollar',
		 'code': 'LRD',
		 'symbol': '$'
	},
	'MKD': {
		 'fullName': 'Macedonia Denar',
		 'code': 'MKD',
		 'symbol': 'ден'
	},
	'MYR': {
		 'fullName': 'Malaysia Ringgit',
		 'code': 'MYR',
		 'symbol': 'RM'
	},
	'MUR': {
		 'fullName': 'Mauritius Rupee',
		 'code': 'MUR',
		 'symbol': '₨'
	},
	'MXN': {
		 'fullName': 'Mexico Peso',
		 'code': 'MXN',
		 'symbol': '$'
	},
	'MNT': {
		 'fullName': 'Moroccan-dirham',
		 'code': 'MNT',
		 'symbol': ' د.إ'
	},
	'MZN': {
		 'fullName': 'Mozambique Metical',
		 'code': 'MZN',
		 'symbol': 'MT'
	},
	'NAD': {
		 'fullName': 'Namibia Dollar',
		 'code': 'NAD',
		 'symbol': '$'
	},
	'NPR': {
		 'fullName': 'Nepal Rupee',
		 'code': 'NPR',
		 'symbol': '₨'
	},
	'ANG': {
		 'fullName': 'Netherlands Antilles Guilder',
		 'code': 'ANG',
		 'symbol': 'ƒ'
	},
	'NZD': {
		 'fullName': 'New Zealand Dollar',
		 'code': 'NZD',
		 'symbol': '$'
	},
	'NIO': {
		 'fullName': 'Nicaragua Cordoba',
		 'code': 'NIO',
		 'symbol': 'C$'
	},
	'NGN': {
		 'fullName': 'Nigeria Naira',
		 'code': 'NGN',
		 'symbol': '₦'
	},
	'NOK': {
		 'fullName': 'Norway Krone',
		 'code': 'NOK',
		 'symbol': 'kr'
	},
	'OMR': {
		 'fullName': 'Oman Rial',
		 'code': 'OMR',
		 'symbol': '﷼'
	},
	'PKR': {
		 'fullName': 'Pakistan Rupee',
		 'code': 'PKR',
		 'symbol': '₨'
	},
	'PAB': {
		 'fullName': 'Panama Balboa',
		 'code': 'PAB',
		 'symbol': 'B/.'
	},
	'PYG': {
		 'fullName': 'Paraguay Guarani',
		 'code': 'PYG',
		 'symbol': 'Gs'
	},
	'PEN': {
		 'fullName': 'Peru Sol',
		 'code': 'PEN',
		 'symbol': 'S/.'
	},
	'PHP': {
		 'fullName': 'Philippines Peso',
		 'code': 'PHP',
		 'symbol': '₱'
	},
	'PLN': {
		 'fullName': 'Poland Zloty',
		 'code': 'PLN',
		 'symbol': 'zł'
	},
	'QAR': {
		 'fullName': 'Qatar Riyal',
		 'code': 'QAR',
		 'symbol': '﷼'
	},
	'RON': {
		 'fullName': 'Romania Leu',
		 'code': 'RON',
		 'symbol': 'lei'
	},
	'RUB': {
		 'fullName': 'Russia Ruble',
		 'code': 'RUB',
		 'symbol': '₽'
	},
	'SHP': {
		 'fullName': 'Saint Helena Pound',
		 'code': 'SHP',
		 'symbol': '£'
	},
	'SAR': {
		 'fullName': 'Saudi Arabia Riyal',
		 'code': 'SAR',
		 'symbol': '﷼'
	},
	'RSD': {
		 'fullName': 'Serbia Dinar',
		 'code': 'RSD',
		 'symbol': 'Дин.'
	},
	'SCR': {
		 'fullName': 'Seychelles Rupee',
		 'code': 'SCR',
		 'symbol': '₨'
	},
	'SGD': {
		 'fullName': 'Singapore Dollar',
		 'code': 'SGD',
		 'symbol': '$'
	},
	'SBD': {
		 'fullName': 'Solomon Islands Dollar',
		 'code': 'SBD',
		 'symbol': '$'
	},
	'SOS': {
		 'fullName': 'Somalia Shilling',
		 'code': 'SOS',
		 'symbol': 'S'
	},
	'ZAR': {
		 'fullName': 'South Africa Rand',
		 'code': 'ZAR',
		 'symbol': 'R'
	},
	'LKR': {
		 'fullName': 'Sri Lanka Rupee',
		 'code': 'LKR',
		 'symbol': '₨'
	},
	'SEK': {
		 'fullName': 'Sweden Krona',
		 'code': 'SEK',
		 'symbol': 'kr'
	},
	'CHF': {
		 'fullName': 'Switzerland Franc',
		 'code': 'CHF',
		 'symbol': 'CHF'
	},
	'SRD': {
		 'fullName': 'Suriname Dollar',
		 'code': 'SRD',
		 'symbol': '$'
	},
	'SYP': {
		 'fullName': 'Syria Pound',
		 'code': 'SYP',
		 'symbol': '£'
	},
	'TWD': {
		 'fullName': 'Taiwan New Dollar',
		 'code': 'TWD',
		 'symbol': 'NT$'
	},
	'THB': {
		 'fullName': 'Thailand Baht',
		 'code': 'THB',
		 'symbol': '฿'
	},
	'TTD': {
		 'fullName': 'Trinidad and Tobago Dollar',
		 'code': 'TTD',
		 'symbol': 'TT$'
	},
	'TRY': {
		 'fullName': 'Turkey Lira',
		 'code': 'TRY',
		 'symbol': '₺'
	},
	'TVD': {
		 'fullName': 'Tuvalu Dollar',
		 'code': 'TVD',
		 'symbol': '$'
	},
	'UAH': {
		 'fullName': 'Ukraine Hryvnia',
		 'code': 'UAH',
		 'symbol': '₴'
	},
	'AED': {
		 'fullName': 'UAE-Dirham',
		 'code': 'AED',
		 'symbol': ' د.إ'
	},
	'GBP': {
		 'fullName': 'United Kingdom Pound',
		 'code': 'GBP',
		 'symbol': '£'
	},
	'USD': {
		 'fullName': 'United States Dollar',
		 'code': 'USD',
		 'symbol': '$'
	},
	'UYU': {
		 'fullName': 'Uruguay Peso',
		 'code': 'UYU',
		 'symbol': '$U'
	},
	'UZS': {
		 'fullName': 'Uzbekistan Som',
		 'code': 'UZS',
		 'symbol': 'лв'
	},
	'VEF': {
		 'fullName': 'Venezuela Bolívar',
		 'code': 'VEF',
		 'symbol': 'Bs'
	},
	'VND': {
		 'fullName': 'Viet Nam Dong',
		 'code': 'VND',
		 'symbol': '₫'
	},
	'YER': {
		 'fullName': 'Yemen Rial',
		 'code': 'YER',
		 'symbol': '﷼'
	},
	'ZWD': {
		 'fullName': 'Zimbabwe Dollar',
		 'code': 'ZWD',
		 'symbol': 'Z$'
	}
}