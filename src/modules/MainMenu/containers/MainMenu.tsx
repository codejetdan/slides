import { RouteComponentProps } from "@reach/router";

import { styled } from "~/appStyles";

import { OpenProjectButton } from "../components/OpenProjectButton";
import { NewProjectButton } from "../components/NewProjectButton";

const StyledMainMenu = styled("nav", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
});

interface MainMenuProps extends RouteComponentProps {}

export const MainMenu: React.FC<MainMenuProps> = () => {
  return (
    <StyledMainMenu>
      <NewProjectButton />
      <OpenProjectButton />
    </StyledMainMenu>
  );
};
