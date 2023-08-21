import React from 'react';
import { MainMenu, MenuMobile } from './MainMenu';

const Header = () => {
  return (
    <header className="w-full relative py-[9px] px-[5%] xl:px-[8%] 2xl:px-[20%]  ">
      <div className="w-full flex justify-between items-center py-[.5625rem]">
        <h1 className="text-lg md:text-[1.875rem] xl:text-4xl font-semibold">
          Luan da silva
        </h1>
        <MainMenu />
        <MenuMobile />
      </div>
    </header>
  );
};

export default Header;
