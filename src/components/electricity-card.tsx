import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const ElectricityCard = () => {
	return (
		<Card className='my-5 mx-10'>
			<CardHeader className='items-center'>
				<CardTitle className='items-center justify-center'>Elektriciteit</CardTitle>
				<CardDescription>informatie</CardDescription>
			</CardHeader>
			<CardContent>
				<p>Card Content</p>
			</CardContent>
		</Card>
	);
};

export default ElectricityCard;
