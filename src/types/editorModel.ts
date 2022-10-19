import { Identity } from "~/types";

export interface Title {
  text: string;
  type: SectionElementType.Title;
}

export interface Icon {
  icon: string;
  type: SectionElementType.Icon;
}

export enum SectionElementType {
  Title = "title",
  Icon = "icon",
}

export type SectionElement = {
  data: Icon | Title;
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
}

export interface EditorState extends EditorActions {
  slides: Slide[];
}
