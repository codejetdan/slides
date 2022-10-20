import { IconType } from "~/config";
import { Identity } from "~/types";

export enum SectionElementType {
  Title = "title",
  Icon = "icon",
}

export interface TitleElementData {
  text: string;
  type: SectionElementType.Title;
}

export interface IconElementData {
  icon: IconType | string;
  type: SectionElementType.Icon;
}

export type SectionElement = {
  data: IconElementData | TitleElementData;
} & Identity;

export type SectionColumns = 1 | 2 | 3 | 4;
export type SectionElements = Array<SectionElement>;
export type Section = {
  columns: SectionColumns;
  elements: SectionElements;
} & Identity;

export type Slide = {
  sections: Section[];
} & Identity;

interface EditorActions {
  addSlide: () => void;
  addSlideSection: (index: number) => void;
  removeSlideSection: (slideId: string, sectionId: string) => void;
  changeTitleText: (
    slideId: string,
    sectionId: string,
    elementId: string,
    text: string
  ) => void;
  changeIcon: (
    slideId: string,
    sectionId: string,
    elementId: string,
    icon: string
  ) => void;
}

export interface EditorState extends EditorActions {
  projectId: string;
  slides: Slide[];
}
