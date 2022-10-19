import { Link } from "@reach/router";

import { AppRoute, IconType } from "~/config";
import { Button } from "~/components/Button";

interface OpenProjectProps {}

export const OpenProjectButton: React.FC<OpenProjectProps> = () => {
  return (
    <Link to={AppRoute.OpenProject}>
      <Button size="large" icon={IconType.FileOpen}>
        Load Project
      </Button>
    </Link>
  );
};
