import { MouseEventHandler } from "react";

import { styled } from "~/appStyles";
import { IconType } from "~/config";
import { Icon } from "~/components/Icon";

interface ButtonProps {
  text?: string;
  size?: "small" | "medium" | "large";
  type?: "primary" | "secondary" | "ghost";
  icon?: IconType;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const StyledButton = styled("button", {
  borderRadius: "$normal",
  border: 0,
  cursor: "pointer",
  "& > div": {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  "& span": {
    marginRight: "$small",
  },
  variants: {
    type: {
      primary: {
        backgroundColor: "$blue500",
      },
      secondary: {
        backgroundColor: "$gray500",
      },
      ghost: {
        backgroundColor: "transparent",
      },
    },
    size: {
      small: {
        fontSize: "$small",
        height: "$small",
        paddingRight: "$small",
        paddingLeft: "$small",
      },
      medium: {
        fontSize: "$medium",
        height: "$medium",
        paddingLeft: "$medium",
        paddingRight: "$medium",
      },
      large: {
        fontSize: "$large",
        height: "$large",
        paddingLeft: "$large",
        paddingRight: "$large",
      },
    },
    noText: {
      true: {
        "& span": {
          marginRight: 0,
        },
      },
    },
  },
});

export const Button: React.FC<ButtonProps> = ({
  text,
  icon,
  size = "medium",
  type = "primary",
  ...props
}) => {
  return (
    <StyledButton size={size} type={type} {...props} noText={!text}>
      <div>
        {icon && <Icon name={icon} />}
        {text}
      </div>
    </StyledButton>
  );
};
