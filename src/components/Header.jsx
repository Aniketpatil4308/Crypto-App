import { Button, HStack, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <HStack p={"4"} shadow={"base"} bgColor={"blackAlpha.900"}>
      <Button variant={"unstyled"} color={"white"} marginLeft={"70px"}>
        <Link to="/">Home</Link>
      </Button>
      <Button variant={"unstyled"} color={"white"} marginLeft={"50px"}>
        <Link to="/exchanges">Exchange</Link>
      </Button>
      <Button variant={"unstyled"} color={"white"} marginLeft={"60px"}>
        <Link to="/coins">Coins</Link>
      </Button>
    </HStack>
  );
}

export default Header;
