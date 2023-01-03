import * as React from 'react'
import { ReactElement } from 'react'

import { CategoryTitle } from '../../components/CategoryTitle'
import { CategoryItem } from '../../components/CategoryItem'
import type { CategoryList as TCategoryList } from '../../store/reducers/types'

export const GenerateCategory = (data: TCategoryList, fillter?:string):ReactElement<any,any> => { // parentUpdate?:() => void
	
	if (fillter) {
		fillter = fillter.toLowerCase()
		if ('title' && 'list' in data){
			return (data.title.toLowerCase().includes(fillter))
				? (<CategoryTitle key={data.title + fillter} data={data}/>)
				: (<>{data.list.map(data => GenerateCategory(data, fillter)) }</>)
		}
		if ('icon' && 'category' in data && data.category.toLowerCase().includes(fillter)) 
			return <CategoryItem key={data.icon + data.category + fillter} data={data}/>
	} else {
		if ('title' && 'list' in data) return <CategoryTitle key={data.title} data={data}/> // onClick={(parentUpdate)?parentUpdate:() => {}}
			
		if ('icon' && 'category' in data) return <CategoryItem key={data.icon + data.category} data={data}/>
	}
	return <></>
}