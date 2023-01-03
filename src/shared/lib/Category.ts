import type { CategoryList } from '../../store/reducers/types'

export const Category:CategoryList[] =  [
   {
		'type': 'CONVERSION',
		'icon': 'QuestionMark',
		'category': 'Conversion'
	},
	{
		'type': 'CORRECTION',
		'icon': 'QuestionMark',
		'category': 'Correction'
	},
	{
		'title': 'Necessary expenses',
		'list': [
			{
				'title': 'Meal',
				'list': [
					{
						'type': '-',
						'icon': 'QuestionMark',
						'category': 'Food and drink'
					},
					{
						'type': '-',
						'icon': 'QuestionMark',
						'category': 'Alcohol'
					}
				]
			},
			{
				'title': 'Transport',
				'list': [
					{
						'type': '-',
						'icon': 'QuestionMark',
						'category': 'Public transport'
					},
					{
						'type': '-',
						'icon': 'QuestionMark',
						'category': 'Taxi'
					}
				]
			},
			{
				'type': '-',
				'icon': 'QuestionMark',
				'category': 'Rent'
			},
			{
				'type': '-',
				'icon': 'QuestionMark',
				'category': 'Repain'
			},
			{
				'title': 'Utilities',
				'list': [
					{
						'type': '-',
						'icon': 'QuestionMark',
						'category': 'Water bills'
					},
					{
						'type': '-',
						'icon': 'QuestionMark',
						'category': 'Electricity bills'
					},
					{
						'type': '-',
						'icon': 'QuestionMark',
						'category': 'Gas bills'
					},
					{
						'type': '-',
						'icon': 'QuestionMark',
						'category': 'Internet bills'
					},
					{
						'type': '-',
						'icon': 'QuestionMark',
						'category': 'Other utilities'
					}
				]
			}

		]
	},
	{
		'title': 'Personal expenses',
		'list': [
			{
				'type': '-',
				'icon': 'QuestionMark',
				'category': 'Home service'
			},
			{
				'type': '-',
				'icon': 'QuestionMark',
				'category': 'Household services'
			},
			{
				'type': '-',
				'icon': 'QuestionMark',
				'category': 'Household items'
			},
			{
				'type': '-',
				'icon': 'QuestionMark',
				'category': 'Medical check'
			},
			{
				'type': '-',
				'icon': 'QuestionMark',
				'category': 'Insurance'
			},
			{
				'type': '-',
				'icon': 'QuestionMark',
				'category': 'Education'
			},
			{
				'type': '-',
				'icon': 'QuestionMark',
				'category': 'Personal belongings'
			},
			{
				'type': '-',
				'icon': 'QuestionMark',
				'category': 'Cloth'
			},
			{
				'title': 'Pets',
				'list': [
					{
						'type': '-',
						'icon': 'QuestionMark',
						'category': 'Food and products'
					},
					{
						'type': '-',
						'icon': 'QuestionMark',
						'category': 'Toys and clothes'
					},
					{
						'type': '-',
						'icon': 'QuestionMark',
						'category': 'Medical care'
					}
				]
			},
			{
				'title': 'Car',
				'list': [
					{
						'type': '-',
						'icon': 'QuestionMark',
						'category': 'Technical service'
					},
					{
						'type': '-',
						'icon': 'QuestionMark',
						'category': 'Fuel'
					}
				]
			},
			{
				'type': '-',
				'icon': 'QuestionMark',
				'category': 'Other expenses'
			},
			{
				'type': 'TAX',
				'icon': 'QuestionMark',
				'category': 'Tax'
			}
			
		]
	},
	{
		'title': 'Fun & Recreation',
		'list': [
			{
				'title': 'Sport',
				'list': [
					{
						'type': '-',
						'icon': 'QuestionMark',
						'category': 'Sports class subscription'
					},
					{
						'type': '-',
						'icon': 'QuestionMark',
						'category': 'Sports supplements'
					},
					{
						'type': '-',
						'icon': 'QuestionMark',
						'category': 'Sport equipment'
					}						
				]
			},
			{
				'title': 'Travel',
				'list': [
					{
						'type': '-',
						'icon': 'QuestionMark',
						'category': 'Souvenirs'
					}					
				]
			},
			{
				'type': '-',
				'icon': 'QuestionMark',
				'category': 'Gifts and donations'
			},
			{
				'type': '-',
				'icon': 'QuestionMark',
				'category': 'Games'
			}
		]
	},
	{
		'title': 'Income',
		'list': [
			{
				'type': '+',
				'icon': 'QuestionMark',
				'category': 'Salary'
			},
			{
				'type': '+',
				'icon': 'QuestionMark',
				'category': 'Scholarship'
			},
			{
				'type': '+',
				'icon': 'QuestionMark',
				'category': 'Premium'
			},
			{
				'type': '+',
				'icon': 'QuestionMark',
				'category': 'Donated money'
			},
			{
				'type': '+',
				'icon': 'QuestionMark',
				'category': 'Other income'
			}
				
		]
	}
]