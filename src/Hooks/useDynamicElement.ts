import { useEffect } from 'react'
import { useAppDispatch } from './redux';
import { NavElements, NavElementsKeys, navElementsSlice } from '../store/reducers/NavElementsSlice'


export const useDynamicElement = (dynamicElement: NavElementsKeys, description: NavElements, duration: number = 2000) => {
	const { setNavElement, setTopElement } = navElementsSlice.actions
	const dispatch = useAppDispatch()

	useEffect(() => {
		if (dynamicElement === "navElement") {
			dispatch(setNavElement(description))
		}
		if (dynamicElement === "topElement") {
			dispatch(setTopElement(description))
		}
	}, [])
}


