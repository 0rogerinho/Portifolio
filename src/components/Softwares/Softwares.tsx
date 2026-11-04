import { useState } from 'react';
import { Element } from 'react-scroll';
import { BaseLayout } from '../../layout';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../ui/carousel';
import CardSoftware from './CardSoftware';
import SoftwareModal from './SoftwareModal';
import { ISoftware } from './@types';

const data: ISoftware[] = [
  {
    id: 1,
    name: 'Kafraverse Launcher',
    description:
      'O Kafraverse Launcher é um aplicativo desktop feito para centralizar a experiência do jogador: atualize o game, acompanhe novidades e eventos, e inicie a partida em um só lugar.\n\nAlém do gerenciamento do jogo, o launcher permite aplicar correções nos arquivos, configurar GRFs, criar e gerenciar contas (criar, logar, compartilhar e transferir), e consultar o mercado de itens com busca e filtros.',
    cover: '/softwares/kafraverse-launcher/home.jpg',
    images: [
      '/softwares/kafraverse-launcher/home.jpg',
      '/softwares/kafraverse-launcher/settings.png',
      '/softwares/kafraverse-launcher/updates.png',
      '/softwares/kafraverse-launcher/market.png',
    ],
    platform: 'Windows',
    version: '1.0.1',
    downloads: [
      {
        label: 'Baixar instalador',
        url: 'https://drive.google.com/file/d/1PPP72Fvvv7S6_7T34DbtpdWUCxU1ePeb/view?usp=sharing',
      },
      {
        label: 'Executável sem instalar',
        url: 'https://drive.google.com/file/d/1S9ZU9KfJiNatBZcVwHB1UvjIYgmhKd8m/view?usp=sharing',
      },
    ],
    technologies: [
      { skill: 'Electron', img: '/skills/electron.png' },
      { skill: 'React', img: '/skills/react.svg' },
      { skill: 'TypeScript', img: '/skills/ts.svg' },
    ],
  },
  {
    id: 2,
    name: 'booChat',
    description:
      'O booChat é um software feito para quem transmite live: conecte um ou mais chats de serviços de streaming (Twitch, Kick, YouTube e TikTok) e acompanhe tudo ao mesmo tempo em uma janela flutuante.\n\nA overlay fica por cima do jogo ou de qualquer outra ferramenta, com fundo transparente e eventos de clique desativados — assim você joga e lê o chat sem atrapalhar a partida. Ideal para quem tem apenas um monitor e não quer depender de uma segunda tela ou do celular.',
    cover: '/softwares/boochat/overlay-game.png',
    images: [
      '/softwares/boochat/overlay-game.png',
      '/softwares/boochat/settings.png',
      '/softwares/boochat/obs.jpg',
    ],
    platform: 'Windows / macOS / Linux',
    version: '1.2.3',
    downloads: [
      {
        label: 'Baixar booChat',
        url: 'https://github.com/0rogerinho/boo-chat-tw/releases#release-1.2.3',
      },
    ],
    technologies: [
      { skill: 'Electron', img: '/skills/electron.png' },
      { skill: 'React', img: '/skills/react.svg' },
      { skill: 'TypeScript', img: '/skills/ts.svg' },
    ],
  },
  {
    id: 3,
    name: 'UpdateVersion',
    description:
      'O UpdateVersion é um software desktop para gerar atualizações de jogos: compara a versão anterior com a mais recente e gera um novo arquivo apenas com a diferença, evitando que o jogador precise baixar o game inteiro de novo.\n\nTambém permite gerenciar versões, analisar downloads e publicações, e lançar notificações de atualizações e novidades para os jogadores.',
    cover: '/softwares/version-manager/painel.png',
    images: [
      '/softwares/version-manager/painel.png',
      '/softwares/version-manager/nova-versao.png',
      '/softwares/version-manager/versoes.png',
      '/softwares/version-manager/publicar.png',
      '/softwares/version-manager/notificacoes.png',
    ],
    platform: 'Windows',
    downloads: [
      {
        label: 'Baixar UpdateVersion',
        url: 'https://drive.google.com/file/d/1soeYOWhxVDcHiPSWoeZvBi4vn40iHdUX/view?usp=sharing',
      },
    ],
    technologies: [
      { skill: 'Electron', img: '/skills/electron.png' },
      { skill: 'React', img: '/skills/react.svg' },
      { skill: 'TypeScript', img: '/skills/ts.svg' },
    ],
  },
];

export const Softwares = () => {
  const [selected, setSelected] = useState<ISoftware | null>(null);

  return (
    <BaseLayout className="w-full pb-32 space-y-2 xl:space-y-6">
      <Element name="Softwares">
        <h1 className="text-2xl font-semibold xl:text-6xl">Softwares</h1>

        <Carousel
          opts={{
            align: 'start',
          }}
          className="w-full mt-4"
        >
          <CarouselContent className="gap-2 flex items-center justify-center">
            {data.map((software) => (
              <CarouselItem
                key={software.id}
                className="basis-[100%] min-[375px]:basis-[70%] sm:basis-[42%] lg:basis-[32%]"
              >
                <CardSoftware
                  name={software.name}
                  cover={software.cover}
                  platform={software.platform}
                  technologies={software.technologies}
                  onClick={() => setSelected(software)}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="max-lg:left-0 max-lg:bg-[rgba(1,06,23,0.9)]" />
          <CarouselNext className="max-lg:right-0 max-lg:bg-[rgba(1,06,23,0.9)]" />
        </Carousel>
      </Element>

      {selected && (
        <SoftwareModal software={selected} onClose={() => setSelected(null)} />
      )}
    </BaseLayout>
  );
};
