//components
import { cn } from '../../lib/utils';
import { Technologies } from '../Skill/Technologies';
// types
import { IProject } from './@types';

export const Project = ({
  title,
  text,
  srcImg,
  itemsPosition,
  flexReverse,
  link,
  time,
  skill,
}: IProject) => {
  return (
    <div
      className={cn(
        'w-full text-center flex flex-col justify-between lg:flex-row gap-5 xl:gap-0 items-center mb-[1.875rem] lg:text-start md:items-start lg:mb-28 xl:mb-32',
        flexReverse,
      )}
    >
      <div className="w-full flex flex-col gap-6 lg:w-fit">
        <div className="flex flex-col items-center gap-2 lg:flex-row">
          <h1 className="text-xl font-semibold md:text-3xl">{title}</h1>
          {time && <p className="text-xs opacity-50 lg:text-sm">{time}</p>}
        </div>
        <div className="space-y-4">
          <p
            className={`w-fit m-auto max-w-[600px] 2xl:max-w-[800px] text-[#D4D4D4] text-xs md:text-lg lg:m-0 xl:text-xl text-${itemsPosition}`}
          >
            {text}
          </p>
          <div className="flex flex-wrap justify-center items-center lg:justify-start">
            {skill.map(({ id, skill, img }) => (
              <Technologies key={id} srcImg={img} skill={skill} />
            ))}
          </div>
        </div>
      </div>

      <a
        className={`my-14 lg:my-0 mx-auto lg:mx-0 ${
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
