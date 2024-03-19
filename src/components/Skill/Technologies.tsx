// Libs
import { cn } from '../../lib/utils';
// Types
import { ITechnologies } from './@types';

export const Technologies = ({
  skill,
  srcImg,
  classDiv,
  classImg,
}: ITechnologies) => {
  return (
    <div
      className={cn(
        'min-w-[100px]  my-2 md:mr-8 flex md:flex-col justify-center items-center',
        classDiv,
      )}
    >
      <img
        className={cn(
          'block w-[30px] h-[30px] lg:w-[40px] lg:h-[40px] object-contain hover:scale-125 transition-all duration-200',
          classImg,
        )}
        src={srcImg}
        alt=""
      />
      <p className=" tracking-widest font-semibold text-[.625rem] md:text-xs">
        {skill}
      </p>
    </div>
  );
};
