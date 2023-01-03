import * as React from 'react'
import{ useNavigate } from 'react-router-dom'

import { Wallet } from '../components/Wallet'
import { Block } from '../components/Block'
import { useDynamicElement } from '../hooks/useDynamicElement'
import { useAppSelector, useAppDispatch } from '../hooks/redux'
import { newCard } from '../store/reducers/WalletsListSlice'

import { TWallet } from '../store/reducers/types'

export const CardsNew = () => {
	useDynamicElement('topElement', {
		type: 'title',
		title: 'Card type'
	})
	useDynamicElement('navElement', {type: 'hide'})

	const { currentUser } = useAppSelector(state => state.userReducer)
	const { baseCurrency } = useAppSelector(state => state.settingsReducer)
	const dispatch = useAppDispatch()
	const navigate = useNavigate()

	const TypeCards = ['Wallet', 'Card'] // Object.assign({}, ['a','b','c']);
	const template:{
		[key: string]: TWallet
	} = {
		'#id': {
			'type': TypeCards[0],
			 'currency': [
				  'USD',
				  'UAH',
				  'PLN',
				  'EUR'
			 ],
			 'name': 'Wallet',
			 'values': [
				  131,
				  450,
				  172.78,
				  404.36
			 ]
		},
		'#id2': {
			 'cardNumber': '3574 8388 2749 3693',
			 'values': [
				  3194
			 ],
			 'paymentNetwork': 'Visa',
			 'expirationDate': '09/27',
			 'name': 'Card',
			 'type': 'Card',
			 'currency': [
				  'UAH'
				]
			}
		}

	const wallwtsKeys = Object.keys(template).sort()

	return (
		<Block className='mt-8 py-12 flex flex-col items-center'>
			{wallwtsKeys.map((el, i) => <div key={el} onClick={()=>{
				dispatch(newCard(
					{
						currentUser: currentUser?.uid, 
						typeCard: TypeCards[i],
						currency: baseCurrency
					}
					))
					navigate(-1)
			}}><Wallet data={template[el]} /></div>)}
		</Block>
	)
} 