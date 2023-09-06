import React, { useCallback, useEffect, useRef, useState } from "react";
import { Box, Heading, VStack, Text, useDisclosure } from "@chakra-ui/react";
import ControlsBar from "./ControlsBar";

const Participant: React.FC = () => {
  return (
    <Box textAlign="center" bg="transparent" p={1} mb={20}>
      <Heading>Teste</Heading>
      <VStack>
        <ControlsBar />
      </VStack>
    </Box>
  );
};

export default Participant;
