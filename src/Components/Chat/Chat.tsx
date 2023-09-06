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
      <DrawerContent
        borderWidth="lg"
        borderColor="blue"
        borderRadius="lg"
        mt={4}
        mb={4}
        h="95vh"
      >
        <DrawerCloseButton />
        <DrawerHeader>
          <Header />
        </DrawerHeader>
        <Flex w="100%" h="100vh" justify="center" align="center">
          <Flex p={2} h="90%" flexDir="column">
            <Divider />
            <Messages messages={messages} />
            <Divider />
            <Footer
              inputMessage={inputMessage}
              setInputMessage={setInputMessage}
              handleSendMessage={handleSendMessage}
            />
          </Flex>
        </Flex>
      </DrawerContent>
    </Drawer>
  );
};

export default Chat;
