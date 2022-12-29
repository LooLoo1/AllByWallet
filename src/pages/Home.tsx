import * as React from 'react'
import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { TCurrency } from "../store/reducers/types";

import { useAppDispatch, useAppSelector } from '../hooks/redux'

import { Block } from "../components/Block";
import { WalletsList } from "../components/WalletsList";
import { CurrenctSelect } from "../components/Forms/CurrenctSelect";
import { IconWallet } from "../components/Icons/Icons";

import { Converter } from "../shared/lib/Converter"
import { useDynamicElement } from '../hooks/useDynamicElement';


export const Home = () => {
	
	useDynamicElement("topElement", {type: "currency"})
	useDynamicElement("navElement", {type: "show"})

	const { currency } = useAppSelector(state => state.currencyReducer)
	const { list = {}, listOfNames = [], listOfValues = [] } = useAppSelector(state => state.walletsListReducer)
	const walletsKeys = Object.keys(list).sort()

	const [walletsListHeigth, setWalletsListHeigth] = useState<number>(1) 
	const [walletId, setWalletId] = useState<string>(walletsKeys[0]) 
	const [walletCurrency, setWalletCurrency] = useState<TCurrency>(list[walletsKeys[0]].currency[0]) 
	
	const [walletsListOfNames, setWalletsListOfNames] = useState<Array<TCurrency>>(list[walletsKeys[0]].currency) 
	const [walletsListOfValues, setWalletsListOfValues] = useState<Array<number>>(list[walletsKeys[0]].values) 
	
	const [walletSum, setWalletSum] = useState<string>('') 


	const WalletsListRef = useRef<HTMLDivElement>(null)


	const setWallet = (key:string) => {
		setWalletId(key)
		setWalletCurrency(list[key].currency[0])
	}

	const walletSumCalc = (walletCurrency:TCurrency, listOfCurrency: Array<TCurrency>, listOfValues: Array<number>) => {
		const currencyResult: number = listOfValues.reduce((acc:number, el:number, i:number) => 
			acc + Converter({from: listOfCurrency[i], to: walletCurrency, value: listOfValues[i]}, currency)
		,0) 
		return new Intl.NumberFormat(navigator.language, { style: 'decimal', maximumFractionDigits: 2 }).format(currencyResult)
	}

	useEffect(()=>{
		setWalletsListOfNames(list[walletId].currency)
		setWalletsListOfValues(list[walletId].values)
	},[walletId])
	
	useEffect(()=>{
		if (WalletsListRef.current) {
			setWalletsListHeigth(WalletsListRef.current.clientHeight)
		}
	},[WalletsListRef.current])
	
	useEffect(()=>{
		setWalletSum(walletSumCalc(walletCurrency, walletsListOfNames, walletsListOfValues))
	},[walletCurrency, walletId])

	useEffect(()=>{
		setWalletSum(walletSumCalc(walletCurrency, walletsListOfNames, walletsListOfValues))
	})
  return (
	 <div className='mt-8'>
		<Block className='relative'>
			<div className='flex items-center justify-between'>
				<h3 className='font-OpenS text-2xl font-semibold'>Purses:</h3>
				<Link to='/cards' className='
					flex items-center child:mr-1 last:child:mr-0
					transition-all duration-200 opacity-25 hover:opacity-100 
				'>
					<p className='font-OpenS font-normal text-xl'>More:</p>
					<IconWallet className='w-6 h-6'/>
				</Link>
			</div>

			<div style={{height: walletsListHeigth + 'px'}}>
				<div className='absolute w-full left-0' ref={WalletsListRef}>
					<WalletsList list={walletsKeys} changeValue={setWallet}/>
				</div>
			</div>
			
			<div className='flex items-center justify-between'>
				<h3 className='font-OpenS text-2xl font-semibold'>Total: {walletSum}</h3>
				<CurrenctSelect defaulte={walletCurrency}
					onClick={(e:any) => {if(e.target.innerText){setWalletCurrency(e.target.innerText.slice(0, 3))}}}
				/>
			</div>

			<div className='grid grid-cols-3 gap-8 gap-y-4'>
				{walletsListOfNames.map((el:TCurrency, i:number) => {
					return <div key={el} className='flex flex-col items-center'>
						<p className='font-OpenS text-xl font-semibold text-black text-center'>{el}</p>
						<div className='max-w-24 w-24 font-OpenS text-sm font-semibold text-white bg-black text-center py-1 rounded-md'>{walletsListOfValues[i]}</div>
					</div>
				})}
			</div>
		</Block>
	 </div>
  )
} 