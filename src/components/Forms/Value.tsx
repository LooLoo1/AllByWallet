import * as React from 'react'
import {DetailedHTMLProps, InputHTMLAttributes} from 'react'

type props = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>,HTMLInputElement>

export const Value = (atributes:props) => {
  return (
	 <div className={`relative bg-black py-1 px-7 w-24 rounded-md ${atributes.className}`} >0
		<input {...atributes} className={`absolute transform top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 overflow-hidden
								text-xl font-OpenS font-semibold text-center bg-black text-white rounded-md
								w-inherit h-inherit ${atributes.className} opacity-100`}
					type="number" autoComplete="off"/>
	 </div>
  )
} 