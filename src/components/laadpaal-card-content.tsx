import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Carousel, CarouselContent, CarouselItem } from './ui/carousel';
import Image from 'next/image';
import { Switch } from '@/components/ui/switch';
import { UseLaadpaalSchakelRequest } from '@/hooks/laadpaalHook';

export const LaadpaalCardCarouselContent = (props: any) => {
	const { laadpaalInfo } = props;
	console.log(laadpaalInfo);

	const handleChangeLaadpaal = (e: any) => {
		UseLaadpaalSchakelRequest(e);
	};

	return (
		<Carousel className='flex'>
			<CarouselContent className='flex'>
				<CarouselItem key={1} className='pl-0.5'>
					<div className='ml-4 flex flex-col rounded-md border w-11/12'>
						<div className='flex justify-center my-2 border-b'>
							<h3 className='text-2xl text-center '>Informatie</h3>
						</div>
						<p className='mx-2'>
							Actief:{' '}
							<span className=' float-right'>
								<b>{laadpaalInfo.maxCurrent === 0 ? 'Nee' : 'Ja'}</b>
							</span>
						</p>
						<p className='mx-2'>
							Maximale Stroom:{' '}
							<span className=' float-right'>
								<b>{laadpaalInfo.maxCurrent} A</b>
							</span>
						</p>
						<p className='mx-2'>
							Modus:{' '}
							<span className='float-right'>
								<b>{laadpaalInfo.mode}</b>
							</span>
						</p>
						<p className='mx-2'>
							Temperatuur:{' '}
							<span className='float-right'>
								<b>{laadpaalInfo.temp} °C</b>
							</span>
						</p>
						<p className='mx-2'>
							1 of 3 fasen:{' '}
							<span className='float-right'>
								<b>{laadpaalInfo.charge1Or3Phase}</b>
							</span>
						</p>
						<Image src='/modes-Alfen.png' width={250} height={200} alt='Tabel met modes van Alfen laadpaal' />
					</div>
				</CarouselItem>
				<CarouselItem key={2} className='pl-0.5'>
					<div className='ml-4 flex flex-col rounded-md h-full border w-11/12'>
						<div className='flex justify-center my-2 border-b'>
							<h3 className='text-2xl text-center '>Aansturing</h3>
						</div>
						<p className='mx-2'>
							Actief:{' '}
							<span className=' float-right'>
								<Switch checked={laadpaalInfo.maxCurrent === 0 ? false : true} onCheckedChange={handleChangeLaadpaal}></Switch>
							</span>
						</p>
					</div>
				</CarouselItem>
			</CarouselContent>
		</Carousel>
	);
};

export const LaadpaalCardContent = (props: any) => {
	const { laadpaalInfo } = props;

	const handleChangeLaadpaal = (e: any) => {
		const aanAf = e ? 'aan' : 'af';
		UseLaadpaalSchakelRequest(aanAf);
	};

	return (
		<>
			<Card>
				<CardHeader>
					<CardTitle className='text-center'>Informatie</CardTitle>
				</CardHeader>
				<CardContent>
					<p className='mx-2'>
						Maximale Stroom:{' '}
						<span className='pl-5 float-right'>
							<b>{laadpaalInfo.maxCurrent} kW</b>
						</span>
					</p>
					<p className='mx-2'>
						Modus:{' '}
						<span className='float-right'>
							<b>{laadpaalInfo.mode}</b>
						</span>
					</p>
					<p className='mx-2'>
						Temperatuur:{' '}
						<span className='float-right'>
							<b>{laadpaalInfo.temp} °C</b>
						</span>
					</p>
					<p className='mx-2'>
						1 of 3 fasen:{' '}
						<span className='float-right'>
							<b>{laadpaalInfo.charge1Or3Phase}</b>
						</span>
					</p>
					<Image src='/modes-Alfen.png' width={350} height={500} alt='Tabel met modes van Alfen laadpaal' />
				</CardContent>
			</Card>
			<Card>
				<CardHeader>
					<CardTitle>Aansturing</CardTitle>
				</CardHeader>
				<CardContent>
					<p className='mx-2'>
						Actief:{' '}
						<span className=' float-right'>
							<Switch checked={laadpaalInfo.maxCurrent === 0 ? false : true} onCheckedChange={handleChangeLaadpaal}></Switch>
						</span>
					</p>
				</CardContent>
			</Card>
		</>
	);
};
