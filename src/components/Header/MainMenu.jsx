import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';

const nav = ['Home', 'About', 'Skill', 'Projects'];

const CustomLink = ({ title, target }) => {
  return (
    <li className="group">
      <ScrollLink
        to={target}
        smooth={true}
        duration={500}
        className="cursor-pointer"
      >
        {title}
      </ScrollLink>
      <span className="block m-auto w-1 h-1 rounded-lg bg-white group-hover:w-full transition-all duration-300"></span>
    </li>
  );
};

export const MainMenu = () => {
  return (
    <nav className="hidden md:block">
      <ul className="flex gap-[3.125rem] text-[1.25rem] md:text-base lg:text-lg font-semibold cursor-pointer">
        {nav.map((title) => {
          return <CustomLink key={title} title={title} target={title} />;
        })}
      </ul>
    </nav>
  );
};

export const MenuMobile = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleClickMenu = (event) => {
    event.preventDefault();
    setOpenMenu(!openMenu);
  };

  return (
    <nav className="md:hidden">
      <div onClick={handleClickMenu} className="flex flex-col gap-[.1875rem]">
        <div className="w-[1.0625rem] h-[.125rem] bg-white"></div>
        <div className="w-[1.0625rem] h-[.125rem] bg-white"></div>
        <div
          className={`w-[1.0625rem] h-[.125rem] bg-white transition duration-700 ${
            openMenu ? '-rotate-45 mt-[.3125rem]' : ''
          }`}
        ></div>
      </div>
      <div
        className={`w-[5.875rem] p-[1.0625rem] absolute right-10 rounded-md rounded-tr-none bg-gradient-to-t to-[#000A1D] from-[rgb(0,0,0,0.7)] transition:block duration-700 ${
          openMenu ? 'block' : 'hidden'
        }`}
      >
        <ul className="flex flex-col items-center gap-[1.5625rem] text-[.9375rem] font-semibold">
          <li>Home</li>
          <li>About</li>
          <li>Skill</li>
          <li>Projects</li>
        </ul>
      </div>
    </nav>
  );
};
