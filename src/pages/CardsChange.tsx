import * as React from 'react'
import { useDynamicElement } from '../hooks/useDynamicElement'

export const CardsChange = () => {

	useDynamicElement("topElement", {
		type: "title",
		title: "Card change"
	})
	useDynamicElement("navElement", {type: "auxiliary"})
	
  return (
	 <div>
	 </div>
  )
} 