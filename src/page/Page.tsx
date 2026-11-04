//components
import { About, CallToAction, Header, MyProjects, Skill } from '../components';
import { Freelances } from '../components/freelas/Freelas';
import { Softwares } from '../components/Softwares/Softwares';

const Page = () => {
  return (
    <>
      <div className="w-full h-1/2 xg:h-[956px] bg-[url(/background/desktop.png)]">
        <Header />
        <About />
        <Skill />
      </div>
      <MyProjects />
      <Softwares />
      <Freelances />
      <CallToAction />
    </>
  );
};

export default Page;
