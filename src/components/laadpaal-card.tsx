import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { LaadpaalCardCarouselContent, LaadpaalCardContent } from './laadpaal-card-content';
import useWebSocket, { ReadyState } from 'react-use-websocket';

const LaadpaalCard = () => {
	const WS_URL = 'ws://192.168.1.61:1880/ws/charging-station/status';

	const [isMobile, setIsMobile] = useState(false);
	const [data, setData] = useState({});

	const { sendJsonMessage, lastJsonMessage, readyState } = useWebSocket(WS_URL, {
		share: false,
		shouldReconnect: () => true,
	});

	useEffect(() => {
		console.log('Connection state changed');
		if (readyState === ReadyState.OPEN) {
			console.log('WebSocket connection is open');
		}
	}, [readyState]);

	// Run when a new WebSocket message is received (lastJsonMessage)
	useEffect(() => {
		if (lastJsonMessage !== null) {
			setData(lastJsonMessage[0]);
		}
	}, [lastJsonMessage]);

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
