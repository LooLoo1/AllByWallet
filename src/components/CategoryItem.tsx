import * as React from 'react'
import { Icons } from '../components/Icons/Icons'
import { TCategoryItem } from '../store/reducers/types'

import { DetailedHTMLProps, HTMLAttributes } from 'react'

type props = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>,HTMLDivElement> & {data:TCategoryItem}  

export const CategoryItem = ({data, ...atribute}: props) => {
	const {icon = 'QuestionMark', category = 'Select category'} = data
	// type, 
	const dataCategory = JSON.stringify(data)

  return (
	 <div className='flex items-center child:mr-6 last:child:m-0 cursor-pointer duration-200 opacity-50 hover:opacity-100' {...atribute} 
	 	data-category={dataCategory}>
		<Icons type={icon} className='w-10 h-10' data-category={dataCategory}/>
		<p className='font-Nunito font-semibold text-black text-xl' data-category={dataCategory}>{category}</p>
	 </div>
  )
} 