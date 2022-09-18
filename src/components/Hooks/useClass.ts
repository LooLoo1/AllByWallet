import { useState} from 'react'

export function useClass(hideClass:string, showClass:string ) {
	const [state, setState] = useState(hideClass) 
	setTimeout(() => {
		setState(showClass)
  }, 0)
	return state
}

// Template: let dynamicNav = useClass('translate-y-[300%]', 'translate-y-[0%]') 
// className=` ${dynamicNav} `