import * as React from 'react'
import { DetailedHTMLProps, LabelHTMLAttributes } from 'react'

type props = DetailedHTMLProps<LabelHTMLAttributes<HTMLInputElement>,HTMLInputElement> & 
	{
		name: string,
		title: string
	}

export const DateTime = (atributes:props) => {
  return (
	<label className='cursor-pointer flex flex-row align-center items-center justify-center child:mr-6 last:child:m-0'>
		<span className={`font-OpenS font-semibold text-black text-2xl
					${atributes.className}`}>{atributes.title}</span>
		<input {...atributes} title='' 
				className={`w-60 px-5 cursor-pointer text-xl font-OpenS font-semibold text-center bg-black outline-white text-white rounded-md
					${atributes.className}`}
			type='datetime-local' autoComplete='off'/>
	</label>
  )
} 