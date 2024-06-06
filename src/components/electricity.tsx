import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { ElectricityCardDonut, ElectricityCardPie } from './electricity-card';

const Electricity = () => {
	return (
		<div className='md:flex w-full justify-center' id='elektriciteit'>
			<Carousel className='md:w-full sm:max-w-md md:max-w-xl'>
				<CarouselContent>
					<CarouselItem key={1}>
						<div className='p-1'>
							<ElectricityCardPie />
						</div>
					</CarouselItem>
					<CarouselItem key={2}>
						<div className='p-1'>
							<ElectricityCardDonut />
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
