import { Link } from "@reach/router";

import { AppRoute, IconType } from "~/config";
import { Button } from "~/components/Button";
import { styled } from "~/appStyles";

const StyledNewProjectButton = styled(Link, {
  marginRight: "$medium",
});

interface NewProjectProps {}

export const NewProjectButton: React.FC<NewProjectProps> = () => {
  return (
    <StyledNewProjectButton to={AppRoute.Editor}>
      <Button icon={IconType.NoteAdd} type="primary" size="large">
        New Project
      </Button>
    </StyledNewProjectButton>
  );
};
