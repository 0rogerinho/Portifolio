//react scroll
import { Element } from 'react-scroll';
//components
import { Project } from './Project';
// Layouts
import { BaseLayout } from '../../layout';

const data = [
  {
    title: 'Mined Just Store',
    text: 'A Mined Just Store é um e-commerce voltado para a moda feminina, foi meticulosamente projetada para proporcionar uma experiência de compra única e envolvente.',
    srcImg: '/projects/ecommerce.png',
    link: 'https://mined-development-company.github.io/E-commerce-FRONT/',
    time: '05/02/2023, 3 meses de estudo',
    skill: [
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
    ],
  },
  {
    title: 'Git Info Search',
    text: 'É um site que simplifica a busca e visualização de informações de usuários no GitHub, fácil de usar, onde os usuários podem simplesmente digitar o nome de usuário do GitHub que desejam pesquisar. Em segundos, o GitInfoSearch varre a vasta base de dados do GitHub e fornece uma visão detalhada das informações públicas disponíveis sobre o perfil do usuário pesquisado.',
    srcImg: '/projects/searchGithub.png',
    link: 'https://github-user-search-app-phi-five.vercel.app/',
    time: '12/04/2023, 6 meses de estudo',
    skill: [
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
    ],
  },
  {
    title: 'Kanban',
    text: 'Desenvolvimento de um Kanban simples sem o uso de funcionalidades nativas de "drag-and-drop" do HTML ou de bibliotecas externas, com o objetivo de aprofundar o entendimento sobre o funcionamento de um sistema Kanban',
    srcImg: '/projects/kanban.png',
    time: '08/11/2024, 2 anos de estudos',
    link: 'https://rogerinho-kanban.vercel.app/',
    skill: [
      {
        id: 1,
        skill: 'React',
        img: '/skills/react.svg',
      },
      {
        id: 2,
        skill: 'TypeScript',
        img: '/skills/ts.svg',
      },
      {
        id: 2,
        skill: 'Tailwind',
        img: '/skills/tailwind.svg',
      },
    ],
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

          {data.map((item, index) => (
            <Project
              key={index}
              flexReverse={
                index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'
              }
              {...item}
            />
          ))}
        </div>
      </Element>
    </BaseLayout>
  );
};
