import * as React from 'react'
import { useState, useEffect, useRef } from 'react'
import { Block } from '../components/Block'

import { useAppSelector } from '../hooks/redux'
import { WalletsList } from '../components/WalletsList'
import { useDynamicElement } from '../hooks/useDynamicElement'
import { useClass } from '../hooks/useClass'

export const Cards = () => {
	useDynamicElement('topElement', {
		type: 'title',
		title: 'Cards'
	})
	useDynamicElement('navElement', {type: 'auxiliary'})

	const { list = {} } = useAppSelector(state => state.walletsListReducer)
	const walletsKeys = Object.keys(list).sort()
	const [walletsListHeigth, setWalletsListHeigth] = useState<number>(1) 
	const WalletsListRef = useRef<HTMLDivElement>(null)
	const walletClass = useClass('opacity-0', 'opacity-100')

	useEffect(()=>{
		if (WalletsListRef.current) {
			setWalletsListHeigth(WalletsListRef.current.clientHeight)
		}
	},[WalletsListRef.current])
	
  return (
	<Block className='relative mt-8 py-12'>
		<div style={{height: walletsListHeigth + 'px'}}>
			<div className={`absolute w-full left-0 transition-all duration-1000 delay-[1.5s] ${walletClass}`} ref={WalletsListRef}>
				<WalletsList list={walletsKeys} className={'flex-col snap-y overflow-y-auto px-0'}/>
			</div>
		</div>
	</Block>
  )
} 