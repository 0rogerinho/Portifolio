export interface ICustomLink {
  title: string;
  target: string;
}

export interface IMainMenu {
  openMenu: boolean;
  handleOpenMenu: () => void;
  scrollBackground: boolean;
}
