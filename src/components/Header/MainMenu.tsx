//components
import { CustomLink } from './CustomLink';
// Types
import { IMainMenu } from './@types';
import { cn } from '../../lib/utils';

export const nav = ['Sobre', 'Habilidades', 'Projetos'];

export const MainMenu = ({
  openMenu,
  handleOpenMenu,
  scrollBackground,
}: IMainMenu) => {
  return (
    <>
      <nav className="hidden md:block">
        <ul className="w-full flex gap-[50px] text-[1.25rem] md:text-base lg:text-lg font-semibold cursor-pointer">
          {nav.map((title) => {
            return <CustomLink key={title} title={title} target={title} />;
          })}
        </ul>
      </nav>
      {/*MenuMobile*/}
      <nav className={cn(`md:hidden`, scrollBackground ? 'hidden' : 'block')}>
        <button
          onClick={() => handleOpenMenu()}
          className="group flex flex-col gap-[.1875rem]"
        >
          <div className="w-[1.0625rem] h-[.125rem] bg-white rounded-full"></div>
          <div className="w-[1.0625rem] h-[.125rem] bg-white rounded-full"></div>
          <div
            className={cn(
              'w-[1.0625rem] h-[.125rem] bg-white group-transition duration-500 rounded-full',
              openMenu && '-rotate-90 mt-2 ml-2',
            )}
          ></div>
        </button>
        <ul
          className={cn(
            'flex-col items-center gap-[1.5625rem] text-[.9375rem] font-semibold w-[110px] p-[1.0625rem] absolute right-[10%] top-9 rounded-md rounded-tr-none bg-gradient-to-t to-[#000A1D] from-[rgb(0,0,0,0.7)] duration-700 hidden',
            openMenu && 'flex',
          )}
        >
          {nav.map((title) => {
            return <CustomLink key={title} title={title} target={title} />;
          })}
        </ul>
      </nav>
      {/*Links Menu Mobile*/}
      <button
        onClick={handleOpenMenu}
        className={cn(
          'hidden group md:hidden flex-col gap-[.1875rem]',
          scrollBackground && 'flex',
        )}
      >
        <div className="w-[1.0625rem] h-[.125rem] bg-white rounded-full"></div>
        <div className="w-[1.0625rem] h-[.125rem] bg-white rounded-full"></div>
        <div className="w-[1.0625rem] h-[.125rem] bg-white rounded-full"></div>
      </button>
    </>
  );
};
