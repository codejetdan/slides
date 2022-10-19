import { Link } from "@reach/router";

import { AppRoute } from "~/config";

interface NewProjectProps {}

export const NewProject: React.FC<NewProjectProps> = () => {
  return (
    <Link to={AppRoute.Editor}>
      <button>New Project</button>
    </Link>
  );
};
