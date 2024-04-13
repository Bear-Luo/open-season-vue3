import axios, { type Method } from 'axios';
import { type Res } from './types';
import { useNotify } from '@/composables/useNotify';

const api = axios.create({ baseURL: 'https://vue-course-api.hexschool.io/api/lalabear' });

export const apiHandler = async <T>(method: Method, url: string, options = {}): Promise<Res<T> & T> => {
	let res = { success: false } as Res<T> & T;
	try {
		const { data } = await api({
			method,
			url,
			...options,
		});

		res = data;
	} catch (e) {
		//
	} finally {
		if(!res.success && res.message) {
			const { setMessage } = useNotify();
			const { message } = res;
			setMessage({ text: `${ message }`, class: 'danger' });
		}
	}

	return res;
};
