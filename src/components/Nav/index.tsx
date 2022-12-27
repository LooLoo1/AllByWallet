import * as React from 'react'
import { useState, useEffect, useRef} from 'react'
import { Link, NavLink } from 'react-router-dom'

import { useClass } from '../../hooks/useClass'
import { useAnimate } from '../../hooks/useAnimate'
import { IconHouse, IconOperations, IconStatistics, IconPurposes, IconSetting } from '../Icons/Icons'
import { Eye } from '../Icons/Eye'
import { AddCircleBtn, NavButton } from './ui'
import { useAppDispatch, useAppSelector } from '../../hooks/redux';


export const Nav = () => {
	const [navHeight, setNavHeight] = useState('0')
	const navRef = useRef<HTMLDivElement>(null)
	
	const { navElement } = useAppSelector(state => state.navElementsReducer)

	const settingsAnimation = useClass('-rotate-180', 'rotate-90')
	const eyeAnimation = useClass('scale-0', 'scale-100')
	const navClasses = useAnimate({
		"show":  {
			body: `translate-y-0`,
			subNav: `opacity-100`, // delay-[1s] 
			frontNav: `delay-[1s] duration-[2s] visible opacity-100`,
			backNav: `z-[-1]`
		},
		"hide": {
			body: `translate-y-[300%]`,
			subNav: `opacity-0 translate-y-full`,
			frontNav: `transition-all delay-[1s] duration-[2s] visible opacity-100`,
			backNav: `z-[-1]`
		},
		"auxiliary": {
			body: `translate-y-0`,
			subNav: `opacity-100`,
			frontNav: `pointer-events-none opacity-0`,
			backNav: `duration-[2s] z-[1] translate-y-1/2`,
			// heightNav: `50%`
		}
	},{
		other:{
			body: `translate-y-[300%]`,
			subNav: `opacity-50`,
			frontNav: `duration-[1s] visible opacity-100`,
			backNav: `z-[-1]`,
			// heightNav: navRef.current!.clientHeight + 20 + 'px'
		}, 
		prev: navElement, //navElement.type 
		hide: 'translate-y-[300%]'
	}) 
	const navStyles = navClasses.classes



	useEffect(() => {
		if (navElement.type === 'auxiliary') {
			setNavHeight('50%')
		}
		if(navElement.type === 'show') {
			setNavHeight(navRef.current!.clientHeight + 20 + 'px')
		}
		navClasses.updateHide(navElement.type)
	}, [navElement])
	
	return (
			<nav className={`fixed w-inherit child:shadow-block transition-all duration-[2s] bottom-0 ${navStyles.body}`}>
				<div ref={navRef} className='relative px-8 py-5 bg-white rounded-t-3xl'> 
					 <div className={`flex justify-between ${navStyles.frontNav}`}>
						<div className='flex justify-between w-4/12'>
							<NavLink className={(e) => e.isActive ? "active" : " " } to='/home'>
								<NavButton title="Home" >
									<IconHouse/>
								</NavButton>
							</NavLink>
							<NavLink className={(e) => e.isActive ? "active" : " " } to='/operations'>
								<NavButton title="Operations" >
									<IconOperations/>
								</NavButton>
							</NavLink>
				
						</div>

						<Link to='/new'>
							<AddCircleBtn />
						</Link>

						<div className='flex justify-between w-4/12'>
							<NavLink className={`${(e:any) => e.isActive ? "active" : " " }`} to='/statistics'>
								<NavButton title="Statistics" >
									<IconStatistics/>
								</NavButton>
							</NavLink>

							<NavLink className={`${(e:any) => e.isActive ? "active" : " " }`} to='/purposes'>
								<NavButton title="Purposes" >
									<IconPurposes/>
								</NavButton>
							</NavLink>
				
						</div>
					</div>
					
					<div className={`absolute w-full 
						flex justify-between px-8
						
						left-1/2 transform -translate-x-1/2
						transition-all duration-[2s] 
						${navStyles.backNav}
						${navStyles.subNav}
						
						child:w-[40px] child:h-[40px]
					`} style={{bottom: navHeight}}>

						<Link to='/standby' className={`transition-all delay-[1.25s] duration-[2s] ${eyeAnimation}`}>
							<Eye className='bg-cover shadow-eye rounded-full bg-eye-ua w-inherit h-inherit'/>
						</Link>
						<Link to='/settings' className={`transition-all delay-[1.25s] duration-[2s] ease-in-over ${settingsAnimation}
						`}>
							<IconSetting className='transition-all hover:rotate-45'/>
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
