import { MouseEventHandler } from "react";

import { styled } from "~/appStyles";
import { IconType } from "~/config";
import { Icon } from "~/components/Icon";

interface ButtonProps {
  children?: JSX.Element | string;
  size?: "small" | "medium" | "large";
  type?: "primary" | "secondary";
  icon?: IconType;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const StyledButton = styled("button", {
  borderRadius: 10,
  border: 0,
  cursor: "pointer",
  "& > div": {
    display: "flex",
    alignItems: "center",
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
  },
});

export const Button: React.FC<ButtonProps> = ({
  children,
  icon,
  size = "medium",
  type = "primary",
  ...props
}) => {
  return (
    <StyledButton size={size} type={type} {...props}>
      <div>
        {icon && <Icon name={icon} />}
        {children}
      </div>
    </StyledButton>
  );
};
