import React from 'react';
//components
import { Technologies } from '../Skill/Technologies';

export const Project = ({
  title,
  text,
  srcImg,
  itemsPosition,
  flexReverse,
  link,
  skill,
}) => {
  return (
    <div
      className={`flex flex-col lg:flex-row gap-5 xl:gap-0 items-center mb-[1.875rem] md:items-start lg:mb-28 xl:mb-48 ${flexReverse}`}
    >
      <div className="lg:w-[70%] flex flex-col gap-6">
        <h1 className="text-base md:text-3xl font-semibold">{title}</h1>
        <div className="space-y-4">
          <p
            className={`max-w-[600px] 2xl:max-w-[800px] text-[#D4D4D4] text-xs md:text-lg xl:text-xl text-${itemsPosition}`}
          >
            {text}
          </p>
          <div className="flex flex-wrap">
            {skill.map(({ id, skill, img }) => (
              <Technologies key={id} srcImg={img} skill={skill} />
            ))}
          </div>
        </div>
      </div>

      <a
        className={`my-14 lg:my-0 ${
          flexReverse == 'lg:flex-row-reverse' ? 'lg:mr-12' : 'lg:m-12'
        }`}
        target="_blank"
        href={`${link}`}
      >
        <img
          className="block hover:scale-110 transition-all duration-500 cursor-pointer w-[200px] md:w-[100%] h-[140px] md:h-[200px] lg:h-[180px] xl:h-[230px] 2xl:h-[270px]"
          src={srcImg}
          alt="Project"
        />
      </a>
    </div>
  );
};
