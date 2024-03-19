//typewriter-effect
import Typewriter from 'typewriter-effect';
//react scroll
import { Element } from 'react-scroll';
//reacts icons
import {
  AiFillGithub,
  AiFillBehanceCircle,
  AiOutlineInstagram,
  AiOutlineLinkedin,
} from 'react-icons/ai';
//components

import { SocialNetwork } from './SocialNetwork';
import { BaseLayout } from '../../layout';

const dataSocialNetwork = [
  {
    id: '1',
    rede: 'github',
    socialNetwork: 'https://github.com/0rogerinho',
    logo: <AiFillGithub />,
  },
  {
    id: '2',
    rede: 'behance',
    socialNetwork: 'https://www.behance.net/luansilva99',
    logo: <AiFillBehanceCircle />,
  },
  {
    id: '3',
    rede: 'instagram',
    socialNetwork: 'https://www.instagram.com/devrogerinho/',
    logo: <AiOutlineInstagram />,
  },
  {
    id: '4',
    rede: 'linkedin',
    socialNetwork: 'https://www.linkedin.com/in/luan-silva-a1a88225a/',
    logo: <AiOutlineLinkedin />,
  },
];

export const About = () => {
  return (
    <BaseLayout>
      <Element name="About">
        <div className="flex justify-between gap-12 xl:gap-0 pt-12 md:pt-20 xl:pt-[165px]">
          <section className=" md:w-[550px] xl:w-[600px] mt-[19px] flex flex-col gap-[29px] md:gap-[42px]">
            <h1 className=" md:text-3xl xl:text-[2.5rem] font-semibold">
              <Typewriter
                options={{
                  strings: ['Desenvolvedor Full Stack', 'Web Design', 'UI/UX'],
                  autoStart: true,
                  loop: true,
                  delay: 75,
                }}
              />
            </h1>

            <p className="max-w-[400px] md:max-w-[600px] text-xs text-[#D4D4D4] md:text-xl tracking-wide">
              Venho me dedicando todos os dias em programação. Desde o início,
              não houve um único dia em que não tenha continuado a aprender, com
              o objetivo de me tornar um desenvolvedor Full Stack excepcional.
              Meu foco é resolver problemas do mercado
            </p>

            <a
              className="text-lg text-center font-semibold font-Montserrat md:text-lg lg:text-3xl  w-[103px] md:w-[135px] lg:w-[242px] py-[5px] md:py-[7px] md:px-[54px] lg:px-[97px] rounded-[50px] lg:py-[10px] bg-gradient-to-t from-[#3C1B46] to-[#9C3C5A] transition-all duration-300 hover:scale-110 xl:mt-4"
              href="https://drive.google.com/file/d/1PlRNp3wQR5uFKkgELkV6BQLKRmL6EGKP/view?usp=sharing"
              target="_blank"
            >
              CV
            </a>
          </section>
          <div className="flex items-center justify-between ">
            <img className="hidden xl:block" src="/avatar.png" alt="Luan" />
            <nav>
              <ul className="flex flex-col xl:mb-36 gap-5 md:gap-10 xl:gap-[4rem]">
                {dataSocialNetwork.map(({ id, socialNetwork, logo }) => {
                  return (
                    <SocialNetwork key={id} link={socialNetwork} logo={logo} />
                  );
                })}
              </ul>
            </nav>
          </div>
        </div>
      </Element>
    </BaseLayout>
  );
};
