'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
var bcrypt = require('bcryptjs');

const Login = () => {
	const [userName, setuserName] = useState('');
	const [password, setPassword] = useState('');
	const router = useRouter();

	if (!localStorage.getItem('token')) {
		router.push('/');
		return null;
	}

	const handleSubmit = async (e) => {
		e.preventDefault();

		const res = await fetch(`http://192.168.1.120:1880/login/${userName}`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		});

		const data = await res.json();

		if (bcrypt.compareSync(password, data[0].password)) {
			localStorage.setItem('token', 'true');
			router.push('/');
		} else {
			console.log('Login failed');
		}
	};

	return (
		<div className='bg-gray-100 min-h-screen flex items-center justify-center p-6'>
			<div className='bg-white shadow-lg rounded-lg max-w-md mx-auto'>
				<div className='px-6 py-4'>
					<h2 className='text-gray-700 text-3xl font-semibold'>Login</h2>
					<p className='mt-1 text-gray-600'>Please login to your account.</p>
				</div>
				<div className='px-6 py-4'>
					<form onSubmit={handleSubmit}>
						<div className='mt-4'>
							<label className='block text-gray-700' htmlFor='email'>
								Email
							</label>
							<input className='mt-2 rounded w-full px-3 py-2 text-gray-700 bg-gray-200 outline-none focus:bg-gray-300' id='email' placeholder='m@example.com' value={userName} onChange={(e) => setuserName(e.target.value)} required type='email' />
						</div>
						<div className='mt-4'>
							<label className='block text-gray-700' htmlFor='password'>
								Password
							</label>
							<input className='mt-2 rounded w-full px-3 py-2 text-gray-700 bg-gray-200 outline-none focus:bg-gray-300' id='password' value={password} onChange={(e) => setPassword(e.target.value)} required type='password' />
							<p className='mt-2 text-red-600 text-sm'>Forgot password?</p>
						</div>
						<div className='mt-6'>
							<button className='py-2 px-4 bg-gray-700 text-white rounded hover:bg-gray-600 w-full' type='submit'>
								Login
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Login;
