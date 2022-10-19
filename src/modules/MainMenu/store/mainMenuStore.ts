import { StateCreator } from "zustand";

import { AppState } from "~/appStore";
import { MainMenuState } from "~/types";

export const createMainMenuStore: StateCreator<
  AppState,
  [],
  [],
  MainMenuState
> = (set) => ({});
