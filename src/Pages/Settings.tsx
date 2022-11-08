import * as React from 'react'

import { IconSetting } from '../components/Icons/Icons';

import { useDynamicElement } from '../hooks/useDynamicElement';


export const Settings = () => {

	useDynamicElement("topElement", {
		type: "title",
		title: "Settings:"
	})
	useDynamicElement("navElement", {type: "show"})
	// ,
	// buttonJSX: <IconSetting className='transition-all hover:rotate-45'/>
  
	return (
	  <div>
	  </div>
  	)
} 