import { Link } from "@reach/router";

import { AppRoute, IconType } from "~/config";
import { Button } from "~/components/Button";
import { styled } from "~/appStyles";
import { nanoid } from "nanoid";

const StyledNewProjectButton = styled(Link, {
  marginRight: "$medium",
});

interface NewProjectProps {}

export const NewProjectButton: React.FC<NewProjectProps> = () => {
  return (
    <StyledNewProjectButton to={`${AppRoute.Editor}/${nanoid()}/1`}>
      <Button
        icon={IconType.NoteAdd}
        type="primary"
        size="large"
        text="New Project"
      />
    </StyledNewProjectButton>
  );
};
