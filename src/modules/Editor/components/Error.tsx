import { useEffect } from "react";

interface ErrorProps {
  message: string;
}

export const Error: React.FC<ErrorProps> = ({ message }) => {
  useEffect(() => {
    console.error(message);
  }, [message]);

  return <div>{message}</div>;
};
