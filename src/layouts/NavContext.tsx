import * as React from 'react'
import { useState} from 'react'

type prop = {
	children?: React.ReactNode
	className?: string
}

type value = {
	state?: boolean[]
	changeState?: (title:string) => void
}

export const Context = React.createContext<value | null>(null);

export const NavProvider = ({children}:prop) => {
	// const NavButtonsListLenght = new Array(4).fill(false)
	const NavButtonsListTitles:string[] = ['Home', 'Operations', 'Statistics', 'Purposes'] 
	const NavButtonsListLenght:boolean[] = new Array(NavButtonsListTitles.length).fill(false)
	
	const [NavButtonsList, SetNavButtonsList] = useState(NavButtonsListLenght) 

	const setActibeNavButtons = (title:string ) => {
		let i:number = NavButtonsListTitles.findIndex((e) => e === title)
		let shadowNavButtonsList = NavButtonsListLenght
		shadowNavButtonsList[i] = true
		console.log(shadowNavButtonsList);
		
		SetNavButtonsList(shadowNavButtonsList)
	}

	return (
		<Context.Provider value = {
			{
				state: NavButtonsList,
				changeState: (title) => setActibeNavButtons(title)
			}}
		>
			{children}
		</Context.Provider>
	)
 }
