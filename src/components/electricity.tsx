import React, { useEffect, useState } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { ElectricityCardDonut, ElectricityCardPie } from './electricity-card';

const Electricity = () => {
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

	useEffect(() => {
		const interval = setInterval(async () => {
			const res = await fetch(`http://192.168.1.61:1880/electricity/status?token=${localStorage.getItem('token')}`, {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
				},
			});

			const response = await res.json();
			const label = ['Huidig verbruik', 'Huidige opbrengst', 'Huidige import'];
			const data = [response[0].huidigVerbruik, response[0].huidigeOpbrengst, response[0].huidigeImport];
			setData({
				labels: label,
				datasets: [
					{
						label: 'Elektriciteit',
						data: data,
						backgroundColor: ['rgb(255, 99, 132)', 'rgb(54, 162, 235)', 'rgb(255, 205, 86)'],
						hoverOffset: 4,
					},
				],
			});
		}, 1000);
	}, []);

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
