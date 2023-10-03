import { ReactNode } from "react";

export interface INavigationLinks {
  title: string;
  path: string;
}
export interface IProjectCard {
  imgUrl: string;
  title: string;
  description: string;
  gitUrl: string;
  previewUrl: string;
}
export interface IProjectTag {
  name: string;
  onClick: (name: string) => void;
  isSelected: boolean;
}
export interface ITabButton {
  active: boolean;
  selectTab: () => void;
  children: ReactNode;
}
