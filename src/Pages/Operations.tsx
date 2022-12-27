import * as React from 'react'

import { useDynamicElement } from '../hooks/useDynamicElement';


export const Operations = () => {
	useDynamicElement("topElement", {type: "hide"})
	useDynamicElement("navElement", {type: "hide"})
	
  return (
	 <div>
	 </div>
  )
} 