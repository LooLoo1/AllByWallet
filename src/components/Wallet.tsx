import * as React from 'react'
import { useState, DetailedHTMLProps, HTMLAttributes } from 'react'

import { IconWallet, IconVisa } from '../components/Icons/Icons'
import { TWallet } from '../store/reducers/types'

type props = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>,HTMLDivElement> 
				 & {data: TWallet }

export const Wallet = ({className, data}:props) => {

	const {type = 'Wallet', currency = [], values = []} = data
	const value = new Intl.NumberFormat(navigator.language, { style: 'decimal', maximumFractionDigits: 2 }).format(values[0])

	const [hideNumber, setHideNumber] = useState<boolean>(true)

	const getData = (type: string) => {
		if (type === 'Wallet') {
			const color = '145, 107, 101'
			return <div className={`relative w-80 min-h-10 py-6 px-8 rounded-xl bg-cover ${className}`} style={{
				backgroundColor: `rgba(${color}, 1)`,
				backgroundImage: 'url(\'https://lh3.googleusercontent.com/fife/AAbDypAk_zcLKeMxSC88NGOY_2o8oFoJCf_itrmweEVqRMzhUD3B2jn8aVfJnSp0tVZ6XKEDtQqwhuitcbCl_N0HjIixqDESIbTPVg_Y1pwoxSeQGP_iNqo4qT0Lx8wBD5MTZoOK0b_sMJ0g0KkdjNT7EWpQPRDiA-kyxpEVzv1hqcF6eLVeD6_QExRZ5VAv5ZCM-JsFS54-lu1pk7_mlsnEVK1c6hMLC3_o9d0mzBwXHY3LIBk40mdU2PseIK43TbCM2edjdegDmBVHu3_w6PRgse-Mmi0SpqMkzNuwZmlRjdrCOiU2_HkFFYfzX9oHPPOJE8BN9DnFkSW6waVMzZIRSq4unF24z6pggvgy2LZ7fxjujKiQSJh96Md5q53pl5SGbSsY8x31qtIpsfXjx9OWtlzWVMlTePvyJ_A3fvfP7iTXjGRpTQcCh5eG_dJXolZp3Tj8u6shom7pbt-u1jp6l1lVb7BBP4NBMGy6Gcl1GYu-s3RWqWy1GvQdqKpUkiy6wqVAWdonOXMBv05rf3zA1ie-Kg5cPw_t0ER_hl9MyhQuFzR4BWDZU2exNrlNQwXwnuwi5yxS6U2ESjY5jYJSSMw8iDFVitVyQaCCg9qQNg9vfnlMoxBMJ5uE_-fFlRhA5pshErD_zG7d0JSSWkpypPuqj_Ys_RPM2KFcV86XhtyFItOkJuEtEnbfSWA6g1nf2E8WkFDt6bW_pDECIzUoeh6CrsWsAAFaJ1naYXV-LZ_631QCgPsJjFvER3mD2BznMxB2ymrwRm0JVoFkJCjG7nEDPIb-ojFQSJd5EJR_af_l7EpKNcz9EZxRixznbB3FYgSilLg4JZqfGD4AZzhHiScSrGahWNxHEu4ksgfwMPlmPt0a4wE9GR1h7UzyfGrSnv7UcIvnwLqJLwa52A8J8w1vS9YWGzmQzrIC6UOsib0YGEKwSlKcgpkHhKvhgaWVNu8v8cq75hMQphPbCwa9aEjFcLNV7r4cZ7UbW6WyAH0gPKaqcDy5feb4zWU93Y5F_p5cidBWbxjxFYPN4RQsx-3mFbE63hULQaqkgXH1bOKf-9NPR8MBeZpOKf-RkFM_qHPMq7j6LOcyLcNza22r-QukcSCIdY-PWHN3ZpK0tEsI0dSqoV5qWST34yGrhrWbVDa-qsnNb8acv_0xjv0RBMjK7U0KCw6mBussOUx8IVKrGKldETDAwCLCt9-tA46l9CSSe0_jrPrdUFVzWWXdce5w0LHnNnHjzNU8h3O8DWeisQvH4kNirUxZdFmIBBP_2nvz9-QaVGg2eVcjZ_XzF5XtdVOsK1gaCuYW6z03O9SLDxZ4pJOx7RHwf3fVaybxJiQmBlRxawVAVT1TLHFHvkRPwYU15FRSb7F_TeR-0P1B4QOYLeAMVAsThGNNvCJeFoJw8KP7KJUV1uhsK4HJJe_9dj05t6TNRrcL19-XmSJxWrx1znSqvFOxNw3VEUpRbhZpLGfVTwrPAdaWG36Xd01njScfPB9rSJOOQ7o6g-1uMNE6DaiCHZiz46K7noCztUCE3ET01Z5cNHnRZ9Vmg4-cSZf2wKVaq14-2GpXMShxv9w5_eeKbeuKyileNlMe=w1868-h904\')',
				boxShadow: 'inset 0px 0px 25px rgba(0, 0, 0, 0.5)' // , 0px 0px 25px rgba(0, 0, 0, 0.15)
				// boxShadow: `inset 0px 0px 25px rgba(${color}, 0.5), 0px 0px 25px rgba(${color}, 0.15)`
			}}>
				<div className={'flex flex-row justify-between items-center'}>
					<IconWallet color={'white'} className={'w-5 h-5'} />
					<div className={'flex flex-row justify-end flex-wrap child:mr-1 lact:child:mr-0'}>
						{currency.map(el => <p key={el} className={'font-OpenS font-semibold text-white text-xs'}>{el}</p>)}
					</div>
				</div>
				<div className={'flex flex-col mt-9 child:mb-1 last:child:mb-0'}>
					<p className={'font-OpenS font-semibold text-white text-xs opacity-75'}>Balance</p>
					<div className={'flex flex-row items-end child:mr-1 last:child:mr-0'}>
						<h2 className={'font-OpenS font-semibold text-white leading-none'}>{value}</h2>
						<p className={'font-OpenS font-semibold text-white text-xs opacity-75 leading-relaxed'}>({currency[0]})</p>
					</div>
				</div>
				<div className={`absolute w-1/3 h-2/5 rounded-xl bg-inherit bg-[length:300%] 
					flex items-center px-5
					transform 
					right-0 top-1/2 
					translate-x-1/3 -translate-y-1/2`} style={{
					boxShadow: 'inset 0px 0px 10px rgba(0, 0, 0, 0.3), 0px 0px 25px rgba(0, 0, 0, 0.5)'
				}}>
					<div className={'w-6 h-6 rounded-full'} style={{
						backgroundImage:`
							conic-gradient(from 180deg at 50% 50%, 
								#79858F 0deg, #FDFCF3 30deg, #7C868E 60deg, 
								#B8BEBF 75deg, #FDFCF3 120deg, #7A8891 170deg, 
								#FDFCF3 212deg, #FDFCF3 235deg, #444048 285deg, 
								#444048 300deg, #AEB6BC 330deg, #79858F 360deg)`
					}}></div>
				</div>
			</div>
		}

		if (type === 'Card') {
			const {cardNumber = '', expirationDate = '', paymentNetwork = ''} = data

			const code:Array<string> = cardNumber.split(' ')
			return <div className={`w-80 min-h-10 py-6 px-8 rounded-2xl ${className}`} style={{
				backgroundColor: '#000000',
				backgroundImage: 'linear-gradient(105deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0) 100%)',
				boxShadow: 'inset 0px 1px 0px #FFFFFF' // 0px 4px 24px 0px rgba(0, 0, 0, 0.2),
			}}>
				<div className={'flex flex-row justify-between items-center'}>
					{(paymentNetwork == 'Visa')
						? <IconVisa color={'white'} className={'h-5 opacity-75'} />
						: (paymentNetwork == 'MasterCard')
							? <div className={`relative w-12 h-5 after:content-[''] before:content-[''] 
													 after:w-5 before:w-5 after:h-5 before:h-5 after:inline-block before:inline-block				
													after:bg-white before:bg-white after:rounded-full before:rounded-full after:opacity-50 before:opacity-75 
													after:transform after:-translate-x-1/3`}></div>
							:  <p className={'font-OpenS font-semibold text-white text-xl opacity-75'}>{paymentNetwork}</p>}
					
					<div className={'flex flex-row justify-end flex-wrap child:mr-1 lact:child:mr-0'} onClick={()=>{setHideNumber(prev => !prev)}} >
						{[code[2],code[1],code[3],code[0]].map((el, i, arr) => <p key={el + i} className={`relative font-OpenS font-semibold text-white text-xs transition-all duration-200
																									 after:content-['****'] after:absolute after:left-0 after:transition-all after:duration-200 after:text-white
																									 ${(hideNumber && i < arr.length - 1)? 'text-transparent after:opacity-100':'text-white after:opacity-0'}`}
																									>{el}</p>)}
					</div>
				</div>
				<div className={'flex flex-col mt-8 child:mb-1 last:child:mb-0'}>
					<p className={'font-OpenS font-semibold text-white text-xs opacity-75'}>Balance</p>
					<div className={'flex flex-row items-end child:mr-1 last:child:mr-0'}>
						<h2 className={'font-OpenS font-semibold text-white leading-none'}>{value}</h2>
						<p className={'font-OpenS font-semibold text-white text-xs opacity-75 leading-relaxed'}>({currency[0]})</p>
					</div>
					<p className={'font-OpenS font-semibold text-white text-xs opacity-75'}>{expirationDate}</p>
				</div>
			</div>
		}

		return <></>
	}
  return (
	 <>
		{getData(type)}
	 </>
  )
} 