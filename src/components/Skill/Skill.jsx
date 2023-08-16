import { Tecnologic } from './Tecnologic';

const Skill = () => {
  return (
    <section className="w-full mt-6 px-5 py-3 flex flex-col items-center gap-3 bg-gradient-to-t to-[#000A1D] from-[rgb(0,0,0,0.3)] md:px-11 lg:py-8 md:items-start lg:gap-6 xl:mt-0 xl:px-[7.5625rem] xl:py-3">
      <h1 className="text-lg font-semibold md:text-3xl lg:text-[2.5rem]">
        skill
      </h1>
      <div className="w-full flex flex-wrap gap-3 justify-center md:gap-0 md:justify-between">
        <Tecnologic srcImg="/javascript.svg" />
        <Tecnologic srcImg="/css.svg" />
        <Tecnologic srcImg="/html.svg" />
        <Tecnologic srcImg="/tailwind.svg" />
        <Tecnologic srcImg="/react.svg" />
      </div>
    </section>
  );
};

export default Skill;
