export const UseLoginRequest = async (userName: string) => {
	const res = await fetch(`http://192.168.1.61:1880/login/${userName}`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
		},
	});

	return res.json();
};
