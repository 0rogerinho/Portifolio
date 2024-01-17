import React from 'react';
// Layout
import { BaseLayout } from '../../layout';
import { Input } from '../form/Input';
import { TextArea } from '../form/TextArea';

export const CallToAction = () => {
  return (
    <div className="w-full h-1/2 xg:h-[956px] bg-[url(/background/desktop.png)] bg-center bg-cover">
      <BaseLayout className="justify-between gap-10 py-8 space-y-5 lg:flex mb-36">
        <div className="space-y-1 lg:mt-[26px] lg:w-[1000px]">
          <h2 className="text-lg font-semibold md:text-3xl">Como Trabalho</h2>
          <iframe
            className="w-full h-[200px] rounded-lg m-auto min-[500px]:h-[400px] md:h-[400px] lg:h-[300px]"
            src="https://www.youtube.com/embed/m87Gm5nHDrU?si=iJv8QE8u31yBufcM"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <p className="hidden pt-2 text-[1.075rem] tracking-wider text-justify lg:block opacity-[95%]">
            Se você tem uma ideia e deseja desenvolvê-la, encontrou a pessoa
            certa para ajudar. <br /> <br />
            Meu nome é <strong>Luan Silva</strong>, sou desenvolvedor{' '}
            <strong>Full Stack e web designer</strong>. Com minhas habilidades,
            posso criar um layout de{' '}
            <strong>
              <a
                href="https://altimus.com.br/site-atrativo-para-revenda/#:~:text=Um%20site%20intuitivo%20e%20esteticamente,e%20pre%C3%A7os%2C%20cada%20detalhe%20conta."
                className="underline"
              >
                site atraente
              </a>
            </strong>{' '}
            para seus clientes, transformando-o em um{' '}
            <strong>
              <a
                href="https://www.webshare.com.br/blog/importancia-site-responsivo/#:~:text=Os%20sites%20responsivos%20contribuem%20para,para%20acessar%20sites%20n%C3%A3o%20responsivos."
                className="underline"
              >
                {' '}
                site responsivo e funcional
              </a>
            </strong>
            . Além disso, busco desenvolver de forma que o código seja
            organizado e fácil de entender. Então, que tal colocarmos essa ideia
            em prática? Conte-me qual é a sua ideia preenchendo o formulário ao
            lado, e vamos transformá-la em realidade juntos.
          </p>
        </div>
        <form
          className="w-full space-y-2"
          action="https://formsubmit.co/luansilvapmp@gmail.com"
          method="POST"
        >
          <h1 className="text-lg font-semibold md:text-3xl">
            Entre em contato
          </h1>
          <div className="p-4 bg-gradient-to-tl from-[#000514D4] to-[#010617] rounded-[10px] space-y-4 md:p-9">
            <Input required label="Nome" type="text" name="name" />
            <Input required label="Email" type="email" name="email" />
            <TextArea
              required
              name="description"
              label="Descrição (opcional)"
              type="text"
              className="h-40 md:h-64"
            />

            <button
              type="submit"
              className="w-full py-2.5 bg-gradient-to-r from-[#913857] to-[#56244B] rounded-md font-semibold text-lg"
            >
              Enviar
            </button>
          </div>
        </form>
      </BaseLayout>
    </div>
  );
};
