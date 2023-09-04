import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  Button,
  DrawerCloseButton,
  DrawerFooter,
  DrawerOverlay,
  Input,
  Box,
} from "@chakra-ui/react";
import React from "react";

interface MedicalRecordProps {
  isOpen: boolean;
  onClose: () => void;
}

const MyComponent = ({ onClose, isOpen }: MedicalRecordProps) => {
  return (
    <>
      <Drawer placement="bottom" isOpen={isOpen} onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent
          borderWidth="lg"
          borderColor="blue"
          borderRadius="lg"
          mt={4}
          mb={4}
          h="95vh"
        >
          <DrawerCloseButton />
          <DrawerHeader>Prontuário</DrawerHeader>

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
    </>
  );
};

export default MyComponent;
