import { Alert, AlertIcon } from "@chakra-ui/react";
import React from "react";

function ErrorComponent({ message }) {
  return (
    <Alert
      status="error"
      position={"fixed"}
      bottom={"10"}
      left={"50%"}
      transform={"translateX(-50%)"}
      w={"container.lg"}
      h={"50px"}
    >
      <AlertIcon />
      {message}
    </Alert>
  );
}

export default ErrorComponent;
