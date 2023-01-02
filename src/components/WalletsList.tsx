import * as React from 'react'
import{ useState, useEffect, useRef } from 'react'
import { DetailedHTMLProps, HTMLAttributes } from 'react'
import { Link } from 'react-router-dom'
import { useAppSelector } from '../hooks/redux'

import { Wallet } from "../components/Wallet";
import { IconAdd } from "./Icons/Icons";

type props = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>,HTMLDivElement> &
	{
		name?:string, 
		changeValue?:(anY:any)=>void,
		list?: Array<string>, 
		setDefaulte?:string, 
	}

export const WalletsList = (atributes:props) => {
	const scrollRef = useRef<HTMLDivElement>(null)	

	const [indexItem, setIndexItem] = useState<number>(0)
	const { changeValue, className = '', list = [], setDefaulte, ...elemProps } = atributes
	const { list: listObj = {} } = useAppSelector(state => state.walletsListReducer)
	const wallwtsKeys = list || Object.keys(listObj).sort()

	const [def, setDef] = useState<number>(1)
	if (def && scrollRef.current && setDefaulte && list.includes(setDefaulte)) {	
		const childList = scrollRef.current.children
		const childWidth:Array<number> = []
		for (let i = 0; i < childList.length; i++) {
			childWidth[i] = childList[i].clientWidth
		}

		const defaulteIndex:number = list.indexOf(setDefaulte)
		const result = childWidth.reduce((accumulator, currentValue, i) => {
			if ( i <= defaulteIndex) {
				return accumulator + currentValue * 0.75
			}
			return accumulator + 0
		}, 0)
		
		setDef(0)
		scrollRef.current.scrollLeft = result
	}

	const onScroll = () => {
		if (scrollRef.current) {

			const childList = scrollRef.current.children
			const childWidth:Array<number> = []
			const selectedIndex:Array<number> = []

			for (let i = 0; i < childList.length; i++) {
				childWidth[i] = childList[i].clientWidth
			}

			const scrollL = scrollRef.current.scrollLeft
			childWidth.reduce(
				(accumulator, currentValue, i, arr) => {
					const nextValue = (!arr[i + 1])? 0 : arr[i + 1] 
					
					// if (accumulator + currentValue > scrollL && accumulator + currentValue < accumulator + currentValue + nextValue) {
					// 	selectedIndex[i] = i
					// }else selectedIndex[i] = arr.length + 2

					selectedIndex[i] = (accumulator + currentValue > scrollL && accumulator + currentValue < accumulator + currentValue + nextValue)
						? i
						: arr.length + 2
					
					return accumulator + currentValue
				}, 0
				)
			
			if (indexItem != Math.min(...selectedIndex)) {
				setIndexItem(Math.min(...selectedIndex))
			}
		}

	}

	useEffect(()=>{
		if (changeValue) {
			changeValue((indexItem < wallwtsKeys.length)
								? wallwtsKeys[indexItem] 
								: wallwtsKeys[0])
		}
	}, [indexItem])

  return (
	<div ref={scrollRef} {...elemProps} className={`w-full flex items-center gap-10 snap-x snap-mandatory overflow-x-auto px-[50%] ${className}`}
		style={{filter: `drop-shadow(0px 0px 25px rgba(0, 0, 0, 0.15))`}} 
			onScroll={()=>{onScroll()}}>
		{wallwtsKeys.map((key:string) => {
			return <Wallet className={`shrink-0 snap-always snap-center bg-red-500 w-80 min-h-10`} key={key} data={listObj[key]}/>
		})}
		<Link to='/cards/new' className={`shrink-0 snap-always snap-center w-80 min-h-10
								flex flex-col items-center transition-all duration-200 opacity-50 hover:opacity-100
								rounded-xl bg-white border-2 border-gray-300 py-6 `} 
				onClick={()=>{console.log(indexItem)}}>
					<IconAdd className='h-12'/>
					<h3>Add New</h3>
				</Link>
	</div>
  )
} 