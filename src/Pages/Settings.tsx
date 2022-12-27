import * as React from 'react'

import { useDynamicElement } from '../hooks/useDynamicElement';


export const Settings = () => {

	useDynamicElement("topElement", {
		type: "title",
		title: "Settings:"
	})
	useDynamicElement("navElement", {type: "show"})
  
	return (
	  <div>
	  </div>
  	)
} 