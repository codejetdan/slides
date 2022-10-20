import { styled } from "~/appStyles";
import { allIcons, IconType } from "~/config";

interface IconProps {
  name: IconType | string;
}

const StyledIcon = styled("span", {
  variants: {
    isValid: {
      false: {
        color: "$red500",
      },
    },
  },
});

export const Icon: React.FC<IconProps> = ({ name }) => {
  const isValid = allIcons.includes(name);

  return (
    <StyledIcon className="material-icons" isValid={isValid}>
      {isValid ? name : IconType.Error}
    </StyledIcon>
  );
};
