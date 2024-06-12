const axios = require('axios');

export const UseLoginRequest = async (userName: string) => {
	const res = await axios.get(`http://192.168.1.61:1880/login?email=${userName}`).then((response: any) => {
		return response.data;
	});

	return res;
};
