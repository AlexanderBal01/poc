'use client';

import { useRouter } from 'next/navigation';

export default function Home() {
	const router = useRouter();

	if (!localStorage.getItem('token')) {
		router.push('/login');
		return null;
	}

	return <div></div>;
}
