import axios from 'axios';

export const defaultApi = axios.create({
	baseURL: 'https://v2.jokeapi.dev',
});

defaultApi.interceptors.request.use(
	async config => {
		return config;
	},
	err => {
		console.log('err', err);
		return Promise.reject(err);
	},
);
