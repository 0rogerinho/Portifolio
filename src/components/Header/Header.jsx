import React, { useState, useEffect, createContext } from 'react';
import { CustomLink, MainMenu, nav } from './MainMenu';
import { Element } from 'react-scroll';

export const UserContext = createContext();

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [scrollBackground, setScrollBackground] = useState(false);

  const handleScroll = () => {
    setScrollBackground(window.scrollY > 10);
  };

  useEffect(() => {
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
    <Element name="About">
      <UserContext.Provider value={{ openMenu, setOpenMenu, scrollBackground }}>
        <header
          className={`z-50 transition-all fixed rounde duration-700 m-auto inset-x-0 py-[9px] px-[5%]  xl:px-[8%] ${headerClass}`}
        >
          <div className="w-full flex justify-between items-center py-[.5625rem]">
            <h1 className="text-lg md:text-xl xl:text-3xl font-semibold">
              Luan Silva
            </h1>
            <MainMenu />
          </div>
          <ul
            className={`flex flex-col items-center gap-[1.5625rem] text-[.9375rem] font-semibold w-[5.875rem] p-[1.0625rem] right-10 duration-700 ${
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
  );
};

export default Header;
