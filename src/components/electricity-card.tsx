'use client';

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Chart, Tooltip, Title, ArcElement, Legend } from 'chart.js';
import { Doughnut, Pie } from 'react-chartjs-2';
Chart.register(Tooltip, Title, ArcElement, Legend);

export const ElectricityCardPie = (props: any) => {
	const { chartData } = props;

	return (
		<Card className='my-5 mx-10'>
			<CardHeader className='items-center'>
				<CardTitle className='items-center justify-center'>Elektriciteit</CardTitle>
				<CardDescription>
					Huidig verbruik: <b>{chartData.datasets[0].data[0]}</b> kW
				</CardDescription>
				<CardDescription>
					Huidige opbrengst: <b>{chartData.datasets[0].data[1]}</b> kW
				</CardDescription>
				<CardDescription>
					Huidige import: <b>{chartData.datasets[0].data[2]}</b> kW
				</CardDescription>
			</CardHeader>
			<CardContent>
				<Pie data={chartData} width={25} height={25} />
				<p className='text-center'></p>
			</CardContent>
		</Card>
	);
};

export const ElectricityCardDonut = (props: any) => {
	const { chartData } = props;

	return (
		<Card className='my-5 mx-10'>
			<CardHeader className='items-center'>
				<CardTitle className='items-center justify-center'>Elektriciteit</CardTitle>
				<CardDescription>
					Huidig verbruik: <b>{chartData.datasets[0].data[0]}</b> kW
				</CardDescription>
				<CardDescription>
					Huidige opbrengst: <b>{chartData.datasets[0].data[1]}</b> kW
				</CardDescription>
				<CardDescription>
					Huidige import: <b>{chartData.datasets[0].data[2]}</b> kW
				</CardDescription>
			</CardHeader>
			<CardContent>
				<Doughnut data={chartData} width={25} height={25} />
			</CardContent>
		</Card>
	);
};
