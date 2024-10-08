// Layout
import { BaseLayout } from '../../layout';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../ui/carousel';

//
import CardFreelas from './CardFreela';

const data = [
  {
    id: 6,
    img: '/freelas/kafraverse.png',
    name: 'Kafraverse',
    service: 'Front-end, back-end, design',
    language: [
      { skill: 'Next', img: '/skills/next.svg' },
      { skill: 'Tailwind', img: '/skills/tailwind.svg' },
      { skill: 'Typescript', img: '/skills/ts.svg' },
      { skill: 'HTML', img: '/skills/html.svg' },
    ],
    link: 'https://www.kafraverse.com/',
  },
  {
    id: 5,
    img: '/freelas/aguiar.png',
    name: 'Distribuidora Aguiar',
    service: 'Front-end, design',
    language: [
      { skill: 'Next', img: '/skills/next.svg' },
      { skill: 'Tailwind', img: '/skills/tailwind.svg' },
      { skill: 'Typescript', img: '/skills/ts.svg' },
      { skill: 'HTML', img: '/skills/html.svg' },
    ],
    link: 'https://distribuidora-aguiar-kappa.vercel.app/',
  },
  {
    id: 4,
    img: '/freelas/captainWindow.png',
    name: 'Captain Window',
    service: 'Front-end, design',
    language: [
      { skill: 'Next', img: '/skills/next.svg' },
      { skill: 'Tailwind', img: '/skills/tailwind.svg' },
      { skill: 'Typescript', img: '/skills/ts.svg' },
      { skill: 'HTML', img: '/skills/html.svg' },
    ],
    link: 'https://www.captain-window.com/',
  },
  {
    id: 3,
    img: '/freelas/proben.png',
    name: 'Proben',
    service: 'Front-end, design',
    language: [
      { skill: 'Next', img: '/skills/next.svg' },
      { skill: 'Tailwind', img: '/skills/tailwind.svg' },
      { skill: 'Typescript', img: '/skills/ts.svg' },
      { skill: 'HTML', img: '/skills/html.svg' },
    ],
    link: 'https://proben-one.vercel.app/',
  },
  {
    id: 2,
    img: '/freelas/infinity.png',
    name: 'Inifnity',
    service: 'Front-end',
    language: [
      { skill: 'Next', img: '/skills/next.svg' },
      { skill: 'Tailwind', img: '/skills/tailwind.svg' },
      { skill: 'Typescript', img: '/skills/ts.svg' },
      { skill: 'HTML', img: '/skills/html.svg' },
    ],
    link: 'https://infinity-ruby-one.vercel.app/',
  },
  {
    id: 1,
    img: '/freelas/futHoje.png',
    name: 'FutHoje',
    service: 'Front-end',
    language: [
      { skill: 'Next', img: '/skills/next.svg' },
      { skill: 'Tailwind', img: '/skills/tailwind.svg' },
      { skill: 'Typescript', img: '/skills/ts.svg' },
      { skill: 'HTML', img: '/skills/html.svg' },
    ],
    link: 'https://futhoje.vercel.app/',
  },
];

export const Freelances = () => {
  return (
    <BaseLayout className="w-full pb-32 space-y-2 xl:space-y-6">
      <h1 className="text-2xl font-semibold xl:text-6xl">Freelas</h1>

      <Carousel
        opts={{
          align: 'start',
        }}
        className="w-full"
      >
        <CarouselContent className="gap-2">
          {data.map(({ id, img, service, name, language, link }) => (
            <CarouselItem
              key={id}
              className="basis-[100%] min-[375px]:basis-[70%] sm:basis-[42%] lg:basis-[28%]"
            >
              <CardFreelas
                link={link}
                img={img}
                name={name}
                service={service}
                language={language}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="max-lg:left-0 max-lg:bg-[rgba(1,06,23,0.9)]" />
        <CarouselNext className="max-lg:right-0 max-lg:bg-[rgba(1,06,23,0.9)]" />
      </Carousel>
    </BaseLayout>
  );
};
