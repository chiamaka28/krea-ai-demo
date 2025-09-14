import {
  GradientImage,
  GradientVideo,
  GradientRealtime,
  GradientMotion,
  Gradient3D,
  GradientEnhancer,
  GradientEdit,
  GradientLipsync,
} from '@/lib/icons';
import { Button } from './ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import Container from './ui/container';

export default function Main() {
  return (
    <Container className='mb-10'>
      <h4 className='text-lg font-semibold mb-3 text-black dark:text-white'>
        Generate
      </h4>
      <div className='grid  gap-3 grid-cols-1 md:grid-cols-3 lg:grid-cols-4'>
        {data.map((item, idx) => {
          return (
            <Link
              href={item.href}
              key={idx}
              className='flex items-center justify-between md:justify-normal'
            >
              <div className='flex items-center gap-3'>
                <div>
                  <item.icon />
                </div>
                <div>
                  <h4 className='text-sm font-semibold flex gap-1.5 items-center text-black dark:text-white'>
                    {item.title}
                    {item.hasBadge ? (
                      <Badge className='bg-blue-500 text-white dark:bg-blue-600 rounded-2xl px-1.5'>
                        {item.badge}
                      </Badge>
                    ) : (
                      ''
                    )}
                  </h4>

                  <p className='text-xs text-gray-500 dark:text-white'>
                    {item.description}
                  </p>
                </div>
              </div>

              <Button className='bg-gray-100  font-semibold rounded-3xl text-black dark:text-[#262626]'>
                {item.buttonLabel}
              </Button>
            </Link>
          );
        })}
      </div>
    </Container>
  );
}

type DataProps = {
  id: number;
  title: string;
  description: string;
  icon: React.ElementType;
  buttonLabel: string;
  href: string;
  hasBadge: boolean;
  badge?: string;
};

const data: DataProps[] = [
  {
    id: 1,
    title: 'Image',
    description: 'Generate images with custom styles in Flux and Ideogram',
    icon: GradientImage,
    buttonLabel: 'Open',
    href: '/image',
    hasBadge: true,
    badge: 'new',
  },
  {
    id: 2,
    title: 'Video',
    description: 'Generate images with custom styles in Flux and Ideogram',
    icon: GradientVideo,
    buttonLabel: 'Open',
    href: '/video',
    hasBadge: false,
  },
  {
    id: 3,
    title: 'Realtime',
    description: 'Generate images with custom styles in Flux and Ideogram',
    icon: GradientRealtime,
    buttonLabel: 'Open',
    href: '/realtime',
    hasBadge: false,
  },
  {
    id: 4,
    title: 'Enhancer',
    description: 'Generate images with custom styles in Flux and Ideogram',
    icon: GradientEnhancer,
    buttonLabel: 'Open',
    href: '/enhancer',
    hasBadge: true,
    badge: 'new',
  },
  {
    id: 5,
    title: 'Edit',
    description: 'Generate images with custom styles in Flux and Ideogram',
    icon: GradientEdit,
    buttonLabel: 'Open',
    href: '/edit',
    hasBadge: true,
    badge: 'new',
  },
  {
    id: 6,
    title: 'Video Lipsync',
    description: 'Generate images with custom styles in Flux and Ideogram',
    icon: GradientLipsync,
    buttonLabel: 'Open',
    href: '/lipsync',
    hasBadge: true,
    badge: 'new',
  },
  {
    id: 7,
    title: 'Motion Transfer',
    description: 'Generate images with custom styles in Flux and Ideogram',
    icon: GradientMotion,
    buttonLabel: 'Open',
    href: '/motion',
    hasBadge: true,
    badge: 'new',
  },
  {
    id: 8,
    title: 'Train',
    description: 'Generate images with custom styles in Flux and Ideogram',
    icon: Gradient3D,
    buttonLabel: 'Open',
    href: '/train',
    hasBadge: false,
  },
];
