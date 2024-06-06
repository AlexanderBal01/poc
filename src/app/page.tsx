'use client';

import Electricity from '@/components/electricity';
import Laadpaal from '@/components/laadpaal';
import MainNav from '@/components/main-nav';
import { useRouter } from 'next/navigation';

export default function Home() {
	const router = useRouter();

	if (!localStorage.getItem('token')) {
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
