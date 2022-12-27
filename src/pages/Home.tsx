import * as React from 'react'


import { useDynamicElement } from '../hooks/useDynamicElement';


export const Home = () => {
	
	useDynamicElement("topElement", {type: "currency"})
	useDynamicElement("navElement", {type: "show"})

  return (
	 <div>
	 </div>
  )
} 