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
  icon: string;
  type: SectionElementType.Icon;
}

export type SectionElement = {
  data: IconElementData | TitleElementData;
} & Identity;

export type Section = {
  columns: 1 | 2 | 3 | 4;
  elements: Array<SectionElement & Identity>;
} & Identity;

export type Slide = {
  sections: Section[];
} & Identity;

interface EditorActions {
  addSlide: () => void;
  addSlideSection: (index: number) => void;
  removeSlideSection: (slideId: string, sectionId: string) => void;
}

export interface EditorState extends EditorActions {
  projectId: string;
  slides: Slide[];
}
