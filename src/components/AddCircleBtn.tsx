import * as React from 'react'
import { useState, useEffect } from 'react'
import { IconAdd } from './Icons/Icons'
import { useClass } from './Hooks/useClass'


 export function AddCircleBtn(props:any) {

		let { click } = props

		//Add Btn effect
		let [addBTN, setAddBTN] = useState(false)

		const timeVait = 15000
		const timeDelate = 2000
		useEffect(() => {
			const create = setInterval(() => {setAddBTN(true)}, timeVait);
			const delite = setInterval(() => {setAddBTN(false)}, timeVait + timeDelate);
	
			return () => {
				clearInterval(create)
				clearInterval(delite)
			}
		}, []);
	
		const onHover = () => {setAddBTN(true)} 
		const onLeave  = () => {setAddBTN(false)} 
	
		let dynamicAddCircle = useClass('top-1/2 before:blur-none', 'top-0 before:blur-lg') 

	return (
		<button className={`
					group
					flex justify-center items-center
					absolute w-[75px] h-[75px] rounded-full bg-black left-1/2 
					transform -translate-x-1/2 -translate-y-2/4
					
					before:content-[""] before:absolute before:bg-black before:w-[52px] before:h-[15px] 
					before:rounded-[50%] before:transform 
					
					before:left-1/2 before:top-1/2 
					before:-translate-x-1/2 before:translate-y-[350%]

					transition-all delay-[0.5s] duration-[2s]
					${dynamicAddCircle}
					${addBTN
						? 'shadow-fire'
						: 'shadow-none'
					}
			`}
			onMouseOver={onHover} onMouseOut={onLeave} onClick={click}>
				<IconAdd color='#fff' className='
					w-[45%] h-[45%] transition-all 
					group-hover:scale-110 group-hover:rotate-90'/>
				</button>
	)
 }
