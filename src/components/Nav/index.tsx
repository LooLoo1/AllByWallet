import * as React from 'react'
import { useState, useEffect, useRef } from 'react'
import { useClass } from '../Hooks/useClass'
import { IdivEL } from '../../models'
import { IconHouse, IconOperations, IconStatistics, IconPurposes, IconSetting } from '../Icons/Icons'
import { Eye } from '../Icons/Eye'
// import AddCircleBtn from './ui/AddCircleBtn'
// import NavButton from './ui/NavButton'
import {AddCircleBtn, NavButton} from './ui'
import { Link, useLocation } from 'react-router-dom'

type NavType = {
	type?: 'main' | 'auxiliary'
}


export const Nav = ({type = 'main'}:NavType) => {
	
	const [navH, setNavH] = useState('0')
	const navRef: IdivEL = useRef(null)

	const location = useLocation()
	const pageNow = location.pathname.slice(1).split('/')[0] 
	const activePageTemplate:string[] = ['Home', 'Operations', 'Statistics', 'Purposes'] 
	const arr = Array(activePageTemplate.length).fill(false)
	
	arr[activePageTemplate.indexOf(
		pageNow === ''
			? 'Home' 
			: activePageTemplate[activePageTemplate.indexOf(pageNow[0].toUpperCase() + pageNow.slice(1))]
		)] = true

	const [activePage, setActivePage] = useState(arr)
	const click = (title:string) => {
		if (title) {
			let page = [...activePage]
			while (page.includes(true)) page[page.indexOf(true)] = false		
			page[activePageTemplate.indexOf(title)] = true
			setActivePage(page)
		}
	}

	const dynamicNav = useClass('translate-y-[300%]', 'translate-y-[0%]') 
	const opacity = useClass('opacity-0', 'opacity-100')
	const mainTemplate:string[] = ['','']
	const [typeStyles, setTypeStyles] = useState(mainTemplate)
	const typeStylesE = () => {
		switch (type) {
			case 'auxiliary':
				setNavH('50%')
				setTypeStyles(['delay-[0] duration-[0] invisible pointer-events-none opacity-0',
									'z-[1] translate-y-1/2'])
				break;
		
			default:
				setNavH(navRef.current!.clientHeight + 20 + 'px')
				setTypeStyles(['transition-all delay-[1s] duration-[2s] visible opacity-100',
									'z-[-1]'])
				break;
		}
	}	
	useEffect(() => {
		typeStylesE()
	}, [type])

	return (
		<nav className={`fixed w-inherit transition-all duration-[2s] bottom-0 ${dynamicNav}`} >
			<div ref={navRef} className='relative px-8 py-5 bg-white rounded-t-3xl'> 
				<div className={`flex justify-between ${typeStyles[0]}`}>
					<div className='flex justify-between w-4/12'>
						<Link to='/'>
							<NavButton title="Home" defaulte={activePage[0]} click={(e:string) => {click(e)}}>
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
				</div>
				
				<div className={`absolute w-full 
					flex justify-between px-8
					
					left-1/2 transform -translate-x-1/2
					transition-all delay-[1s] duration-[2s]
					${typeStyles[1]}
					${opacity}
					
					child:w-[40px] child:h-[40px]
				`} style={{bottom: navH}}>

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


// Icon
// Icon
// +
// Icon
// Icon

// Eyas
// Settings
