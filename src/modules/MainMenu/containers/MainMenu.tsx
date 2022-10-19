import { RouteComponentProps } from "@reach/router";

import { LoadProject } from "../components/LoadProject";
import { NewProject } from "../components/NewProject";

export const MainMenu: React.FC<RouteComponentProps> = () => {
  return (
    <div>
      Main Menu
      <NewProject />
      <LoadProject />
    </div>
  );
};
