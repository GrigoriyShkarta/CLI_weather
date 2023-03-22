import axios from 'axios';
import https from 'https';
import {getKeyValue, TOKEN_DICTIONARY} from './storage-service.js';

const getWeather = async (city) => {
	// const token = process.env.TOKEN ?? await getKeyValue(TOKEN_DICTIONARY.token);
	const token = await getKeyValue(TOKEN_DICTIONARY.token);
	if (!token) {
		throw new Error('API key is not set, set it through the command -t [API_KEY]');
	}
	const {data} = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
		params: {
			q: city,
			appid: token,
			lang: 'ua',
			units: 'metric'
		}
	});
	console.log(data);
	return data;
};

export {getWeather};