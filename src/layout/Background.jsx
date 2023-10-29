//components
import { Skill, Header, About } from '../components/';

export const Background = () => {
  return (
    <div className="w-full h-1/2 xg:h-[956px] bg-[url(/background/desktop.png)] ">
      <Header />
      <About />
      <Skill />
    </div>
  );
};
