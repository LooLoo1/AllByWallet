import * as React from 'react'
import { DetailedHTMLProps, TextareaHTMLAttributes } from 'react'
import { useState, useEffect, useRef } from 'react'

type props = DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>,HTMLTextAreaElement>


export const TextArea = (atributes:props) => {
	const [ariaFontSize, setAriaFontSize] = useState(40)
	const [ariaHeight, setAriaHeight] = useState(ariaFontSize)
	const OnInput = (e:any) => {
		setAriaHeight(e.target.scrollHeight)
	}

	const OnkeyDelate = (e:any) => {
		const {key} = e
		if (key === "Backspace" || key === "Delete") {
			setAriaHeight(prev => prev - ariaFontSize)
			
		}
	}

	const inputRef = useRef(null);

  useEffect(() => {
    const size = window
      .getComputedStyle(inputRef.current!, null)
      .getPropertyValue("font-size");

		setAriaFontSize(Number(size.split('px').join('')) * 2);
		setAriaHeight(ariaFontSize)

  }, []);

  return (
	<textarea {...atributes} ref={inputRef}
				 onChange={(e)=>{OnInput(e); (atributes.onChange)? atributes.onChange(e) : atributes.onChange}}
				 onKeyDown={OnkeyDelate}
				 className={`text-xl font-Nunito font-semibold text-black outline-none pt-2 resize-none
				 				align-middle
				 				 ${atributes.className}`}
				 style={{height: ariaHeight + "px", ...atributes.style}}>		
	</textarea>
  )
} 