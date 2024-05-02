import type { Metadata } from 'next';
import { Inter as FontSans } from 'next/font/google';
import '@/styles/globals.css';
import { cn } from '@/lib/utils';

const fontSans = FontSans({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
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
	return (
		<html lang='en'>
			<body className={cn('min-h-screen bg-background font-sans antialiased', fontSans.variable)}>{children}</body>
		</html>
	);
}
