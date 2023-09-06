import React, { useEffect, useRef } from "react";
import { Avatar, Flex, Text } from "@chakra-ui/react";

interface Message {
  from: string;
  text: string;
}

interface MessagesProps {
  messages: Message[];
}

const Messages: React.FC<MessagesProps> = ({ messages }) => {
  const AlwaysScrollToBottom: React.FC = () => {
    const elementRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
      if (elementRef.current) {
        elementRef.current.scrollIntoView();
      }
    });

    return <div ref={elementRef} />;
  };

  return (
    <Flex w="100%" h="80%" overflowY="scroll" flexDirection="column" p="3">
      {messages.map((item, index) => {
        if (item.from === "me") {
          return (
            <Flex key={index} w="100%" justify="flex-end">
              <Flex
                bg="#CFD8D7"
                color="black"
                minW="100px"
                maxW="350px"
                my="1"
                p="3"
                borderRadius="12px 12px 0px 12px"
              >
                <Text>{item.text}</Text>
              </Flex>
            </Flex>
          );
        } else {
          return (
            <Flex key={index} w="100%">
              <Flex
                ml={1}
                bg="#0078D7"
                color="white"
                minW="100px"
                maxW="350px"
                my="1"
                p="3"
                borderRadius="12px 12px 12px 0px"
              >
                <Text>{item.text}</Text>
              </Flex>
            </Flex>
          );
        }
      })}
      <AlwaysScrollToBottom />
    </Flex>
  );
};

export default Messages;
