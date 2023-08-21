import React from 'react';

export const Project = ({
  title,
  text,
  srcImg,
  itemsPosition,
  flexReverse,
  link,
}) => {
  return (
    <div
      className={`flex flex-col lg:flex-row gap-5 xl:gap-0 items-center ${flexReverse}`}
    >
      <div className="lg:w-[70%] flex flex-col gap-6">
        <h1 className="text-lg md:text-3xl font-semibold">{title}</h1>
        <p
          className={`text-[.9375rem] md:text-xl xl:text-2xl text-${itemsPosition}`}
        >
          {text}
        </p>
      </div>
      <a
        className={`my-14 lg:my-0 ${
          flexReverse == 'lg:flex-row-reverse' ? 'lg:mr-12' : 'lg:m-12'
        }`}
        target="_blank"
        href={`${link}`}
      >
        <img
          className="block hover:scale-110 transition-all duration-500 cursor-pointer w-[100%] h-[140px] md:h-[200px] lg:h-[180px] xl:h-[230px] 2xl:h-[270px]"
          src={srcImg}
          alt="Project"
        />
      </a>
    </div>
  );
};
