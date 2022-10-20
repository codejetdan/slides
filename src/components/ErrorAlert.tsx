import { Link } from "@reach/router";
import { useEffect } from "react";

import { AppRoute } from "~/config";
import { Button } from "~/components/Button";
import { styled } from "~/appStyles";

const StyledError = styled("div", {
  display: "flex",
  flexDirection: "column",
});

interface ErrorAlertProps {
  message: string;
}

export const ErrorAlert: React.FC<ErrorAlertProps> = ({ message }) => {
  useEffect(() => {
    console.error(message);
  }, [message]);

  return (
    <StyledError>
      {message}
      <Link to={AppRoute.MainMenu}>
        <Button text="Go to Main Menu" />
      </Link>
    </StyledError>
  );
};
