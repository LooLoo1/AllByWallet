import * as React from 'react'
import { useState, useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'

type TNavButton = {
	children?: React.ReactNode
	title: string
	defaulte?: boolean
	disabled?: boolean
}

export const NavButton = ({children, title, disabled = false}:TNavButton) => {
	const [toggle, setToggle] = useState(false)
	const navLink = useRef<HTMLButtonElement>(null)
	const location = useLocation()

  useEffect(() => {
	//   console.log(title, "=> ",location.pathname.includes(title.toLocaleLowerCase()));
	//   console.log(title, "=> ", navLink.current!.parentElement!.classList.contains('active'));
	  if(navLink.current) {
			setToggle(navLink.current!.parentElement!.classList.contains('active'))
		}else{
		 setToggle(false)
		}
	}, [location]
  )
	
   return (
			<button ref={navLink} className={`relative w-12 h-12 transition-all hover:opacity-100 disabled:opacity-20 ${toggle ? 'opacity-100' : 'opacity-50'}`} 
			disabled={disabled}>
				<div className={`absolute transition-all left-1/2 -translate-x-1/2 ${toggle ? 'top-1/2 -translate-y-1/2 w-12 h-12' : 'top-0 w-8 h-8'}`}>
					{children}
				</div>
				<span className={`absolute transition-all left-1/2 -translate-x-1/2 font-Nunito font-normal
					NavLink:bg-red-500
					${toggle 
						? 'bottom-1/2 -translate-y-1/2 text-[0]' 
						: '-bottom-[0.25em] text-sm'}`}
				>{title}</span>
			</button>
   )
}