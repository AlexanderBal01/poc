import React, { useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';
import { log } from 'console';

export const LaadpaalCardCarouselContent = (props: any) => {
	const { laadpaalInfo } = props;
	console.log(laadpaalInfo);

	return (
		<Carousel>
			<CarouselContent>
				<CarouselItem key={1}>
					<div className=' flex flex-col rounded-md border w-10/12'>
						<div className='flex justify-center '>
							<h3 className='text-2xl text-center'>Informatie</h3>
						</div>
						<p className='mx-2'>
							Maximale Stroom:{' '}
							<span className='float-right'>
								<b></b>
							</span>
						</p>
					</div>
				</CarouselItem>
				<CarouselItem key={2}>
					<Card>
						<CardHeader>
							<CardTitle>Informatie</CardTitle>
						</CardHeader>
						<CardContent>
							<CardDescription>Laadpaal 1</CardDescription>
						</CardContent>
					</Card>
				</CarouselItem>
			</CarouselContent>
		</Carousel>
	);
};

export const LaadpaalCardContent = (props: any) => {
	const { laadpaalInfo } = props;

	return (
		<>
			<Card>
				<CardHeader>
					<CardTitle>Informatie</CardTitle>
				</CardHeader>
				<CardContent>
					<CardDescription>Laadpaal 1</CardDescription>
				</CardContent>
			</Card>
			<Card>
				<CardHeader>
					<CardTitle>Informatie</CardTitle>
				</CardHeader>
				<CardContent>
					<CardDescription>Laadpaal 1</CardDescription>
				</CardContent>
			</Card>
		</>
	);
};
