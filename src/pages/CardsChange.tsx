import * as React from 'react'
import { useDynamicElement } from '../hooks/useDynamicElement'

export const CardsChange = () => {

	useDynamicElement('topElement', {
		type: 'title',
		title: 'Card change'
	})
	useDynamicElement('navElement', {type: 'auxiliary'})
	
  return (
	 <div>
		<h1 className='mt-8 text-center'>In prosess....</h1>
	 </div>
  )
} 