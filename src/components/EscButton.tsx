import * as React from 'react'
import { IconAdd } from './Icons/Icons'

export const EscButton = ({className, color}:{className:string, color:string}) => {
	return (<div className={`relative bg-black rounded-xl hover-child:rotate-0 ${className}`}>
		<IconAdd className={'absolute w-1/4 h-1/4 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-200 rotate-45'} color={color}/>
	</div>)
}