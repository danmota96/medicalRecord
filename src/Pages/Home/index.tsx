import {
  Grid,
  VStack,
  Code,
  Text,
  Box,
  useDisclosure,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  DrawerCloseButton,
  Input,
  DrawerFooter,
} from "@chakra-ui/react";
import { ColorModeSwitcher } from "../../ColorModeSwitcher";
import { Logo } from "../../Logo";
import MedicalRecord from "../../Components/MedicalRecord";
import ControlsBar from "../../Components/ControlsBar";

const Home = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3}>
        <ColorModeSwitcher justifySelf="flex-end" />
        <VStack spacing={8}>
          <Logo h="40vmin" pointerEvents="none" />
          <Text>
            Edit <Code fontSize="xl">src/App.tsx</Code> and save to reload.
          </Text>
        </VStack>
        <Button onClick={onOpen}>Open</Button>
        <MedicalRecord isOpen={isOpen} onClose={onClose} />
        <ControlsBar onOpen={onOpen} />
      </Grid>
    </Box>
  );
};

export default Home;
