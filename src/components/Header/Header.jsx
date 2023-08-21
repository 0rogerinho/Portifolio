import React, { useState, useEffect } from 'react';
import { MainMenu, MenuMobile } from './MainMenu';
import { Element } from 'react-scroll';
const Header = () => {
  const [scrollBackground, setScrollBackground] = useState(false);

  const handleScroll = () => {
    setScrollBackground(window.scrollY > 50);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const headerClass = ` ${
    scrollBackground
      ? 'w-[80%] rounded-full border border-white m-auto inset-x-0 top-4 bg-[#100F27] bg-opacity-90'
      : 'w-full'
  }`;

  return (
    <Element name="Home">
      <header
        className={`${headerClass} z-50 left transition-all duration-700 fixed py-[9px] px-[5%] xl:px-[8%] 2xl:px-[20%]`}
      >
        <div className="w-full flex justify-between items-center py-[.5625rem]">
          <h1 className="text-lg md:text-xl xl:text-4xl font-semibold">
            Luan da Silva
          </h1>
          <MainMenu />
          <MenuMobile />
        </div>
      </header>
    </Element>
  );
};

export default Header;
