import React from 'react';

export const Project = ({
  title,
  text,
  srcImg,
  itemsPosition,
  flexReverse,
}) => {
  return (
    <div
      className={`flex flex-col lg:flex-row gap-5 xl:gap-0 items-center ${flexReverse}`}
    >
      <div className="flex flex-col gap-6">
        <h1 className="text-lg md:text-3xl font-semibold">{title}</h1>
        <p
          className={`text-[.9375rem] md:text-xl xl:text-2xl text-${itemsPosition}`}
        >
          {text}
        </p>
      </div>
      <img
        className="block w-[11.9375rem] h-[6.1875rem] md:w-[17.125rem] md:h-[8.875rem] xl:w-[30.375rem] xl:h-[15.0625rem]"
        src={srcImg}
        alt="Project"
      />
    </div>
  );
};
