import React from 'react';
import { BaseLayout } from '../../layout';
import { BsChevronLeft } from 'react-icons/bs';
import { cn } from '../../lib/utils';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Navigation, Pagination } from 'swiper/modules';
import CardFreelas from './CardFreela';

const data = [
  {
    id: 1,
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
    id: 2,
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
    id: 3,
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
    id: 4,
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

const Btn = ({ btnPrev = false }) => {
  return (
    <BsChevronLeft
      className={cn(
        'cursor-pointer absolute text-2xl lg:text-4xl 2xl:text-6xl hidden md:block',
        btnPrev
          ? 'swiper-btn-prev left-0 xl:left-12 md:left-2 lg:left-2 2xl:left-[16%]'
          : 'swiper-btn-next rotate-180 right-0 md:right-2 lg:right-2 xl:right-12 2xl:right-[16%]',
      )}
    />
  );
};

export const Freelances = () => {
  return (
    <BaseLayout className="pb-32">
      <div className="flex items-end justify-between">
        <h1 className="text-2xl font-semibold xl:text-6xl">Freelas</h1>
        {/* <button>
          <p className="xl:text-2xl font-semibold after:block after:w-full after:rounded-full after:bg-gradient-to-r after:from-[#923858] after:to-[#57244B] after:animate-pulse after:h-0.5 md:after:h-1">
            Ver mais
          </p>
        </button> */}
      </div>
      <div className="flex items-center justify-center">
        <Btn btnPrev />
        <Swiper
          breakpoints={{
            0: {
              pagination: { clickable: true },
              slidesPerView: 1.5,
              spaceBetween: 10,
              navigation: false,
            },
            375: { slidesPerView: 1.7, spaceBetween: 10 },
            526: { slidesPerView: 2, spaceBetween: 20 },
            600: { slidesPerView: 2.5, spaceBetween: 20 },
            868: { slidesPerView: 3, spaceBetween: 20 },
            1020: { slidesPerView: 3.5, spaceBetween: 20 },
          }}
          pagination={{ clickable: true }}
          navigation={{
            enabled: true,
            prevEl: '.swiper-btn-prev',
            nextEl: '.swiper-btn-next',
          }}
          modules={[Navigation, Pagination]}
          className="mySwiper"
        >
          {data.map(({ id, img, service, name, language, link }) => {
            return (
              <SwiperSlide className="py-2" key={id}>
                <CardFreelas
                  link={link}
                  img={img}
                  name={name}
                  service={service}
                  language={language}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
        <Btn />
      </div>
    </BaseLayout>
  );
};
