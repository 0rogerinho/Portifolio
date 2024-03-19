//react scroll
import { Element } from 'react-scroll';
//components
import { Project } from './Project';
// Layouts
import { BaseLayout } from '../../layout';

const githubInfoSearch = [
  {
    id: 2,
    skill: 'React',
    img: '/skills/react.svg',
  },
  {
    id: 1,
    skill: 'javaScript',
    img: '/skills/js.svg',
  },
  {
    id: 3,
    skill: 'Tailwind',
    img: '/skills/tailwind.svg',
  },
];
const ecommerce = [
  {
    id: 6,
    skill: 'javaScript',
    img: '/skills/js.svg',
  },
  {
    id: 8,
    skill: 'HTML',
    img: '/skills/html.svg',
  },
  {
    id: 9,
    skill: 'CSS',
    img: '/skills/css.svg',
  },
];
const todo = [
  {
    id: 1,
    skill: 'MongoDB',
    img: '/skills/mongoDB.svg',
  },
  {
    id: 3,
    skill: 'React',
    img: '/skills/react.svg',
  },
  {
    id: 6,
    skill: 'javaScript',
    img: '/skills/js.svg',
  },
  {
    id: 7,
    skill: 'express',
    img: '/skills/expressJS.svg',
  },
  {
    id: 9,
    skill: 'Tailwind',
    img: '/skills/tailwind.svg',
  },
];

export const MyProjects = () => {
  return (
    <BaseLayout>
      <Element name="Projetos">
        <div className=" w-full mt-[70px] flex flex-col items-center lg:items-start ">
          <h1 className="mb-8 text-3xl font-semibold text-center sm:mb-12 sm:text-start md:text-6xl">
            Projetos
          </h1>

          <Project
            title="Git Info Search"
            text="É um site que simplifica a busca e visualização de informações de usuários no GitHub, fácil de usar, onde os usuários podem simplesmente digitar o nome de usuário do GitHub que desejam pesquisar. Em segundos, o GitInfoSearch varre a vasta base de dados do GitHub e fornece uma visão detalhada das informações públicas disponíveis sobre o perfil do usuário pesquisado.
"
            srcImg="/projects/searchGithub.png"
            link="https://github-user-search-app-phi-five.vercel.app/"
            skill={githubInfoSearch}
          />
          <Project
            title="Mined Just Store"
            text="A Mined Just Store é um e-commerce voltado para a moda feminina, foi meticulosamente projetada para proporcionar uma experiência de compra única e envolvente.
"
            srcImg="/projects/ecommerce.png"
            flexReverse="lg:flex-row-reverse "
            itemsPosition="end"
            link="https://mined-development-company.github.io/E-commerce-FRONT/"
            skill={ecommerce}
          />
          <Project
            title="TODO list"
            text="Desenvolvido com o propósito de simplificar a organização de tarefas, o Todu List apresenta um design atraente que oferece uma experiência de usuário excepcional.
"
            srcImg="/projects/todo.png"
            flexReverse="lg:flex-row"
            itemsPosition="end"
            link="https://todo-rogerinho.vercel.app"
            skill={todo}
          />
        </div>
      </Element>
    </BaseLayout>
  );
};
