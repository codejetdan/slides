import { Router } from "@reach/router";

import { AppRoute } from "~/config";

import { Editor } from "~/modules/Editor/containers/Editor";
import { MainMenu } from "~/modules/MainMenu/containers/MainMenu";
import { OpenProject } from "./modules/MainMenu/containers/OpenProject";

export function App() {
  return (
    <Router>
      <MainMenu path={AppRoute.MainMenu} default />

      <OpenProject path={AppRoute.OpenProject} />

      <Editor path={AppRoute.Editor} />
    </Router>
  );
}
