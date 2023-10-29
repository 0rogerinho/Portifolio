import { Tecnologic } from './Tecnologic';
import Marquee from 'react-fast-marquee';

import React from 'react';
import { Element } from 'react-scroll';

const dataSkills = [
  {
    id: '1',
    skill: 'MongoDB',
    img: '/mongoDB.svg',
  },
  {
    id: '2',
    skill: 'NestJS',
    img: '/nestJS.svg',
  },
  {
    id: '3',
    skill: 'React',
    img: '/react.svg',
  },
  {
    id: '4',
    skill: 'NodeJS',
    img: '/nodeJS.svg',
  },
  {
    id: '5',
    skill: 'Material UI',
    img: '/materialUI.svg',
  },
  {
    id: '6',
    skill: 'javaScript',
    img: '/js.svg',
  },
  {
    id: '7',
    skill: 'express',
    img: '/expressJS.svg',
  },
  {
    id: '8',
    skill: 'HTML',
    img: '/html.svg',
  },
  {
    id: '9',
    skill: 'CSS',
    img: '/css.svg',
  },
];

const Skill = () => {
  return (
    <Element name="Skills">
      <section className="w-full flex-center-col md:flex-center-row gap-2 py-2 mt-6 xl:mt-0 md:gap-4 md:py-4 bg-gradient-to-t to-[#000A1D] from-[rgb(0,0,0,0.3)] px-[5%] xl:px-[8%] 2xl:px-[20%]">
        <h1 className=" text-lg font-semibold md:text-2xl lg:text-3xl">
          Skills
        </h1>

        <Marquee
          autoFill
          speed={60}
          className="border-x-2 border-[#131029] rounded-3xl"
        >
          {dataSkills.map(({ id, skill, img }) => (
            <Tecnologic key={id} srcImg={img} skill={skill} />
          ))}
        </Marquee>
      </section>
    </Element>
  );
};

export default Skill;
