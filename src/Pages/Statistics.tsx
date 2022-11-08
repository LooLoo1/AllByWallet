import * as React from 'react'

import { useDynamicElement } from '../hooks/useDynamicElement';


export const Statistics = () => {
	useDynamicElement("topElement", {type: "hide"})
	useDynamicElement("navElement", {type: "auxiliary"})
	
  return (
	 <div>
	 </div>
  )
} 