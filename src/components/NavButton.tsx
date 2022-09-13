import * as React from 'react'
import { useState, useEffect } from 'react'

export default function NavButton(props:any) {
	let {children, title, defaulte, disabled = false, click} = props
	let [toggle, setToggle] = useState(defaulte)
	const handleClick = () => {
		click(title)
		// console.log(title);
		
	}; 
	useEffect(() => {
		setToggle(defaulte)
	}, [defaulte])
	// ${toggle ? '' : ''}
	
   return (
			<button className={`relative w-12 h-12 transition-all hover:opacity-100 disabled:opacity-20 ${toggle ? 'opacity-100' : 'opacity-50'}`} 
			onClick={handleClick} disabled={disabled}>
				<div className={`absolute transition-all left-1/2 -translate-x-1/2 ${toggle ? 'top-1/2 -translate-y-1/2 w-12 h-12' : 'top-0 w-8 h-8'}`}>
					{children}
				</div>
				<span className={`absolute transition-all left-1/2 -translate-x-1/2 font-Nunito font-normal
				${toggle 
					? 'bottom-1/2 -translate-y-1/2 text-[0]' 
					: '-bottom-[0.25em] text-sm'}`}
				>{title}</span>
			</button>
   )
}