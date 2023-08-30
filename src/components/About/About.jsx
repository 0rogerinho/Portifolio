import React from 'react';
import Typewriter from 'typewriter-effect';
import { Element } from 'react-scroll';
import {
  AiFillGithub,
  AiFillBehanceCircle,
  AiOutlineInstagram,
  AiOutlineLinkedin,
} from 'react-icons/ai';

const About = () => {
  return (
    <Element name="About">
      <div className="flex justify-between gap-12 xl:gap-0 pt-12 md:pt-20 xl:pt-[165px] px-[5%] xl:px-[8%] 2xl:px-[20%]">
        <section className=" md:w-[550px] xl:w-[600px] mt-[1.1875rem] flex flex-col gap-[1.8125rem] md:gap-[2.625rem]">
          <h1 className="md:text-2xl xl:text-3xl font-semibold font-Montserrat">
            <Typewriter
              options={{
                strings: ['Desenvolvedor Full Stack', 'Web Design', 'UI/UX'],
                autoStart: true,
                loop: true,
                delay: 75,
              }}
            />
          </h1>
          <article>
            <p className="text-sm md:text-xl tracking-wider font-Lato">
              Venho me dedicando todos os dias em programação. Desde o início,
              não houve um único dia em que não tenha continuado a aprender, com
              o objetivo de me tornar um desenvolvedor Full Stack excepcional.
              Meu foco é resolver problemas do mercado
            </p>
          </article>
          <a
            className="text-lg md:text-lg lg:text-3xl font-semibold font-Montserrat w-[6.4375rem] md:w-[8.4375rem] lg:w-[15.125rem] py-[.3125rem] md:py-[.4375rem] md:px-[3.375rem] lg:px-[6.0625rem] rounded-[3.125rem] lg:py-[.625rem] bg-gradient-to-t from-[#3C1B46] to-[#9C3C5A] transition-all duration-300 hover:scale-110"
            href="public/luanSilva.pdf"
            download
          >
            CV
          </a>
        </section>
        <div className=" flex items-center justify-between">
          <img className="hidden xl:block" src="avatarUser.png" alt="Luan" />
          <nav>
            <ul className="flex flex-col xl:mb-36 gap-5 md:gap-10 xl:gap-[4rem]">
              <li>
                <a href="https://github.com/0rogerinho" target="_blank">
                  <AiFillGithub className="cursor-pointer text-[1.375rem] md:text-3xl xl:text-[2.4375rem] hover:text-[#1EA6DB] transition-all duration-200 hover:scale-110" />
                </a>
              </li>
              <li>
                <a href="https://www.behance.net/luansilva99" target="_blank">
                  <AiFillBehanceCircle className="cursor-pointer text-[1.375rem] md:text-3xl xl:text-[2.4375rem] hover:text-[#1EA6DB] transition-all duration-200 hover:scale-110" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/devrogerinho/"
                  target="_blank"
                >
                  <AiOutlineInstagram className="cursor-pointer text-[1.375rem] md:text-3xl xl:text-[2.4375rem] hover:text-[#1EA6DB] transition-all duration-200 hover:scale-110" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/luan-silva-a1a88225a/"
                  target="_blank"
                >
                  <AiOutlineLinkedin className="cursor-pointer text-[1.375rem] md:text-3xl xl:text-[2.4375rem] hover:text-[#1EA6DB] transition-all duration-200 hover:scale-110" />
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </Element>
  );
};

export default About;
