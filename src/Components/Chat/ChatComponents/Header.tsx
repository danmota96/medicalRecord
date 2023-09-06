import React from "react";
import { Flex, Avatar, AvatarBadge, Text } from "@chakra-ui/react";

const Header: React.FC = () => {
  return (
    <Flex w="100%">
      <Flex flexDirection="column" justify="center">
        <Text fontSize="lg" fontWeight="bold">
          Ferin Patel
        </Text>
        <Text color="green.500" size="sm">
          Online
        </Text>
      </Flex>
    </Flex>
  );
};

export default Header;
