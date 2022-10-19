import { StateCreator } from "zustand";
import { nanoid } from "nanoid";

import { AppState } from "~/appStore";
import { EditorState, Section, Slide } from "~/types";

const generateSection = (sectionData?: Partial<Section>): Section => ({
  id: nanoid(),
  columns: 1,
  elements: [],
  ...sectionData,
});

const generateSlide = (slideData?: Partial<Slide>): Slide => ({
  id: nanoid(),
  sections: [generateSection()],
  ...slideData,
});

export const createEditorStore: StateCreator<AppState, [], [], EditorState> = (
  set
) => ({
  slides: [],
  addSlide: () =>
    set((state) => ({ slides: [...state.slides, generateSlide()] })),
});
