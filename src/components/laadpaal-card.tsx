import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { LaadpaalCardCarouselContent, LaadpaalCardContent } from './laadpaal-card-content';

const LaadpaalCard = () => {
	const [isMobile, setIsMobile] = useState(false);
	const [data, setData] = useState({});

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth <= 768);
		};

		// Initialize the state
		handleResize();

		// Add event listener
		window.addEventListener('resize', handleResize);

		// Clean up the event listener
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	useEffect(() => {
		const interval = setInterval(async () => {
			const res = await fetch(`http://192.168.1.61:1880/charging-station/info?token=${localStorage.getItem('token')}`, {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
				},
			});

			const response = await res.json();
			setData([response[0]]);
		}, 1000);
	});

	return (
		<Card className='my-5 mx-10 md'>
			<CardHeader className='items-center'>
				<CardTitle className='items-center justify-center'>Laadpaal</CardTitle>
			</CardHeader>
			<CardContent className='flex space-x-5'>{isMobile ? <LaadpaalCardCarouselContent laadpaalInfo={data} /> : <LaadpaalCardContent laadpaalInfo={data} />}</CardContent>
		</Card>
	);
};

export default LaadpaalCard;
