'use client';

import type { Metadata } from 'next';
import { Inter as FontSans } from 'next/font/google';
import '@/styles/globals.css';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import AuthUserContext from '@/contexts/AuthUserProvidor';

const fontSans = FontSans({ subsets: ['latin'], variable: '--font-sans' });

const metadata: Metadata = {
	title: 'Elektriciteitbeheersysteem - Carwash Clean Car',
	description: 'Gemaakt door Alexander Bal',
	icons: [
		{
			rel: 'apple-touch-icon',
			sizes: '180x180',
			url: '/apple-touch-icon.png',
		},
	],
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const [user, setUser] = useState(null);
	return (
		<AuthUserContext.Provider value={{ userName: user, setUserName: setUser }}>
			<html lang='en'>
				<body className={cn('min-h-screen bg-background font-sans antialiased', fontSans.variable)}>{children}</body>
			</html>
		</AuthUserContext.Provider>
	);
}
