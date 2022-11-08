import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from './redux';
import { NavElements, NavElementsKeys, navElementsSlice } from '../store/reducers/NavElementsSlice'


export const useDynamicElement = (dynamicElement: NavElementsKeys, description: NavElements, duration: number = 2000) => {

	const navElements = useAppSelector(state => state.navElementsReducer)
	const { setNavElement, setTopElement } = navElementsSlice.actions
	const dispatch = useAppDispatch()
	// const location = useLocation()

	useEffect(() => {
		if (dynamicElement === "navElement") {
			dispatch(setNavElement(description))
		}
		if (dynamicElement === "topElement") {
			dispatch(setTopElement(description))
		}
			// if (JSON.stringify(navElements) !== JSON.stringify(description)) {
				// console.log(JSON.stringify(navElements),"\n", JSON.stringify(description));
				
			// }

		
	}, [])
			// 	if (description.type === "show" || description.type === "hide") {
			// 		// return {type: description, duration: duration}
			// 	}
			// 	// if (description.type === "hide") {
			// 	// 	// dispatch(setType('Lol'))
			// 	// 	// return {type: description, duration: duration}
			// 	// }
			// if (dynamicElement === "topElement") {
			// 	//...
			// }
			
	

	// return {type: description, duration: duration}

	// dispatch(setType('Lol'))
// 	const [state, setState] = useState(hideClass)
// 	setTimeout(() => {
// 		setState(showClass)
//   }, 0)
// 	return state
}


// Треба обєкт із типами щоб зручно вибирати el.type

// Приймає обєкт з типом і полями (мб з JSX) 

