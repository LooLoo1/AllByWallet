import * as React from 'react'
import { DetailedHTMLProps, HTMLAttributes } from 'react'

type props = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>,HTMLDivElement> & {type?:Rounded, children?: JSX.Element | JSX.Element[]}
type Rounded = "all" | "t" | "b" | "l" | "r"

export const Block = ({children, type = 'all', className, ...defaulte}:props) => {
  
	const borderRadius = (type === "all")? "rounded-3xl": `rounded-${type}-3xl`
	
	return (
	 <div {...defaulte} className={`py-6 px-8 bg-white shadow-block ${borderRadius} child:mt-6 first:child:mt-0 ${className}`}>
		{children}
		<i className='none rounded-3xl rounded-t-3xl rounded-b-3xl rounded-l-3xl rounded-r-3xl'></i>
	 </div>
  )
} 