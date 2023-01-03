import * as React from 'react'
import{ useState, useEffect, useCallback, ReactElement } from 'react'
import{ useNavigate, useLocation } from 'react-router-dom'
import { useFormik } from 'formik'

import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { useClass } from '../hooks/useClass'
import { useLocalStorageState } from '../hooks/useLocalStorage'
import { useDynamicElement } from '../hooks/useDynamicElement'

import { Curencies } from '../shared/lib/Curencies'
import { updatedWalletsList } from '../store/reducers/WalletsListSlice'
import { Converter } from '../shared/lib/Converter'

import { Value } from '../components/Forms/Value'
import { TextArea } from '../components/Forms/TextArea'
import { DateTime } from '../components/Forms/DateTime'
import { CurrenctSelect } from '../components/Forms/CurrenctSelect'
import { WalletsList } from '../components/WalletsList'
import { Block } from '../components/Block'
import { Icons } from '../components/Icons/Icons'


export const New = () => {
	useDynamicElement('topElement', {
		type: 'title',
		title: 'Add an operation'
	})
	useDynamicElement('navElement', {type: 'auxiliary'})

	const dispatch = useAppDispatch()
	const path = useLocation()
	const navigate = useNavigate()
	const { currentUser } = useAppSelector(state => state.userReducer)
	const { currency } = useAppSelector(state => state.currencyReducer)
	const { list = {} } = useAppSelector(state => state.walletsListReducer)
	const { baseCurrency } = useAppSelector(state => state.settingsReducer)

	
	const dynamicSubmit = useClass('translate-y-full', '-translate-y-full') 
	
	const wallwtsKeys = Object.keys(list).sort()
	const defaulteIcon = 'QuestionMark'
	const currencyKeys = Object.keys(Curencies)
	const dateTime = new Date()
	// const timeOpen = new Date().toISOString().slice(0,-8)	
	const timeOpen = `${
		dateTime.getFullYear()}-${
		(dateTime.getMonth() + 1 < 10)? `0${dateTime.getMonth() + 1}`: dateTime.getMonth() + 1}-${
		(dateTime.getDate() < 10)? `0${dateTime.getDate()}`: dateTime.getDate()}T${
		(dateTime.getHours() < 10)? `0${dateTime.getHours()}`: dateTime.getHours()}:${
		(dateTime.getMinutes() < 10)? `0${dateTime.getMinutes()}`: dateTime.getMinutes()}`
	
	const [formCategoryType, setFormCategoryType] = useState<string>('')
	const [formIconType, setFormIconType] = useState<string>(defaulteIcon)


	const LOCAL_STORAGE_KEY = `form${path.pathname}`
	const INITIAL_VALUES = {
		currency: baseCurrency,
		amount: 0,
		type: '',
		note: '',
		time: timeOpen,
		wallet: currencyKeys[0],
		event: ''
	}

	const [initialValues, handleUpdateForm] = useLocalStorageState({ key: LOCAL_STORAGE_KEY, value: INITIAL_VALUES })
	
	const formik = useFormik({
		initialValues: initialValues,
		
		onSubmit: async values => {
			dispatch(updatedWalletsList(
				{
					currentUser: currentUser?.uid, 
					transactionData: values
				}
			))
			handleReset()
			navigate(-1)
		},

		validate: async (value) => {
			const errors:any = {}

			if (value.time.length < 16) {
				errors.time = 'Requaired'
			}

			if (!wallwtsKeys.includes(value.wallet)) {
				errors.wallet = 'Requaired'
			}

			if (value.amount <= 0) {
				errors.amount = 'Requaired'
			}

			if (value.type) {
				const typeObj = await JSON.parse(value.type)
	
				if (typeObj.type === 'CONVERSION') { 
					if (!currencyKeys.includes(value.currency[0])) {
						errors.currency = 'Requaired'
					}
					if(value.amount.length && value.amount.map((v:number) => (v > 0)?'+':'-').join('').includes('-')){
						errors.amount = value.amount.map((v:number) => (v > 0)?'+':'-').join('')
					}
					else if(typeof value.amount === 'number'){
						errors.amount = '--'
					}

				}else{
					if (![value.currency].some(c=> currencyKeys.includes(c))) {
						errors.currency = 'Requaired'
					}
		
					if (value.amount <= 0) {
						errors.amount = 'Requaired'
					}
		
					if (!(typeObj && typeObj.category && typeObj.type)) {
						errors.type = 'Requaired'
					}
				}
			}else{
				errors.type = 'Requaired'
			}
			
			return errors
		}
	})

	const setFieldValueArray = (field: string, value: any, index: number , shouldValidate?: boolean) => {
		if(typeof formik.values[field] === 'string' || typeof formik.values[field] === 'number'){
			const arr = []
			arr[0] = formik.values[field]
			arr[index] = value
			formik.setFieldValue(field, arr, shouldValidate)
		}else{
			const arr = [...formik.values[field]]
			arr[index] = value
			formik.setFieldValue(field, arr, shouldValidate)
		}
	}

	const setWallet = (value:string) => {
		formik.setFieldValue('wallet', value)
	}

	useEffect(() => {
		handleUpdateForm(formik.values)
	 }, [formik.values, handleUpdateForm])
	 const handleReset = useCallback(() => {
		handleUpdateForm(INITIAL_VALUES)
	 }, [handleUpdateForm])

	 useEffect(() => {
		
		 if (formik.values.type.includes('category')) {
			const {icon = 'QuestionMark', category = '', type = '-'} = JSON.parse(formik.values.type)
			setFormCategoryType(category)
			setFormIconType(icon)
			
			if (type !== 'CONVERSION' ) {
				if(currencyKeys.includes(formik.values.currency[1])){
					formik.setFieldValue('currency', formik.values.currency[0])
				}
				if(formik.values.amount.length){
					formik.setFieldValue('amount', formik.values.amount[0])
				}
			}
			if (type === 'CONVERSION'){
				if(!currencyKeys.includes(formik.values.currency[1])){
					setFieldValueArray('currency', baseCurrency, 1)
				}
			}

		 }
	},[formik.values.type])



	const CategoryTypeObject:{[key: string]: ReactElement<any,any>} = {
		'normal':
			<div className='flex flex-row align-center items-center justify-center child:mr-6 last:child:m-0'>
				<CurrenctSelect name='currency' 
									defaulte={
										(typeof formik.values.currency === 'string')
											? formik.values.currency
											: formik.values.currency[0]
									}
									className={`${(formik.errors.currency)?' opacity-50 z-50 ':' opacity-100 '}`} 
									onClick={(e:any) => {if(e.target.innerText){formik.setFieldValue('currency', e.target.innerText.slice(0, 3))}}}/>
				<Value name='amount' placeholder='0' 
										value={(typeof formik.values.amount === 'number')
											? formik.values.amount
											: formik.values.amount[0] || 0} onChange={formik.handleChange} 
							className={`transition-all duration-500  ${(formik.errors.amount)?' opacity-50 ':' opacity-100 '}`}/>
			</div>,

		'conversion':
			<>
				<div className='flex flex-row align-center items-center justify-center child:mr-6 last:child:m-0'>
					<CurrenctSelect name='currency' 
										defaulte={
											(typeof formik.values.currency === 'string')
											? formik.values.currency
											: formik.values.currency[0]
										}
										className={`${(formik.errors.currency)?' opacity-50 z-50 ':' opacity-100 '}`} 
										onClick={(e:any) => {if(e.target.innerText){
											setFieldValueArray('currency', e.target.innerText.slice(0, 3), 0)
										}}}/>
					<Value name='amount' placeholder='0' value={formik.values.amount[0] || formik.values.amount} 
								onChange={e => {
									formik.setFieldValue('amount', 
										[
											e.target.valueAsNumber || 0, 
											Converter({
												from: formik.values.currency[0] || formik.values.currency, 
												to: (!(formik.values.currency.length == 3))? formik.values.currency[1] : baseCurrency, 
												value: e.target.valueAsNumber 
											}, currency) || 0
										])
								}}
								className={`transition-all duration-500  ${(String(formik.errors.amount).split('')[0] === '-')?' opacity-50 ':' opacity-100 '}`}/>
					<p className={'text-xl font-OpenS font-semibold text-center'}>to</p>
					<CurrenctSelect name='currency' 
										defaulte={formik.values.currency[1]}
										className={`${(formik.errors.currency)?' opacity-50 z-50 ':' opacity-100 '}`} 
										onClick={(e:any) => {if(e.target.innerText){
											setFieldValueArray('currency', e.target.innerText.slice(0, 3), 1)
										}}}/>
				</div>

				<div className='flex flex-row align-center items-center justify-center child:mr-6 last:child:m-0'>
					<p className={'font-OpenS font-semibold text-black text-2xl text-center'}>
						{formik.values.currency[1]} ~ { Number((formik.values.amount[1] / formik.values.amount[0]).toFixed(2)) || 0 }  
					</p>
					<Value name='amount' placeholder='0' 
									className={`transition-all duration-500  ${(String(formik.errors.amount).split('')[1] === '-')?' opacity-50 ':' opacity-100 '}`}
									value={formik.values.amount[1] || 0} 
									onChange={e => {setFieldValueArray('amount', e.target.valueAsNumber, 1)}} 
					/>
				</div>
			</>
		
	}

  return (
	 <form className={'child:mt-8'} onSubmit={formik.handleSubmit}>
		<Block type='l'>
			{(CategoryTypeObject[formCategoryType.toLowerCase()])
				?CategoryTypeObject[formCategoryType.toLowerCase()]
				:CategoryTypeObject['normal']
			}

			<label className='block relative cursor-pointer'>
				<input name='type' readOnly={true} placeholder='Select category' autoComplete='off' defaultValue={formCategoryType} onClick={()=>{
						navigate('/new/categories')
						localStorage.setItem('formKey', JSON.stringify({name: LOCAL_STORAGE_KEY, key: 'type'}))
					}}
				className={`text-xl font-Nunito font-semibold text-black outline-none pt-2
								focus:border-none cursor-pointer
				
							  w-full pl-16 
							  placeholder:transition-all placeholder:duration-500 
							  all-after:transition-all all-after:duration-200 

							  all-after:opacity-50 all-after:focus:opacity-100
							 ${(formik.values.type && !formik.errors.type)? 'all-after:opacity-100' : ''}	
							`}/>
				<Icons type={(!formik.errors.type)? formIconType : defaulteIcon} className='absolute left-0 top-0 w-[40px] h-[40px]' color='black'/>
				
			</label>
			<label className='block relative cursor-pointer'>
				<TextArea name='note' placeholder='Note' defaultValue={formik.values.note}
					className={`w-full pl-16 
								placeholder:transition-all placeholder:duration-500 
								all-after:transition-all all-after:duration-200 

								all-after:opacity-50 all-after:focus:opacity-100
								${(formik.values.note)? 'all-after:opacity-100' : ''}	
								`} 
							  
					onChange={formik.handleChange}/>
				<Icons type='Notes' className='absolute left-0 top-0 w-[40px] h-[40px]' color='black'/>
			</label>
			<DateTime name='time' 
						 title='Date:' 
						 defaultValue={formik.values.time} 
						 onChange={formik.handleChange}
						 className={`transition-all duration-500 ${(formik.errors.time)?' opacity-50 ':' opacity-100 '}`}/>
		</Block>
		<WalletsList name='wallet' setDefaulte={formik.values.wallet} list={wallwtsKeys} changeValue={setWallet}/>

		<Block type='r'>
			<label className='block relative cursor-pointer'>
				<TextArea name='event' placeholder='Select an event' defaultValue={formik.values.event}
				className={`w-full pl-16 
							  placeholder:transition-all placeholder:duration-500 
							  all-after:transition-all all-after:duration-200 

							  all-after:opacity-50 all-after:focus:opacity-100
							 ${(formik.values.event)? 'all-after:opacity-100' : ''}	
							`} 
							  
				onChange={formik.handleChange}/>
				<Icons type='QuestionMark' className='absolute left-0 top-0 w-[40px] h-[40px]' color='black'/>
			</label>
		</Block>

		<button className={`fixed z-50 translate left-1/2 -translate-x-1/2 bottom-0 transition-all duration-[2s] delay-[2s]
								bg-black text-white font-Nunito font-semibold text-3xl px-7 py-3 rounded-2xl 
								hover:bg-white hover:text-black ${dynamicSubmit}`} 
					type='submit'>Save</button>
	 </form>
  )
} 