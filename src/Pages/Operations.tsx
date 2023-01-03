import * as React from 'react'
import { useDynamicElement } from '../hooks/useDynamicElement'

export const Operations = () => {
	useDynamicElement('topElement', {type: 'hide'})
	useDynamicElement('navElement', {type: 'hide'})
	
  return (
	 <div>
		<h1 className='mt-8 text-center'>In prosess....</h1>
	 </div>
  )
} 