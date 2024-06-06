'use client';

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Chart, Tooltip, Title, ArcElement, Legend } from 'chart.js';
import { Doughnut, Pie } from 'react-chartjs-2';
Chart.register(Tooltip, Title, ArcElement, Legend);

export const ElectricityCardPie = () => {
	const [dataPie, setData] = useState({
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
		<Card className='my-5 mx-10'>
			<CardHeader className='items-center'>
				<CardTitle className='items-center justify-center'>Elektriciteit</CardTitle>
				<CardDescription>
					Huidig verbruik: <b>{dataPie.datasets[0].data[0]}</b> kW
				</CardDescription>
				<CardDescription>
					Huidige opbrengst: <b>{dataPie.datasets[0].data[1]}</b> kW
				</CardDescription>
				<CardDescription>
					Huidige import: <b>{dataPie.datasets[0].data[2]}</b> kW
				</CardDescription>
			</CardHeader>
			<CardContent>
				<Pie data={dataPie} width={25} height={25} />
				<p className='text-center'></p>
			</CardContent>
		</Card>
	);
};

export const ElectricityCardDonut = () => {
	const [dataDonut, setData] = useState({
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
		<Card className='my-5 mx-10'>
			<CardHeader className='items-center'>
				<CardTitle className='items-center justify-center'>Elektriciteit</CardTitle>
				<CardDescription>
					Huidig verbruik: <b>{dataDonut.datasets[0].data[0]}</b> kW
				</CardDescription>
				<CardDescription>
					Huidige opbrengst: <b>{dataDonut.datasets[0].data[1]}</b> kW
				</CardDescription>
				<CardDescription>
					Huidige import: <b>{dataDonut.datasets[0].data[2]}</b> kW
				</CardDescription>
			</CardHeader>
			<CardContent>
				<Doughnut data={dataDonut} width={25} height={25} />
			</CardContent>
		</Card>
	);
};
