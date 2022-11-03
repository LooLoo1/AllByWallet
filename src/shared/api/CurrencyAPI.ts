import axios from "axios";
import { doc, setDoc} from "firebase/firestore"; 
import { db } from '../../firebase';

import type { currencyObject} from '../../store/reducers/types'

const options = {
	method: 'GET',
	url: 'https://currencyapi-net.p.rapidapi.com/rates',
	params: {output: 'JSON', base: 'USD'},
	headers: {
	  'X-RapidAPI-Key': process.env.REACT_APP_CURRENCY_API_KEY,
	  'X-RapidAPI-Host': 'currencyapi-net.p.rapidapi.com'
	}
};

export const requestAPI = async () => {
	try {
		return await axios.request(options).then((response) => {
			const {rates:results, updated, base} = response.data
			const dateFormat = new Date().toISOString()
			const data:currencyObject = {
				results, 
				updated: [dateFormat.split("T")[0], dateFormat.split("T")[1].split(".")[0]].join(' '), 
				base: "USD"
			}

			// Add to FireBase list
			setDoc(doc(db, "currency", data.updated.split(' ')[0]), data, { merge: true });

			return {
				data,
				id: data.updated.split(" ")[0]
			}
		})
	} catch (err) {
		console.log(err);
	}
};