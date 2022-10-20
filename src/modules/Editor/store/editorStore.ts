import { StateCreator } from "zustand";
import { nanoid } from "nanoid";

import { AppState } from "~/appStore";
import { EditorState, Section, SectionElementType, Slide } from "~/types";
import { IconType } from "~/config";

const generateSection = (sectionData?: Partial<Section>): Section => ({
  id: nanoid(),
  columns: 3,
  elements: [
    {
      id: nanoid(),
      data: {
        type: SectionElementType.Title,
        text: "Click to change title",
      },
    },
    {
      id: nanoid(),
      data: {
        type: SectionElementType.Icon,
        icon: IconType.Favorite,
      },
    },
    {
      id: nanoid(),
      data: {
        type: SectionElementType.Icon,
        icon: IconType.PieChart,
      },
    },
    {
      id: nanoid(),
      data: {
        type: SectionElementType.Icon,
        icon: IconType.ThumbUp,
      },
    },
  ],
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

  // todo: refactor this abomination 😆
  changeTitleText: (slideId, sectionId, elementId, text) =>
    set((state) => ({
      slides: state.slides.map((slide) =>
        slide.id === slideId
          ? {
              ...slide,
              sections: slide.sections.map((section) =>
                section.id === sectionId
                  ? {
                      ...section,
                      elements: section.elements.map((element) =>
                        element.id === elementId
                          ? {
                              ...element,
                              data: {
                                ...element.data,
                                text,
                              },
                            }
                          : element
                      ),
                    }
                  : section
              ),
            }
          : slide
      ),
    })),

  changeIcon: (slideId, sectionId, elementId, icon) =>
    set((state) => ({
      slides: state.slides.map((slide) =>
        slide.id === slideId
          ? {
              ...slide,
              sections: slide.sections.map((section) =>
                section.id === sectionId
                  ? {
                      ...section,
                      elements: section.elements.map((element) =>
                        element.id === elementId
                          ? {
                              ...element,
                              data: {
                                ...element.data,
                                icon,
                              },
                            }
                          : element
                      ),
                    }
                  : section
              ),
            }
          : slide
      ),
    })),
});
