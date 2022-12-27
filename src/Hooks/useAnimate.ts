import { useState } from 'react'

type TStartClasses = {
	[key: string]: any
}

type TAdditional = {
	other:any, 
	prev:any, 
	hide:string,
	text?:string
}

export const useAnimate = (options:TStartClasses, additial:TAdditional) => {
	const { other, prev, hide, text = '' } = additial
	const [classes, setClasses] = useState(options[prev.type])
	const [texts, setTexts] = useState(text)

	const [prevType, setPrevType] = useState(prev.type)
	const [prevTypeSettings, setPrevTypeSettings] = useState(prev)

	const setClassesAndType = (data:any, type:any, object?:any) => {
		setClasses(data)
		setPrevType(type)
		setPrevTypeSettings(object)
	}

	const update = (type: string) => {
		if (prev.title) {
			setTexts(prev.title)
		}
		if (prevType == prev.type) {

			const coincidence = [prev, prevTypeSettings]
						.map(object => JSON.stringify(object))

			if (coincidence[0] != coincidence[1]) {
				setClasses({...options[prevType], body: hide})
				setTexts(prevTypeSettings.title)

				setTimeout(()=>{
					setTexts(prev.title)
					setClassesAndType({...classes, ...options[type]}, prev.type, prev)
				}, 1800)
				return
			}			
			return
		}
		if (options[type]) {
			setClassesAndType({...other, ...options[type]}, prev.type, prev)
			return
		}
		setClassesAndType(other, prev.type, prev)
		return
	}

	const updateHide = (type: string) => {
		if (options[type]) {
			if (prevType != "hide" && prevType != prev.type) {
				setClasses({...options[prevType], body: hide})
				setTimeout(()=>{
					setClassesAndType({...classes, ...options[type]}, prev.type, prev)
				}, 1800)
				return
			}
			setClassesAndType({...other, ...options[type]}, prev.type, prev)
			return
		}
		setClassesAndType(other, prev.type, prev)
		return
	}


   return {classes, texts,  update, updateHide}
}

	// Template:
	// const navClasses = useAnimate({
	// 	"show":  'translate-y-[0%]',
	// 	"hide": 'translate-y-[300%]'
	// 	}, 
	// 	'translate-y-[300%]', navElement.type) 