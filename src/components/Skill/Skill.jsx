import React from 'react';
import { Tecnologic } from './Tecnologic';

const Skill = () => {
  return (
    <section className="w-full mt-6 xl:mt-0 px-5 md:px-11 py-[.8125rem] xl:px-[7.5625rem]  lg:py-8 flex flex-col items-center md:items-start gap-3 lg:gap-6 xl:py-3 bg-gradient-to-t to-[#000A1D] from-[rgb(0,0,0,0.3)]">
      <h1 className="text-lg md:text-3xl lg:text-[2.5rem] font-semibold">
        skill
      </h1>
      <div className="flex flex-wrap gap-[1.125rem] lg:gap-8 xl:gap-8 justify-center ">
        <Tecnologic srcImg="javaScript.jpg" altImg="" />
        <Tecnologic srcImg="css3.jpg" altImg="" />
        <Tecnologic srcImg="html5.jpg" altImg="" />
        <Tecnologic srcImg="tailwindCss.jpg" altImg="" />
        <Tecnologic srcImg="react.jpg" altImg="" />
      </div>
    </section>
  );
};

export default Skill;
