export interface ICard {
  title: string;
  content: string;
}

export interface ICardFreelas {
  img: string;
  name: string;
  service: string;
  language: { skill: string; img: string }[];
  link: string;
}
