'use client';
import Link from 'next/link';
import { useTheme } from '@/components/context/ThemeProvider';
import {
  Logo,
  HomeIcon,
  ImageIcon,
  VideoIcon,
  EnhancerIcon,
  RealtimeIcon,
  EditIcon,
  FileIcon,
  GradientImage,
  GradientVideo,
  GradientRealtime,
  GradientMotion,
  Gradient3D,
  GradientEnhancer,
  GradientEdit,
  GradientLipsync,
  GradientRestyle,
  GradientAsset,
  Hamburger,
} from '@/lib/icons';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { Bell, ChevronDown, Headset, Image, Sun, Moon } from 'lucide-react';
import { useState, useEffect } from 'react';
import Container from './ui/container';
import { Button } from './ui/button';

export default function NavBar() {
  const { theme, toggleTheme } = useTheme();
  return (
    <>
      <Container className=' py-4 sticky top-0 bg-transparent dark:text-white z-50'>
        <div className='md:hidden flex items-center justify-between'>
          <Hamburger />
          <div className='flex items-center gap-4'>
            <button
              onClick={toggleTheme}
              className='bg-gray-100 dark:bg-[#262626] dark:text-white p-2 rounded-full'
            >
              {theme === 'dark' ? <Moon size={18} /> : <Sun size={18} />}
            </button>
            <button className=' bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 h-7 w-7 rounded-full'></button>
          </div>
        </div>
        <div className='hidden md:flex  items-center justify-between '>
          <div className='flex items-center gap-8'>
            <Link
              href='/'
              className='font-bold text-black dark:text-white text-3xl'
            >
              <Logo />
            </Link>
            <button className=' flex items-center gap-2'>
              <span className=' bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 h-6 w-6 rounded-full'></span>
              <p className='text-xs hidden lg:flex'>benevolentnimblebat</p>
              <ChevronDown size={13} />
            </button>
          </div>
          <NavigationMenu className='mx-auto bg-gray-100  dark:bg-[#202020] rounded-xl px-3 py-1 '>
            <NavigationMenuList>
              {menu.map((menu) => (
                <NavigationMenuItem key={menu.label}>
                  {menu.hasSubmenu ? (
                    <>
                      <NavigationMenuTrigger>
                        <menu.icon />
                      </NavigationMenuTrigger>
                      <NavigationMenuContent className='pt-20 px-6   rounded-4xl group-data-[viewport=false]/navigation-menu:border-none bg-white  dark:bg-black flex gap-44'>
                        {menu.submenu?.map((section) => (
                          <div key={section.title} className='pb-6'>
                            <h4 className='text-lg text-gray-400 font-semibold'>
                              {section.title}
                            </h4>
                            {section.items.map((item) => (
                              <NavigationMenuLink
                                key={item.label}
                                href={item.href}
                                className='flex flex-col gap-2 w-full  '
                              >
                                <div className='flex gap-5 w-full items-center'>
                                  <item.icon />
                                  <p>{item.label}</p>
                                </div>
                              </NavigationMenuLink>
                            ))}
                          </div>
                        ))}
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <Tooltip>
                      <TooltipTrigger>
                        <NavigationMenuLink
                          key={menu.href}
                          href={menu.href}
                          className='flex  items-center gap-4 hover:bg-gray-200 dark:hover:bg-[#333333] hover:rounded-xl'
                        >
                          <menu.icon />
                        </NavigationMenuLink>
                      </TooltipTrigger>
                      <TooltipContent className='bg-gray-200 mt-2'>
                        <p>{menu.label}</p>
                      </TooltipContent>
                    </Tooltip>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
          <div className='flex items-center gap-4'>
            <Button className='flex items-center gap-2  bg-gray-100 dark:text-white dark:bg-[#262626] py-1.5 px-3 rounded-xl text-xs cursor-pointer'>
              <Image size={18} />
              <span className='hidden sm:inline'>Gallery</span>
            </Button>
            <Button className='flex items-center gap-2  bg-gray-100 dark:text-white dark:bg-[#262626] py-1.5 px-3 rounded-xl text-xs cursor-pointer'>
              <Headset size={18} />
              <span className='hidden sm:inline'>Support</span>
            </Button>
            <Button
              variant='secondary'
              size='icon'
              className='bg-gray-100 dark:bg-[#262626] dark:text-white p-2 rounded-full cursor-pointers'
            >
              <Bell size={18} />
            </Button>
            <Button
              variant='secondary'
              size='icon'
              onClick={toggleTheme}
              className='bg-gray-100 size-8 dark:bg-[#262626] dark:text-white p-2 rounded-full cursor-pointer'
            >
              {theme === 'dark' ? <Moon size={18} /> : <Sun size={18} />}
            </Button>

            <Button
              size='sm'
              className='cursor-pointer bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 h-7 w-7 rounded-full'
            ></Button>
          </div>
        </div>
      </Container>
    </>
  );
}

type SubmenuSection = {
  id: number;
  title: string;
  items: {
    id: number;
    href: string;
    label: string;
    icon: React.ElementType;
  }[];
};

type Menu = {
  id: number;
  href: string;
  icon: React.ElementType;
  label: string;
  hasSubmenu: boolean;
  submenu?: SubmenuSection[];
};

const menu: Menu[] = [
  {
    id: 1,
    href: '/',
    icon: HomeIcon,
    label: 'Home',
    hasSubmenu: true,
    submenu: [
      {
        id: 1,
        title: 'Generate',
        items: [
          { id: 1, href: '/image', label: 'Image', icon: GradientImage },
          { id: 2, href: '/video', label: 'Video', icon: GradientVideo },
          {
            id: 3,
            href: '/realtime',
            label: 'Realtime',
            icon: GradientRealtime,
          },
          { id: 4, href: '/motion', label: 'Motion', icon: GradientMotion },
          { id: 5, href: '/3d', label: '3D', icon: Gradient3D },
        ],
      },
      {
        id: 2,
        title: 'Edit',
        items: [
          {
            id: 1,
            href: '/enhancer',
            label: 'Enhancer',
            icon: GradientEnhancer,
          },
          { id: 2, href: '/edit', label: 'Edit', icon: GradientEdit },
          { id: 1, href: '/lipsync', label: 'Lipsync', icon: GradientLipsync },
          { id: 2, href: '/restyle', label: 'Restyle', icon: GradientRestyle },
        ],
      },
      {
        id: 3,
        title: 'Assets',
        items: [
          { id: 1, href: '/train', label: 'Train', icon: GradientImage },
          { id: 2, href: '/assets', label: 'Assets', icon: GradientAsset },
          { id: 3, href: '/feed', label: 'Feed', icon: GradientRealtime },
        ],
      },
    ],
  },
  {
    id: 2,
    href: '/images',
    icon: ImageIcon,
    label: 'Images',
    hasSubmenu: false,
  },
  {
    id: 3,
    href: '/videos',
    icon: VideoIcon,
    label: 'Videos',
    hasSubmenu: false,
  },
  {
    id: 4,
    href: '/edit',
    icon: EnhancerIcon,
    label: 'Enhancer',
    hasSubmenu: false,
  },
  {
    id: 5,
    href: '/draw',
    icon: RealtimeIcon,
    label: 'Realtime',
    hasSubmenu: false,
  },
  {
    id: 6,
    href: '/edit',
    icon: EditIcon,
    label: 'map',
    hasSubmenu: false,
  },
  {
    id: 7,
    href: '/files',
    icon: FileIcon,
    label: 'Assets',
    hasSubmenu: false,
  },
];
