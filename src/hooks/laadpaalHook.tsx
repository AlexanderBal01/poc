const axios = require('axios');

export const UseLaadpaalSchakelRequest = async (aanAf: string) => {
	if (aanAf == 'af') {
		const res = await axios.post('http://192.168.1.61:1880/charging-station/update-max-current', [0, 0], {
			headers: {
				'Content-Type': 'application/json',
			},
		});
		return res;
	} else if (aanAf == 'aan') {
		const res = await axios.post('http://192.168.1.61:1880/charging-station/update-max-current', [16768, 0], {
			headers: {
				'Content-Type': 'application/json',
			},
		});
		return res;
	}
};
