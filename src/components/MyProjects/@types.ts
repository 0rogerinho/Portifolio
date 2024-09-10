export interface IProject {
  title: string;
  text: string;
  srcImg: string;
  itemsPosition?: string;
  time?: string;
  flexReverse?: string;
  link: string;
  skill: {
    id: number;
    skill: string;
    img: string;
  }[];
}
