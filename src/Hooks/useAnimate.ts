import { useState } from 'react'


type TStartClasses = {
	[key: string]: any
}

type TAdditional = {
	other:any, 
	prev:string, 
	hide:string
}

export const useAnimate = (options:TStartClasses, additial:TAdditional) => {
	const { other, prev, hide } = additial
	const [classes, setClasses] = useState(options[prev])
	const [prevType, setPrevType] = useState(prev)

	const setClassesAndType = (data:any, type:string) => {
		setClasses(data)
		setPrevType(type)
	}

	const update = (type: string) => {
		if (options[type]) {
			setClassesAndType({...other, ...options[type]}, prev)
			return
		}
		setClassesAndType(other, prev)
		return
	}

	const updateHide = (type: string) => {
		if (options[type]) {
			// console.log(prevType, prev);
			if (prevType != "hide" && prevType != prev) {
				setClasses({...options[prevType], body: hide})
				setTimeout(()=>{
					setClassesAndType({...classes, ...options[type]}, prev)
				}, 1800)
				return
			}
			setClassesAndType({...other, ...options[type]}, prev)
			return
		}
		setClassesAndType(other, prev)
		return
	}


   return {classes, update, updateHide}
}

	// Template:
	// const navClasses = useAnimate({
	// 	"show":  'translate-y-[0%]',
	// 	"hide": 'translate-y-[300%]'
	// 	}, 
	// 	'translate-y-[300%]', navElement.type) 