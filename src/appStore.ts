import create from "zustand";

import { EditorState, MainMenuState } from "~/types";

import { createEditorStore } from "./modules/Editor/store/editorStore";
import { createMainMenuStore } from "./modules/MainMenu/store/mainMenuStore";

export type AppState = MainMenuState & EditorState;

export const useAppStore = create<AppState>()((...appStore) => ({
  ...createMainMenuStore(...appStore),
  ...createEditorStore(...appStore),
}));
