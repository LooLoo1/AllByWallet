import { createSlice } from '@reduxjs/toolkit'

// import type { PayloadAction } from '@reduxjs/toolkit'
// import { ReactElement, ReactNode } from 'react'

// type duration = number

// export type TNavElement = {type: "hide"} | {type: "show"} // & duration
// export type TTopElement = {type: "hide"} | {type: "currency"} | {
// 	type: "title"
// 	title: string,
// 	buttonJSX: ReactNode
// } | {
// 	type: "search"
// 	componentsJSX: ReactNode // ReactNode[]
// }

export type TNavElement = {type: "hide" | "show" | "auxiliary"}

export type TTopElement = {type: "hide"} | {type: "currency"} | {
	type: "title"
	title: string
} | {
	type: "search" // Or custom, you can add all when you want
}


type NavElementsState = {
	navElement: TNavElement
	topElement: TTopElement
}
export type NavElementsKeys = keyof NavElementsState;
export type NavElements = typeof initialState[NavElementsKeys];

const initialState:NavElementsState = {
	navElement: {type: "hide"},
	topElement: {type: "hide" }
}

export const navElementsSlice = createSlice({
	name: 'navElements',
	initialState,
	reducers: {
		setNavElement(state, action) {
			state.navElement = action.payload
		},
		setTopElement(state, action) {
			state.topElement = action.payload
		},
	}
})

export default navElementsSlice.reducer