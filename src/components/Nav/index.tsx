import * as React from 'react'
import { useState, useEffect, useRef} from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useClass } from '../../hooks/useClass'
import { IconHouse, IconOperations, IconStatistics, IconPurposes, IconSetting } from '../Icons/Icons'
import { Eye } from '../Icons/Eye'
import { AddCircleBtn, NavButton } from './ui'

type NavType = {
	type?: 'main' | 'auxiliary'
}

export const Nav = ({type = 'main'}:NavType) => {
	
	const [navH, setNavH] = useState('0')
	const [typeStyles, setTypeStyles] = useState(['',''])
	const navRef = useRef<HTMLDivElement>(null)

	// const opacityAnimation = useClass('opacity-0', 'opacity-100')
	const opacityAnimation = (type === 'auxiliary') 
		? useClass('opacity-0', 'opacity-100')
		: 'opacity-100'
	const navAnimation = useClass('translate-y-[300%]', 'translate-y-[0%]') 
	const settingsAnimation = useClass('-rotate-180', 'rotate-90')
	const eyeAnimation = useClass('scale-0', 'scale-100')

	const typeStylesE = () => {
		if (type === 'auxiliary') {
			setNavH('50%')
			setTypeStyles(['delay-[0] duration-[0] invisible pointer-events-none opacity-0',
								'z-[1] translate-y-1/2'])
		} else {
			setNavH(navRef.current!.clientHeight + 20 + 'px')
			setTypeStyles(['transition-all delay-[1s] duration-[2s] visible opacity-100',
								'z-[-1]'])
		}
	}	
	
	useEffect(() => {
		typeStylesE()
	}, [type])

	return (
			<nav className={`fixed w-inherit transition-all duration-[2s] bottom-0 ${navAnimation}`} >
				<div ref={navRef} className='relative px-8 py-5 bg-white rounded-t-3xl'> 
					<div className={`flex justify-between ${typeStyles[0]}`}>
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
						transition-all delay-[1s] duration-[2s]
						${typeStyles[1]}
						${opacityAnimation}
						
						child:w-[40px] child:h-[40px]
					`} style={{bottom: navH}}>

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
