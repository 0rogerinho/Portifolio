//components
import { About, CallToAction, Header, MyProjects, Skill } from '../components';
import { Freelances } from '../components/freelas/Freelas';

const Page = () => {
  return (
    <>
      <div className="w-full h-1/2 xg:h-[956px] bg-[url(/background/desktop.png)]">
        <Header />
        <About />
        <Skill />
      </div>
      <MyProjects />
      <Freelances />
      <CallToAction />
    </>
  );
};

export default Page;
