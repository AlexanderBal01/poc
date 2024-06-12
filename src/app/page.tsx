'use client';

import Electricity from '@/components/electricity';
import Laadpaal from '@/components/laadpaal';
import MainNav from '@/components/main-nav';
import AuthUserContext from '@/contexts/AuthUserProvidor';
import { useRouter } from 'next/navigation';
import { useContext } from 'react';

export default function Home() {
	const userContext = useContext(AuthUserContext);
	const router = useRouter();

	if (userContext.userName === null) {
		router.push('/login');
		return null;
	}

	return (
		<div className='bg-gray-100 min-h-screen items-center justify-center p-2'>
			<MainNav />
			<Electricity />
			<Laadpaal />
		</div>
	);
}
