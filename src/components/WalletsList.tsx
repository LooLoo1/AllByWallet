import * as React from 'react'
import{ useState, useEffect, useRef } from 'react'
import { useAppSelector } from '../hooks/redux'
import { DetailedHTMLProps, HTMLAttributes } from 'react'

type props = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>,HTMLDivElement> & 
			{ 
				name:string, 
				changeValue:(anY:any)=>void,
				list?: Array<string>, 
				setDefaulte?:string, 
			}

export const WalletsList = (atributes:props) => {
	const scrollRef = useRef<HTMLDivElement>(null)

	const [indexItem, setIndexItem] = useState<number>(0)
	const { changeValue, className = '', list = [], setDefaulte, ...elemProps } = atributes
	const { list: listObj = {} } = useAppSelector(state => state.walletsListReducer)
	const wallwtsKeys = list || Object.keys(listObj).reverse()

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
		changeValue((indexItem < wallwtsKeys.length)
							? wallwtsKeys[indexItem] 
							: wallwtsKeys[0])
	}, [indexItem])

  return (
	<>
		<div ref={scrollRef} {...elemProps} className={`w-full flex gap-6 snap-x snap-mandatory overflow-x-auto px-32 ${className}`} 
			  onScroll={()=>{onScroll()}}>
			{wallwtsKeys.map((key:string) => {
				return <div className={`shrink-0 snap-always snap-center bg-red-500 w-80 min-h-10`} key={key}>{key}</div>
			})}
			<div className={`shrink-0 snap-always snap-center bg-black w-80 min-h-10`} onClick={()=>{console.log(indexItem)}}></div>
		</div>
	</>
  )
} 