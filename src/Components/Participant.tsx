import React, { useCallback, useEffect, useRef, useState } from "react";
import { Box, Heading, VStack, Text, useDisclosure } from "@chakra-ui/react";
import ControlsBar from "./ControlsBar";

const Participant: React.FC = () => {
  return (
    <Box textAlign="center" bg="transparent" p={1} mb={20}>
      <Heading>Teste</Heading>
      <VStack>
        <Box textAlign="left">
          <Box
            maxW="sm"
            borderWidth="2px"
            borderRadius="lg"
            overflow="hidden"
            borderColor="gray"
          ></Box>
          <Heading color="#fafafa" fontSize="16px" mt={1}>
            Teste
          </Heading>
        </Box>
        <ControlsBar />
      </VStack>
    </Box>
  );
};

export default Participant;
