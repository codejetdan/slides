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
  projectId: nanoid(),
  slides: [generateSlide()],
  addSlide: () =>
    set((state) => ({ slides: [...state.slides, generateSlide()] })),
  addSlideSection: (slideIndex) =>
    set((state) => ({
      slides: state.slides.map((slide, index) =>
        index === slideIndex
          ? { ...slide, sections: [...slide.sections, generateSection()] }
          : slide
      ),
    })),
  removeSlideSection: (slideId, sectionId) =>
    set((state) => ({
      slides: state.slides.map((slide) =>
        slide.id === slideId
          ? {
              ...slide,
              sections: slide.sections.filter(
                (section) => section.id !== sectionId
              ),
            }
          : slide
      ),
    })),
});
