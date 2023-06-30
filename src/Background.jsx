import React from 'react';
import Header from './components/Header/Header';
import About from './components/About/About';
import Skill from './components/Skill/Skill';

const Background = () => {
  return (
    <div className="w-full h-1/2 xg:h-[956px] bg-[url(background.png)]">
      <Header />
      <About />
      <Skill />
    </div>
  );
};

export default Background;
