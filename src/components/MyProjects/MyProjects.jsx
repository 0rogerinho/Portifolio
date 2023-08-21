import { Project } from './Project';
import { Element } from 'react-scroll';

const MyProjects = () => {
  return (
    <Element name="Projects">
      <div className=" w-full my-[70px] flex flex-col gap-[1.875rem] lg:gap-28 xl:gap-48 px-[5%] xl:px-[8%] 2xl:px-[20%]">
        <Project
          title="Git Info Search"
          text="É um site que simplifica a busca e visualização de informações de usuários no GitHub, fácil de usar, onde os usuários podem simplesmente digitar o nome de usuário do GitHub que desejam pesquisar. Em segundos, o GitInfoSearch varre a vasta base de dados do GitHub e fornece uma visão detalhada das informações públicas disponíveis sobre o perfil do usuário pesquisado.
"
          srcImg="searchGithub.png"
          link="https://github-user-search-app-nu.vercel.app/"
        />
        <Project
          title="Mined Just Store"
          text="A Mined Just Store é um e-commerce voltado para a moda feminina, foi meticulosamente projetada para proporcionar uma experiência de compra única e envolvente.
"
          srcImg="ecommerceProject.png"
          flexReverse="lg:flex-row-reverse"
          itemsPosition="end"
          link="https://mined-development-company.github.io/E-commerce-FRONT/"
        />
        <Project
          title="TODO list"
          text="Desenvolvido com o propósito de simplificar a organização de tarefas, o Todu List apresenta um design atraente que oferece uma experiência de usuário excepcional.
"
          srcImg="todoProject.png"
          flexReverse="lg:flex-row"
          itemsPosition="end"
          link="https://todorogerinho.vercel.app/"
        />
      </div>
    </Element>
  );
};

export default MyProjects;
