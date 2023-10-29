import { Project } from './Project';
import { Element } from 'react-scroll';

const dataSkills = [
  {
    id: '1',
    skill: 'MongoDB',
    img: '/mongoDB.svg',
  },
  {
    id: '2',
    skill: 'NestJS',
    img: '/nestJS.svg',
  },
  {
    id: '3',
    skill: 'React',
    img: '/react.svg',
  },
  {
    id: '4',
    skill: 'NodeJS',
    img: '/nodeJS.svg',
  },
  {
    id: '5',
    skill: 'Material UI',
    img: '/materialUI.svg',
  },
  {
    id: '6',
    skill: 'javaScript',
    img: '/js.svg',
  },
  {
    id: '7',
    skill: 'express',
    img: '/expressJS.svg',
  },
  {
    id: '8',
    skill: 'HTML',
    img: '/html.svg',
  },
  {
    id: '9',
    skill: 'CSS',
    img: '/css.svg',
  },
  {
    id: '9',
    skill: 'Tailwind',
    img: '/tailwind.svg',
  },
];

const githubInfoSearch = [
  {
    id: '2',
    skill: 'React',
    img: '/react.svg',
  },
  {
    id: '1',
    skill: 'javaScript',
    img: '/js.svg',
  },
  {
    id: '3',
    skill: 'Tailwind',
    img: '/tailwind.svg',
  },
];
const ecommerce = [
  {
    id: '6',
    skill: 'javaScript',
    img: '/js.svg',
  },
  {
    id: '8',
    skill: 'HTML',
    img: '/html.svg',
  },
  {
    id: '9',
    skill: 'CSS',
    img: '/css.svg',
  },
];

const todo = [
  {
    id: '1',
    skill: 'MongoDB',
    img: '/mongoDB.svg',
  },
  {
    id: '3',
    skill: 'React',
    img: '/react.svg',
  },
  {
    id: '6',
    skill: 'javaScript',
    img: '/js.svg',
  },
  {
    id: '7',
    skill: 'express',
    img: '/expressJS.svg',
  },
  {
    id: '9',
    skill: 'Tailwind',
    img: '/tailwind.svg',
  },
];

const MyProjects = () => {
  return (
    <Element name="Projects">
      <div className=" w-full my-[70px] flex flex-col px-[5%] xl:px-[8%] 2xl:px-[20%]">
        <h1 className="text-2xl md:text-6xl font-semibold mb-12">Projects</h1>

        <Project
          title="Git Info Search"
          text="É um site que simplifica a busca e visualização de informações de usuários no GitHub, fácil de usar, onde os usuários podem simplesmente digitar o nome de usuário do GitHub que desejam pesquisar. Em segundos, o GitInfoSearch varre a vasta base de dados do GitHub e fornece uma visão detalhada das informações públicas disponíveis sobre o perfil do usuário pesquisado.
"
          srcImg="searchGithub.png"
          link="https://github-user-search-app-phi-five.vercel.app/"
          skill={githubInfoSearch}
        />
        <Project
          title="Mined Just Store"
          text="A Mined Just Store é um e-commerce voltado para a moda feminina, foi meticulosamente projetada para proporcionar uma experiência de compra única e envolvente.
"
          srcImg="ecommerceProject.png"
          flexReverse="lg:flex-row-reverse"
          itemsPosition="end"
          link="https://mined-development-company.github.io/E-commerce-FRONT/"
          skill={ecommerce}
        />
        <Project
          title="TODO list"
          text="Desenvolvido com o propósito de simplificar a organização de tarefas, o Todu List apresenta um design atraente que oferece uma experiência de usuário excepcional.
"
          srcImg="todoProject.png"
          flexReverse="lg:flex-row"
          itemsPosition="end"
          link="https://todorogerinho.vercel.app/"
          skill={todo}
        />
      </div>
    </Element>
  );
};

export default MyProjects;
