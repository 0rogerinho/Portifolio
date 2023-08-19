import React from 'react';
import Typewriter from 'typewriter-effect';
import {
  AiFillGithub,
  AiOutlineWhatsApp,
  AiOutlineInstagram,
  AiOutlineLinkedin,
} from 'react-icons/ai';

const About = () => {
  return (
    <div className="flex justify-between px-[1.1875rem] gap-12 md:px-11 xl:px-[7.5625rem] xl:mt-[6.25rem] xl:gap-0">
      <section className=" md:w-[550px] xl:w-[700px] mt-[1.1875rem] flex flex-col gap-[1.8125rem] md:gap-[2.625rem]">
        <h1 className="text-[1.25rem] md:text-3xl xl:text-4xl font-semibold font-Montserrat">
          <Typewriter
            className="text-[1.25rem] md:text-3xl xl:text-3xl font-semibold font-Montserrat"
            options={{
              strings: ['Eu sou desenvolvedor Front End'],
              autoStart: true,
              loop: true,
              delay: 75,
            }}
          />
        </h1>
        <article>
          <p className="text-sm md:text-xl tracking-wider font-Lato">
            Há 9 meses, venho me dedicando todos os dias em programação. Desde o
            início, não houve um único dia em que não tenha continuado a
            aprender, com o objetivo de me tornar um desenvolvedor Full Stack
            excepcional. Meu foco é resolver problemas do mercado
          </p>
        </article>
        <button className="w-[6.4375rem] md:w-[8.4375rem] lg:w-[15.125rem] py-[.3125rem] md:py-[.4375rem] md:px-[3.375rem] lg:px-[6.0625rem] rounded-[3.125rem] lg:py-[.625rem] bg-gradient-to-t from-[#3C1B46] to-[#9C3C5A] transition-all duration-300 hover:scale-110">
          <a
            className="text-lg md:text-lg lg:text-3xl font-semibold font-Montserrat"
            href="#"
          >
            CV
          </a>
        </button>
      </section>
      <div className=" flex items-center justify-between">
        <img className="hidden xl:block" src="avatarUser.png" alt="Luan" />
        <nav>
          <ul className="flex flex-col xl:mb-36 gap-5 md:gap-10 xl:gap-[4rem]">
            <li>
              <a href="#">
                <AiFillGithub className="cursor-pointer text-[1.375rem] md:text-3xl xl:text-[2.4375rem] hover:text-[#1EA6DB] transition-all duration-200 hover:scale-110" />
              </a>
            </li>
            <li>
              <a href="#">
                <AiOutlineWhatsApp className="cursor-pointer text-[1.375rem] md:text-3xl xl:text-[2.4375rem] hover:text-[#1EA6DB] transition-all duration-200 hover:scale-110" />
              </a>
            </li>
            <li>
              <a href="#">
                <AiOutlineInstagram className="cursor-pointer text-[1.375rem] md:text-3xl xl:text-[2.4375rem] hover:text-[#1EA6DB] transition-all duration-200 hover:scale-110" />
              </a>
            </li>
            <li>
              <a href="#">
                <AiOutlineLinkedin className="cursor-pointer text-[1.375rem] md:text-3xl xl:text-[2.4375rem] hover:text-[#1EA6DB] transition-all duration-200 hover:scale-110" />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default About;
