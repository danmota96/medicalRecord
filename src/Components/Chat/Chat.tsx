import {
  Text,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Drawer,
  Stack,
  Divider,
  Flex,
  DrawerFooter,
  DrawerBody,
} from "@chakra-ui/react";
import React, { useState } from "react";
import Footer from "./ChatComponents/Footer";
import Header from "./ChatComponents/Header";
import Messages from "./ChatComponents/Messages";

interface ChatProps {
  isOpen: boolean;
  onClose: () => void;

  onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
}

const Chat = ({ onClose, isOpen, onClick }: ChatProps) => {
  const [messages, setMessages] = useState([
    { from: "computer", text: "Hi, My Name is HoneyChat" },
    { from: "me", text: "Hey there" },
    { from: "me", text: "Myself Ferin Patel" },
    {
      from: "computer",
      text: "Nice to meet you. You can send me message and i'll reply you with same message.",
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const handleSendMessage = () => {
    if (!inputMessage.trim().length) {
      return;
    }
    const data = inputMessage;

    setMessages((old) => [...old, { from: "me", text: data }]);
    setInputMessage("");

    setTimeout(() => {
      setMessages((old) => [...old, { from: "computer", text: data }]);
    }, 1000);
  };

  return (
    <Drawer placement="bottom" isOpen={isOpen} onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent borderRadius="lg" mb={4} h="95vh">
        <DrawerHeader>
          <Text fontSize="lg" fontWeight="bold">
            Ferin Patel
          </Text>
          <Text color="green.500" size="sm">
            Online
          </Text>
          <DrawerCloseButton />
        </DrawerHeader>
        <DrawerBody>
          <Flex w="100%" justify="center" align="center">
            <Flex h="90%" flexDir="column">
              <Divider />
              <Messages messages={messages} />
              <Divider />
            </Flex>
          </Flex>
        </DrawerBody>
        <DrawerFooter>
          <Footer
            inputMessage={inputMessage}
            setInputMessage={setInputMessage}
            handleSendMessage={handleSendMessage}
          />
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default Chat;
