import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
	const { data }= await axios.get((url), {
		headers: {
			'x-rapidapi-host': 'bayut.p.rapidapi.com',
			'x-rapidapi-key': '7903765e48mshf2cee88f72535f2p15d9f6jsn7f156066cfe3'
		}
	});

	return data;
}
