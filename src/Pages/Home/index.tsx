import { Grid, VStack, Button, Box, useDisclosure } from "@chakra-ui/react";
import { ColorModeSwitcher } from "../../ColorModeSwitcher";
import { Logo } from "../../Logo";
import MedicalRecord from "../../Components/MedicalRecord";
import ControlsBar from "../../Components/ControlsBar";
import Participant from "../../Components/Participant";

const Home = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box textAlign="center" fontSize="xl">
      <ColorModeSwitcher justifySelf="flex-end" />
      <Grid minH="100vh" p={3}>
        <VStack spacing={8}>
          <Logo h="40vmin" pointerEvents="none" />
        </VStack>
        <MedicalRecord isOpen={isOpen} onClose={onClose} />
        <Participant onOpen={onOpen} />
      </Grid>
    </Box>
  );
};

export default Home;
