'use client';

import { useState, useContext } from 'react';
import { useRouter } from 'next/navigation';
import { UseLoginRequest } from '@/hooks/loginHook';
import AuthUserContext from '@/contexts/AuthUserProvidor';
import { log } from 'console';
const bcrypt = require('bcryptjs');

const Login = () => {
	const userContext = useContext(AuthUserContext);
	const [userName, setuserName] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState(false);
	const router = useRouter();

	if (userContext.userName !== null) {
		router.push('/');
		return null;
	}

	const handleSubmit = async (e: any) => {
		e.preventDefault();

		const data = await UseLoginRequest(userName);
		console.log(data);

		if (bcrypt.compareSync(password, data[0].password)) {
			userContext.setUserName(data[0].name);
			console.log(data[0].name);

			router.push('/');
		} else {
			console.log('Login failed');
			setError(true);
		}
	};

	return (
		<div className='bg-gray-100 min-h-screen flex items-center justify-center p-6'>
			<div className='bg-white shadow-lg rounded-lg max-w-md mx-auto'>
				<div className='px-6 py-4'>
					<h2 className='text-[#2b2e83] text-3xl font-semibold'>Login</h2>
					<p className='mt-1 text-[#10a8e2]'>Please login to your account.</p>
				</div>
				<div className='px-6 py-4'>
					<form onSubmit={handleSubmit}>
						<div className='mt-4'>
							<label className='block text-[#10a8e2]' htmlFor='email'>
								Email
							</label>
							<input className='mt-2 rounded w-full px-3 py-2 text-[#2b2e83] bg-gray-200 outline-none focus:bg-gray-300' id='email' placeholder='m@example.com' value={userName} onChange={(e) => setuserName(e.target.value)} required type='email' />
						</div>
						<div className='mt-4'>
							<label className='block text-[#10a8e2]' htmlFor='password'>
								Password
							</label>
							<input className='mt-2 rounded w-full px-3 py-2 text-[#2b2e83] bg-gray-200 outline-none focus:bg-gray-300' id='password' value={password} onChange={(e) => setPassword(e.target.value)} required type='password' />
							<p className='mt-2 text-red-600 text-sm'>{error ? 'Wrong password or email' : ''}</p>
						</div>
						<div className='mt-6'>
							<button className='py-2 px-4 bg-[#2b2e83] text-white rounded hover:bg-[#10a8e2] w-full' type='submit'>
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
