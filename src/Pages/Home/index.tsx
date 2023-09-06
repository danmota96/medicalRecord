import {
  Grid,
  VStack,
  Button,
  Box,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Input,
} from "@chakra-ui/react";
import { ColorModeSwitcher } from "../../ColorModeSwitcher";
import { Logo } from "../../Logo";
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
        <Participant />
        <Button onClick={onOpen}>Open</Button>
      </Grid>
     
      <Drawer isOpen={isOpen} onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody>
            <form
              id="my-form"
              onSubmit={(e) => {
                e.preventDefault();
                console.log("submitted");
              }}
            >
              <Input name="nickname" placeholder="Type here..." />
            </form>
          </DrawerBody>

          <DrawerFooter>
            <Button type="submit" form="my-form">
              Save
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Home;
