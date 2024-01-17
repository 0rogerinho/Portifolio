import React from 'react';
//react scroll
import { Element } from 'react-scroll';
//layout
import { BaseLayout } from '../../layout/BaseLayout';
//components
import { MainMenu, nav } from './MainMenu';
import { CustomLink } from './CustomLink';

export const UserContext = React.createContext();

export const Header = () => {
  const [openMenu, setOpenMenu] = React.useState(false);
  const [scrollBackground, setScrollBackground] = React.useState(false);

  const handleScroll = () => {
    setScrollBackground(window.scrollY > 10);
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const headerClass = ` ${
    scrollBackground
      ? `w-[80%] flex rounded-[2rem] items-center justify-center flex-col top-4 border border-white border-opacity-50 bg-[#100F27] bg-opacity-90 2xl:w-[50%] 2xl:px-[2%]`
      : 'w-full top-0 border border-black border-opacity-0 2xl:px-[20%]'
  }`;

  return (
    <BaseLayout>
      <Element name="Sobre">
        <UserContext.Provider
          value={{ openMenu, setOpenMenu, scrollBackground }}
        >
          <header
            className={`z-50 transition-all fixed rounde duration-700 m-auto inset-x-0 py-[9px] px-[5%]  xl:px-[8%] ${headerClass}`}
          >
            <div className="w-full flex justify-between items-center py-[9px]">
              <h1 className="text-lg font-semibold md:text-xl xl:text-3xl">
                Luan Silva
              </h1>
              <MainMenu />
            </div>
            <ul
              className={`flex flex-col items-center gap-[25px] text-[.9375rem] font-semibold w-[94px] p-[17px] right-10 duration-700 ${
                openMenu ? 'block md:hidden' : 'hidden'
              } ${scrollBackground ? 'opacity-100' : 'hidden'}`}
            >
              {nav.map((title) => {
                return <CustomLink key={title} title={title} target={title} />;
              })}
            </ul>
          </header>
        </UserContext.Provider>
      </Element>
    </BaseLayout>
  );
};
