import React from 'react';
//react fast marquee
import Marquee from 'react-fast-marquee';
//react scroll
import { Element } from 'react-scroll';
//components
import { Technologies } from './Technologies';
import { BaseLayout } from '../../layout/BaseLayout';

const dataSkills = [
  {
    id: '1',
    skill: 'MongoDB',
    img: '/skills/mongoDB.svg',
  },
  {
    id: '2',
    skill: 'NestJS',
    img: '/skills/nestJS.svg',
  },
  {
    id: '3',
    skill: 'React',
    img: '/skills/react.svg',
  },
  {
    id: '4',
    skill: 'NodeJS',
    img: '/skills/nodeJS.svg',
  },
  {
    id: '5',
    skill: 'Material UI',
    img: '/skills/materialUI.svg',
  },
  {
    id: '6',
    skill: 'javaScript',
    img: '/skills/js.svg',
  },
  {
    id: '7',
    skill: 'express',
    img: '/skills/expressJS.svg',
  },
  {
    id: '8',
    skill: 'HTML',
    img: '/skills/html.svg',
  },
  {
    id: '9',
    skill: 'Typescript',
    img: '/skills/ts.svg',
  },
  {
    id: '10',
    skill: 'CSS',
    img: '/skills/css.svg',
  },
  {
    id: '11',
    skill: 'Tailwind',
    img: '/skills/tailwind.svg',
  },
];

export const Skill = () => {
  return (
    <Element name="Habilidades">
      <div className="w-full bg-gradient-to-t to-[#000A1D] from-[rgb(0,0,0,0.3)] mt-6 xl:mt-0 py-2 ">
        <BaseLayout>
          <div className="gap-2 py-2 flex-center-col md:flex-center-row md:gap-4 md:py-4">
            <h1 className="text-lg font-semibold md:text-2xl lg:text-3xl">
              habilidades
            </h1>
            <Marquee
              autoFill
              speed={60}
              className="border-x-2 border-[#131029] rounded-3xl"
            >
              {dataSkills.map(({ id, skill, img }) => (
                <Technologies key={id} srcImg={img} skill={skill} />
              ))}
            </Marquee>
          </div>
        </BaseLayout>
      </div>
    </Element>
  );
};
