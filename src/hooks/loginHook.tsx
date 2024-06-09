import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import React, { Dispatch, SetStateAction } from 'react';
var bcrypt = require('bcryptjs');

export const loginRequest = async (userName: string) => {
	const res = await fetch(`http://192.168.1.61:1880/login/${userName}`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
		},
	});

	return res.json();
};

export const logUserIn = (password: string, data: any, setError: Dispatch<SetStateAction<boolean>>, router: AppRouterInstance) => {
	if (bcrypt.compareSync(password, data[0].password)) {
		localStorage.setItem('token', 'true');
		router.push('/');
	} else {
		console.log('Login failed');
		setError(true);
	}
};
