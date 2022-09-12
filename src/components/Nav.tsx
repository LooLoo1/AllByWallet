import * as React from 'react'
import { useState, useEffect, useRef } from 'react'
import { useClass } from './Hooks/useClass'
import { IdivEL } from '../models'
import { IconHouse, IconOperations, IconStatistics, IconPurposes, IconSetting } from './Icons/Icons'
import { Eye } from './Icons/Eye'
import NavButton from './NavButton'
import { AddCircleBtn } from './AddCircleBtn'
import { Link, useLocation } from 'react-router-dom'

export default function Currency() {

	let [navH, setNavH] = useState(0)
	const navRef: IdivEL = useRef(null)
	useEffect(() => {
		setNavH(navRef.current!.clientHeight)
	})
	let dynamicNav = useClass('translate-y-[300%]', 'translate-y-[0%]') 


	// let location = useLocation()
	// let pageNow = location.pathname.slice(1).split('/')[0] 
	const activePageTemplate:string[] = ['House', 'Operations', 'Statistics', 'Purposes'] 
	// let arr = Array(activePageTemplate.length).fill(false)

	let [activePage, setActivePage] = useState([false, false, false, false])

	const click = (title:string) => {
		if (title) {
			let page = [...activePage]
			while (page.indexOf(true)) page[page.indexOf(true)] = false
			page[activePageTemplate.indexOf(title)] = true
			setActivePage(page)
		}
	}

return (
	 <nav className={`fixed w-inherit transition-all duration-[2s] bottom-0 ${dynamicNav} `} >
		<div ref={navRef} className='relative px-8 py-5 flex justify-between bg-white rounded-t-3xl'> 
			<div className=' flex justify-between w-4/12'>
				<Link to='/'>
					<NavButton title="House" defaulte={activePage[0]} click={(e:string) => {click(e)}}>
						<IconHouse/>
					</NavButton>
				</Link>
				<Link to='/operations'>
					<NavButton title="Operations" defaulte={activePage[1]} click={(e:string) => {click(e)}}>
						<IconOperations/>
					</NavButton>
				</Link>
	
			</div>

			<Link to='/new'>
				<AddCircleBtn click={(e:string) => {click(e)}}/>
			</Link>

			<div className='flex justify-between w-4/12'>
				<Link to='/statistics' className='pointer-events-none'>
					<NavButton title="Statistics" defaulte={activePage[2]} disabled={true} click={(e:string) => {click(e)}}>
						<IconStatistics/>
					</NavButton>
				</Link>

				<Link to='/purposes' className='pointer-events-none'>
					<NavButton title="Purposes" defaulte={activePage[3]} disabled={true} click={(e:string) => {click(e)}}>
						<IconPurposes/>
					</NavButton>
				</Link>
	
			</div>
			
			<div className={`absolute z-[-1]
				w-full
				flex justify-between px-8
				bottom-0 left-1/2 
				transform -translate-x-1/2
				transition-all delay-[1s] duration-[2s]
				
				child:w-[40px] child:h-[40px]
			`} style={{bottom: navH + 20 + 'px'}}>

				<Link to='/standby'>
					<Eye className='bg-cover shadow-eye rounded-full bg-eye-ua w-inherit h-inherit'/>
				</Link>
				<Link to='/settings'>
					<IconSetting/>
				</Link>

			</div>
		</div>
	 </nav>
  )
}

// Іконка
// Іконка
// +
// Іконка
// Іконка

// eyas
// settings

// *.pointer-event-none:has([disabled])