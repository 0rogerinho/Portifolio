import Marquee from 'react-fast-marquee';
import { Technologies } from '../Skill/Technologies';
import { ICardSoftware } from './@types';

const CardSoftware = ({
  name,
  cover,
  platform,
  technologies,
  onClick,
}: ICardSoftware) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="w-full text-left bg-[url('/background/desktop.png')] border border-[rgba(255,_255,_255,_0.5)] rounded-2xl p-3 transition-all duration-300 hover:border-white/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
    >
      <div className="mb-3 flex items-center justify-center overflow-hidden rounded-xl bg-black/40">
        <img
          className="block w-full h-auto max-h-[160px] md:max-h-[220px] lg:max-h-[200px] xl:max-h-[240px] 2xl:max-h-[270px] object-contain transition-all duration-500 hover:scale-105"
          src={cover}
          alt={name}
        />
      </div>
      <div className="flex flex-row items-center gap-1 mt-3">
        <h3 className="text-base font-semibold">Nome:</h3>
        <p className="text-sm opacity-80 line-clamp-1">{name}</p>
      </div>
      <div className="flex flex-row items-center gap-1 mt-3">
        <h3 className="text-base font-semibold">Plataforma:</h3>
        <p className="text-sm opacity-80 line-clamp-1">{platform}</p>
      </div>
      <div className="flex flex-col items-center gap-2 mt-2 min-[400px]:flex-row">
        <h3 className="hidden lg:block font-semibold">Stack:</h3>
        <Marquee
          autoFill
          speed={30}
          className="flex items-center justify-center w-full gap-16"
        >
          {technologies.map(({ img, skill }) => (
            <Technologies
              key={skill}
              classDiv="ml-1 min-[400px]:ml-0.5 lg:min-w-[20px]"
              classImg="w-[20px] h-[20px] lg:w-[25px] lg:h-[25px]"
              skill={skill}
              srcImg={img}
            />
          ))}
        </Marquee>
      </div>
    </button>
  );
};

export default CardSoftware;
