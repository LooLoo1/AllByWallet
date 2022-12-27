import * as React from 'react'
import { useState, useEffect, useRef } from 'react'
import { DetailedHTMLProps, HTMLAttributes } from 'react'
import { IconArrow } from './Icons/Icons';
import { GenerateCategory } from "../shared/lib/GenerateCategory";

import { TCategoryTitle } from "../store/reducers/types";
type props = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>,HTMLDivElement> & {children?: JSX.Element | JSX.Element[]} & {data:TCategoryTitle} 

export const CategoryTitle = ({children, data, ...atributes}:props) => {
	const {title, list} = data
	const { onClick } = atributes
	const [openList, setOpenList] = useState<boolean>(false)
	const [conteinerHeight, setConteinerHeight] = useState<number>(1)
	const conteinerRef = useRef<HTMLDivElement>(null)

	const resetConteinerHeight = () => {
		if(conteinerRef.current){
			setConteinerHeight((openList)? 1 : conteinerRef.current.scrollHeight)
		}
	}
	// const parentUpdate = () => {
	// 	resetConteinerHeight()
	// 	// console.log('Prent')
	// }

	useEffect(()=>{
		resetConteinerHeight()
	},[openList])

  return (
		<div className='pl-4' onClick={ (onClick)?onClick:() => {}}>
			{/* onClick={ (onClick)?onClick:() => {}} */}
			<div className={`flex items-center justify-between cursor-pointer  ${(data && !openList)? 'mb-4' : 'mb-0'}`} //transition-all duration-500
				  onClick={() => {setOpenList(prev => !prev)}}>
				<h2 className='font-Nunito font-semibold text-black'>{`${title}:` || "Title H2:"}</h2>
				<IconArrow className={`min-w-4 w-4 min-h-4 h-4 transition-all duration-200 ${(openList)?'rotate-180':'rotate-0'}`}/>
			</div>
			{(data && list)? 
				(<div className={`overflow-hidden transition-all duration-500 ${(openList)?'opacity-0 max-h-0':'opacity-100 max-h-max'}`} 
						>
							{/* style={{height: conteinerHeight + "px"}} */}
					<div ref={conteinerRef} className={`child:mb-5 last:child:m-0`}
					> 
						{list.map(data => GenerateCategory(data))} 
						{/* ()=>{parentUpdate()} */}
					</div>
				</div>): ''}
		</div>
  )
} 