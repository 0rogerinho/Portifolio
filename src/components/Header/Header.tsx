import React from 'react';
//react scroll
import { Element } from 'react-scroll';
//layout
import { BaseLayout } from '../../layout';
//components
import { MainMenu, nav } from './MainMenu';
import { CustomLink } from './CustomLink';
// libs
import { cn } from '../../lib/utils';

export const Header = () => {
  const [openMenu, setOpenMenu] = React.useState<boolean>(false);
  const [scrollBackground, setScrollBackground] =
    React.useState<boolean>(false);

  const handleScroll = () => {
    setScrollBackground(window.scrollY > 10);
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <BaseLayout>
      <Element name="Sobre">
        <header
          className={cn(
            'z-50 transition-all fixed duration-700 m-auto inset-x-0 w-full top-0 border border-black border-opacity-0',
            scrollBackground &&
              'w-[80%] flex rounded-[2rem] items-center justify-center flex-col top-4 border border-white border-opacity-50 bg-[#100F27] bg-opacity-90 2xl:w-[50%] 2xl:px-[2%]',
          )}
        >
          <div className="container py-[9px] px-[5%] xl:px-[6%] w-full top-0 border border-black border-opacity-0 m-auto">
            <div className="w-full flex justify-between items-center py-[9px]">
              <h1 className="text-lg font-semibold md:text-xl xl:text-3xl">
                Luan Silva
              </h1>
              <MainMenu
                handleOpenMenu={() => {
                  setOpenMenu(!openMenu);
                }}
                openMenu={openMenu}
                scrollBackground={scrollBackground}
              />
            </div>
            <ul
              className={cn(
                'w-full flex-col justify-center items-center gap-[25px] text-[.9375rem] font-semibold p-[17px] right-10 duration-700 hidden',
                openMenu && 'flex md:hidden',
                scrollBackground ? 'opacity-100' : 'hidden',
              )}
            >
              {nav.map((title) => {
                return <CustomLink key={title} title={title} target={title} />;
              })}
            </ul>
          </div>
        </header>
      </Element>
    </BaseLayout>
  );
};
