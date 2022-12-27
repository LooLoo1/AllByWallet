import * as React from 'react'
import { useNavigate } from 'react-router-dom'

import { Block } from '../components/Block';
import { useDynamicElement } from '../hooks/useDynamicElement';
import { useAppSelector } from '../hooks/redux';

import { GenerateCategory } from "../shared/lib/GenerateCategory";

export const Categiries = () => {
	useDynamicElement("topElement", {type: "search"})
	useDynamicElement("navElement", {type: "hide"})

	const navigate = useNavigate()
	const { Сategories = [], categoryFillter } = useAppSelector(state => state.settingsReducer)
	const categoriesElements = Сategories.map(data => GenerateCategory(data, categoryFillter))

	const getCategoryDataset = (e:any) => {
		const formKey = localStorage.getItem("formKey")
		if (formKey && e.target.dataset.category) {
			const {name, key} = JSON.parse(formKey)
			const storageForm = localStorage.getItem(name)
			if (storageForm) {
				const modifiData = JSON.parse(storageForm)
				modifiData[key] = e.target.dataset.category
				localStorage.setItem(name, JSON.stringify(modifiData))
				localStorage.removeItem("formKey")
				navigate(-1)
			}
		}
	}

  return (
	 <section className={`mt-8`}>
		<Block className='child:p-0' onClick={ e =>{ getCategoryDataset(e) }}>
			{/* {(categoriesElements.some(e => e.key)) 
				? categoriesElements 
				: <p className='font-Nunito font-semibold text-black text-xl'>You do not have a suitable category</p>
			} */}
			{categoriesElements}

		</Block> 
	 </section>
  )
} 