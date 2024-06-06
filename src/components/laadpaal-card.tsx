import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const LaadpaalCard = () => {
	return (
		<Card className='my-5 mx-10'>
			<CardHeader className='items-center'>
				<CardTitle className='items-center justify-center'>Laadpaal</CardTitle>
				<CardDescription>informatie</CardDescription>
			</CardHeader>
			<CardContent></CardContent>
		</Card>
	);
};

export default LaadpaalCard;
