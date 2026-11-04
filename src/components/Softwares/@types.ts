export interface IDownloadOption {
  label: string;
  url: string;
}

export interface ISoftware {
  id: number;
  name: string;
  description: string;
  cover: string;
  images: string[];
  technologies: { skill: string; img: string }[];
  downloads: IDownloadOption[];
  platform: string;
  version?: string;
}

export interface ICardSoftware {
  name: string;
  cover: string;
  platform: string;
  technologies: { skill: string; img: string }[];
  onClick: () => void;
}

export interface ISoftwareModal {
  software: ISoftware;
  onClose: () => void;
}
