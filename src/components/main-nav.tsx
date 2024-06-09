'use client';
import { Button } from '@/components/ui/button';
import { SheetTrigger, SheetContent, Sheet } from '@/components/ui/sheet';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { NavigationMenuLink, NavigationMenuList, NavigationMenu } from '@/components/ui/navigation-menu';
import { LogOut } from 'lucide-react';

export default function MainNav() {
	const router = useRouter();

	const handleLogout = () => {
		localStorage.removeItem('token');
		router.push('/login');
	};

	return (
		<header className='flex h-20 w-full shrink-0 items-center px-4 md:px-6'>
			<Sheet>
				<SheetTrigger asChild>
					<Button className='lg:hidden' size='icon' variant='link'>
						<MenuIcon className='h-6 w-6' />
						<span className='sr-only'>Toggle navigation menu</span>
					</Button>
				</SheetTrigger>
				<SheetContent side='left'>
					<Link href='#'>
						{/* <MountainIcon className='h-6 w-6' /> */}
						<span className='sr-only'>Clean Car</span>
					</Link>
					<div className='grid gap-2 py-6'>
						<Link className='flex w-full items-center py-2 text-lg font-semibold text-[#2b2e83]' href='#elektriciteit'>
							Elektriciteit
						</Link>
						<Link className='flex w-full items-center py-2 text-lg font-semibold text-[#2b2e83]' href='#laadpaal'>
							Laadpaal
						</Link>
						<Link className='flex w-full items-center py-2 text-lg font-semibold text-[#2b2e83]' href='#'>
							Services
						</Link>
						<Link className='flex w-full items-center py-2 text-lg font-semibold text-[#2b2e83]' href='#'>
							Portfolio
						</Link>
						<Link className='flex w-full items-center py-2 text-lg font-semibold text-[#2b2e83]' href='#'>
							Contact
						</Link>
						<a className='flex w-full items-center py-2 text-lg font-semibold text-[#2b2e83] border-none' onClick={handleLogout}>
							<span className='mr-2'>
								<LogOut />
							</span>
							Logout
						</a>
					</div>
				</SheetContent>
			</Sheet>
			<Link className='mr-6 hidden lg:flex' href=''>
				{/* <MountainIcon className='h-6 w-6' /> */}
			</Link>
			<div className='flex w-full justify-center'>
				<NavigationMenu className='hidden lg:flex'>
					<NavigationMenuList>
						<NavigationMenuLink asChild>
							<Link className='group inline-flex h-9 w-max items-center justify-center rounded-md bg-white !mx-2 px-4 py-2 text-sm text-[#2b2e83] font-medium transition-colors hover:bg-gray-100 hover:text-[#10a8e2] focus:bg-gray-100 focus:text-[#10a8e2] focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50' href='#elektriciteit'>
								Elektriciteit
							</Link>
						</NavigationMenuLink>
						<NavigationMenuLink asChild>
							<Link className='group inline-flex h-9 w-max items-center justify-center rounded-md bg-white !mx-2 px-4 py-2 text-sm text-[#2b2e83] font-medium transition-colors hover:bg-gray-100 hover:text-[#10a8e2] focus:bg-gray-100 focus:text-[#10a8e2] focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50' href='#laadpaal'>
								Laadpaal
							</Link>
						</NavigationMenuLink>
						<NavigationMenuLink asChild>
							<Link className='group inline-flex h-9 w-max items-center justify-center rounded-md bg-white !mx-2 px-4 py-2 text-sm text-[#2b2e83] font-medium transition-colors hover:bg-gray-100 hover:text-[#10a8e2] focus:bg-gray-100 focus:text-[#10a8e2] focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50' href='#'>
								Services
							</Link>
						</NavigationMenuLink>
						<NavigationMenuLink asChild>
							<Link className='group inline-flex h-9 w-max items-center justify-center rounded-md bg-white !mx-2 px-4 py-2 text-sm text-[#2b2e83] font-medium transition-colors hover:bg-gray-100 hover:text-[#10a8e2] focus:bg-gray-100 focus:text-[#10a8e2] focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50' href='#'>
								Portfolio
							</Link>
						</NavigationMenuLink>
						<NavigationMenuLink asChild>
							<Link className='group inline-flex h-9 w-max items-center justify-center rounded-md bg-white !mx-2 px-4 py-2 text-sm text-[#2b2e83] font-medium transition-colors hover:bg-gray-100 hover:text-[#10a8e2] focus:bg-gray-100 focus:text-[#10a8e2] focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50' href='#'>
								Contact
							</Link>
						</NavigationMenuLink>
					</NavigationMenuList>
				</NavigationMenu>
			</div>
			<div className='hidden md:block ml-auto mr-8'>
				<Button className='bg-[#2b2e83] text-white rounded hover:bg-[#10a8e2]' onClick={handleLogout}>
					<span className='mr-2'>
						<LogOut />
					</span>
					Logout
				</Button>
			</div>
		</header>
	);
}

function MenuIcon(props: any) {
	return (
		<svg {...props} xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='#2b2e83' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
			<line x1='4' x2='24' y1='12' y2='12' />
			<line x1='4' x2='24' y1='6' y2='6' />
			<line x1='4' x2='24' y1='18' y2='18' />
		</svg>
	);
}
