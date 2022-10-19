import { Router } from "@reach/router";

import { AppRoute } from "~/config";

import { Editor } from "~/modules/Editor/containers/Editor";
import { MainMenu } from "~/modules/MainMenu/containers/MainMenu";

export function App() {
  return (
    <Router>
      <MainMenu path={AppRoute.MainMenu} default />
      <Editor path={AppRoute.Editor} />
    </Router>
  );
}
