export const options = {
	method: 'GET',
	url: 'https://currencyapi-net.p.rapidapi.com/rates',
	params: {output: 'JSON', base: 'USD'},
	headers: {
	  'X-RapidAPI-Key': process.env.REACT_APP_CURRENCY_API_KEY,
	  'X-RapidAPI-Host': 'currencyapi-net.p.rapidapi.com'
	}
};