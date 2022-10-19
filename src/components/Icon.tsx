import { styled } from "~/appStyles";
import { IconType } from "~/config";

interface IconProps {
  name: IconType;
}

const StyledIcon = styled("span", {});

export const Icon: React.FC<IconProps> = ({ name }) => (
  <StyledIcon className="material-icons">{name}</StyledIcon>
);
