import React from 'react';
import { MainMenu, MenuMobile } from './MainMenu';

const Header = () => {
  return (
    <header className="w-full relative px-[1.25rem] py-[9px] md:px-11 xl:px-[123.5px]  ">
      <div className="w-full flex justify-between items-center py-[.5625rem]">
        <h1 className="text-lg md:text-[1.875rem] xl:text-[2.5rem] font-semibold">
          0rogerinho
        </h1>
        <MainMenu />
        <MenuMobile />
      </div>
    </header>
  );
};

export default Header;
