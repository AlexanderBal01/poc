import React, { useEffect, useState } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { ElectricityCardDonut, ElectricityCardPie } from './electricity-card';
import useWebSocket, { ReadyState } from 'react-use-websocket';

const Electricity = () => {
	const WS_URL = 'ws://192.168.1.61:1880/ws/electricity';

	const [data, setData] = useState({
		labels: ['', '', ''],
		datasets: [
			{
				label: 'My First Dataset',
				data: [0, 0, 0],
				backgroundColor: ['rgb(255, 99, 132)', 'rgb(54, 162, 235)', 'rgb(255, 205, 86)'],
				hoverOffset: 4,
			},
		],
	});

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
			setData({
				labels: ['huidig verbruik', 'huidige import', 'huidige opbrengst'],
				datasets: [
					{
						label: 'Elektriciteit',
						data: [lastJsonMessage[0].huidigVerbruik, lastJsonMessage[0].huidigeImport, lastJsonMessage[0].huidigeOpbrengst],
						backgroundColor: ['rgb(255, 99, 132)', 'rgb(54, 162, 235)', 'rgb(255, 205, 86)'],
						hoverOffset: 4,
					},
				],
			});
			console.log(lastJsonMessage);
		}
	}, [lastJsonMessage]);

	return (
		<div className='md:flex w-full justify-center' id='elektriciteit'>
			<Carousel className='md:w-full sm:max-w-md md:max-w-xl'>
				<CarouselContent>
					<CarouselItem key={1}>
						<div className='p-1'>
							<ElectricityCardPie chartData={data} />
						</div>
					</CarouselItem>
					<CarouselItem key={2}>
						<div className='p-1'>
							<ElectricityCardDonut chartData={data} />
						</div>
					</CarouselItem>
				</CarouselContent>
				<CarouselPrevious />
				<CarouselNext />
			</Carousel>
		</div>
	);
};

export default Electricity;
