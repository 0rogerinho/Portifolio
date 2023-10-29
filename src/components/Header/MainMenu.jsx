import React from 'react';
//components
import { CustomLink } from './CustomLink';
import { UserContext } from './Header';

export const nav = ['About', 'Skills', 'Projects'];

export const MainMenu = () => {
  const { openMenu, setOpenMenu } = React.useContext(UserContext);
  const { scrollBackground } = React.useContext(UserContext);

  const handleClickMenu = (event) => {
    event.preventDefault();
    setOpenMenu(!openMenu);
  };

  const headerClass = `${scrollBackground ? 'hidden' : 'block'}`;

  return (
    <>
      <nav className="hidden md:block">
        <ul className="flex gap-[50px] text-[1.25rem] md:text-base lg:text-lg font-semibold cursor-pointer">
          {nav.map((title) => {
            return <CustomLink key={title} title={title} target={title} />;
          })}
        </ul>
      </nav>
      {/*MenuMobile*/}
      <nav className={`md:hidden ${headerClass}`}>
        <div
          onClick={handleClickMenu}
          className="group flex flex-col gap-[.1875rem]"
        >
          <div className="w-[1.0625rem] h-[.125rem] bg-white"></div>
          <div className="w-[1.0625rem] h-[.125rem] bg-white"></div>
          <div
            className={`w-[1.0625rem] h-[.125rem] bg-white group-transition duration-500 ${
              openMenu ? '-rotate-90 mt-2 ml-2' : ''
            }`}
          ></div>
        </div>
        <ul
          className={`flex flex-col items-center gap-[1.5625rem] text-[.9375rem] font-semibold w-[5.875rem] p-[1.0625rem] absolute right-[9%] rounded-md rounded-tr-none bg-gradient-to-t to-[#000A1D] from-[rgb(0,0,0,0.7)] duration-700 ${
            openMenu ? 'block' : 'hidden'
          }`}
        >
          {nav.map((title) => {
            return <CustomLink key={title} title={title} target={title} />;
          })}
        </ul>
      </nav>
      {/*Links Menu Mobile*/}
      <nav
        onClick={handleClickMenu}
        className={`group md:hidden ${
          scrollBackground ? 'block' : 'hidden'
        } flex flex-col gap-[.1875rem]`}
      >
        <div className="w-[1.0625rem] h-[.125rem] bg-white"></div>
        <div className="w-[1.0625rem] h-[.125rem] bg-white"></div>
        <div className="w-[1.0625rem] h-[.125rem] bg-white"></div>
      </nav>
    </>
  );
};
