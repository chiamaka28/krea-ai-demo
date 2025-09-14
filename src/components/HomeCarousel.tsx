import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  CarouselDots,
} from '@/components/ui/Carousel';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from './ui/button';

type Slides = {
  id: number;
  title: string;
  header: string;
  buttonText?: string;
  footerTittle?: string;
  description?: string;
  image: string;
};

const slides: Slides[] = [
  {
    id: 1,
    title: 'New Image Model',
    header: 'WAN 2.2',
    footerTittle: 'WAN 2.2 Image generation',
    description:
      'Generate complex images with the brand new and powerful WAN 2.2 model. Exceptional prompt adherence and ultra-realistic textures.',
    buttonText: 'Try WAN 2.2',
    image:
      'https://s.krea.ai/a_hand_in_vivid_orange_work_gloves_holding_a_clear_plastic_cup_of_pale-green_frozen_yogurt_topped_w_d9l7gozjurg8kblzfkue_3.webp',
  },
  {
    id: 2,
    title: 'Open Source Model',
    header: 'FLUX.1 Krea',
    footerTittle: 'WAN 2.2 Image generation',
    description:
      'We are making the weights to our FLUX.1 Krea model open-source. Download and run our model weights, read the technical report, or generate with it in Krea Image.',
    buttonText: 'Try FLUX.1',
    image:
      'https://s.krea.ai/photoreal_floating_lemon_wedges_with_fresh_juice_dripping_soft_left-side_illumination_isolated_subj_awf4nexwz2iwckyp8mx0_2.webp',
  },
  {
    id: 3,
    title: 'New Image Model',
    header: 'WAN 2.2',
    footerTittle: 'WAN 2.2 Image generation',
    description:
      'Generate complex images with the brand new and powerful WAN 2.2 model. Exceptional prompt adherence and ultra-realistic textures.',
    buttonText: 'Try WAN 2.2',
    image:
      'https://s.krea.ai/a_hand_in_vivid_orange_work_gloves_holding_a_clear_plastic_cup_of_pale-green_frozen_yogurt_topped_w_d9l7gozjurg8kblzfkue_3.webp',
  },
  {
    id: 4,
    title: 'New Image Model',
    header: 'WAN 2.2',
    footerTittle: 'WAN 2.2 Image generation',
    description:
      'Generate complex images with the brand new and powerful WAN 2.2 model. Exceptional prompt adherence and ultra-realistic textures.',
    buttonText: 'Try WAN 2.2',
    image:
      'https://s.krea.ai/a_hand_in_vivid_orange_work_gloves_holding_a_clear_plastic_cup_of_pale-green_frozen_yogurt_topped_w_d9l7gozjurg8kblzfkue_3.webp',
  },
  {
    id: 5,
    title: 'New Image Model',
    header: 'WAN 2.2',
    footerTittle: 'WAN 2.2 Image generation',
    description:
      'Generate complex images with the brand new and powerful WAN 2.2 model. Exceptional prompt adherence and ultra-realistic textures.',
    buttonText: 'Try WAN 2.2',
    image:
      'https://s.krea.ai/a_hand_in_vivid_orange_work_gloves_holding_a_clear_plastic_cup_of_pale-green_frozen_yogurt_topped_w_d9l7gozjurg8kblzfkue_3.webp',
  },
  {
    id: 6,
    title: 'New Image Model',
    header: 'WAN 2.2',
    footerTittle: 'WAN 2.2 Image generation',
    description:
      'Generate complex images with the brand new and powerful WAN 2.2 model. Exceptional prompt adherence and ultra-realistic textures.',
    buttonText: 'Try WAN 2.2',
    image:
      'https://s.krea.ai/a_hand_in_vivid_orange_work_gloves_holding_a_clear_plastic_cup_of_pale-green_frozen_yogurt_topped_w_d9l7gozjurg8kblzfkue_3.webp',
  },
  {
    id: 7,
    title: 'New Image Model',
    header: 'WAN 2.2',
    footerTittle: 'WAN 2.2 Image generation',
    description:
      'Generate complex images with the brand new and powerful WAN 2.2 model. Exceptional prompt adherence and ultra-realistic textures.',
    buttonText: 'Try WAN 2.2',
    image:
      'https://s.krea.ai/a_hand_in_vivid_orange_work_gloves_holding_a_clear_plastic_cup_of_pale-green_frozen_yogurt_topped_w_d9l7gozjurg8kblzfkue_3.webp',
  },
  {
    id: 8,
    title: 'New Image Model',
    header: 'WAN 2.2',
    footerTittle: 'WAN 2.2 Image generation',
    description:
      'Generate complex images with the brand new and powerful WAN 2.2 model. Exceptional prompt adherence and ultra-realistic textures.',
    buttonText: 'Try WAN 2.2',
    image:
      'https://s.krea.ai/a_hand_in_vivid_orange_work_gloves_holding_a_clear_plastic_cup_of_pale-green_frozen_yogurt_topped_w_d9l7gozjurg8kblzfkue_3.webp',
  },
  {
    id: 9,
    title: 'New Image Model',
    header: 'WAN 2.2',
    footerTittle: 'WAN 2.2 Image generation',
    description:
      'Generate complex images with the brand new and powerful WAN 2.2 model. Exceptional prompt adherence and ultra-realistic textures.',
    buttonText: 'Try WAN 2.2',
    image:
      'https://s.krea.ai/a_hand_in_vivid_orange_work_gloves_holding_a_clear_plastic_cup_of_pale-green_frozen_yogurt_topped_w_d9l7gozjurg8kblzfkue_3.webp',
  },
  {
    id: 10,
    title: 'New Image Model',
    header: 'WAN 2.2',
    footerTittle: 'WAN 2.2 Image generation',
    description:
      'Generate complex images with the brand new and powerful WAN 2.2 model. Exceptional prompt adherence and ultra-realistic textures.',
    buttonText: 'Try WAN 2.2',
    image:
      'https://s.krea.ai/a_hand_in_vivid_orange_work_gloves_holding_a_clear_plastic_cup_of_pale-green_frozen_yogurt_topped_w_d9l7gozjurg8kblzfkue_3.webp',
  },
];

export function HomeCarousel() {
  return (
    <Carousel
      opts={{
        align: 'start',
        containScroll: 'trimSnaps',
      }}
      className='relative my-0 mt-12 px-4 md:px-0 '
    >
      <CarouselContent>
        {slides.map((slide) => (
          <CarouselItem
            key={slide.id}
            className='md:basis-[60.666%] gap-x-6 md:ml-7 lg:ml-12'
          >
            <Card
              style={{
                backgroundImage: `url(${slide.image})`,
              }}
              className='aspect-[16/9] w-full rounded-3xl bg-cover bg-center bg-no-repeat md:aspect-[16/8]'
            >
              <CardContent className='text-white h-full flex flex-col justify-between'>
                <div>
                  <h5 className='text-[clamp(0.75rem,0.5vw+0.5rem,0.9rem)]'>
                    {slide.title}
                  </h5>
                </div>

                <div className='flex justify-center items-center'>
                  <h2 className='font-bold text-[clamp(2rem,4vw,3.5rem)]'>
                    {slide.header}
                  </h2>
                </div>

                <div className='flex items-end justify-between'>
                  <div>
                    <p className='text-[clamp(1.25rem,2vw,2rem)]'>
                      {slide.footerTittle}
                    </p>

                    <p className='max-w-[60%] text-[clamp(0.875rem,1vw,1.125rem)] leading-snug'>
                      {slide.description}
                    </p>
                  </div>

                  <Button className='bg-white  rounded-3xl text-black text-[clamp(0.8rem,1vw,1rem)] px-[clamp(0.75rem,1.5vw,1rem)] py-[clamp(0.25rem,0.5vw,0.5rem)]'>
                    {slide.buttonText}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className='flex items-center justify-between mt-3'>
        <div className='mx-auto'>
          <CarouselDots />
        </div>
        <div className='flex gap-2 items-center mr-10'>
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </div>
    </Carousel>
  );
}
