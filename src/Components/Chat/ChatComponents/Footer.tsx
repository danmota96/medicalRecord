import React, { ChangeEvent, KeyboardEvent } from "react";
import { Flex, Input, Button, IconButton } from "@chakra-ui/react";
import { FiSend } from "@react-icons/all-files/fi/FiSend";

interface FooterProps {
  inputMessage: string;
  setInputMessage: (value: string) => void;
  handleSendMessage: () => void;
}

const Footer: React.FC<FooterProps> = ({
  inputMessage,
  setInputMessage,
  handleSendMessage,
}) => {
  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputMessage(e.target.value);
  };

  return (
    <Flex w="100%" mt="5">
      <Input
        placeholder="Message"
        border="none"
        borderRadius="none"
        _focus={{
          border: "1px solid black",
        }}
        onKeyPress={handleKeyPress}
        value={inputMessage}
        onChange={handleChange}
      />
      
      <IconButton
        colorScheme="blue"
        aria-label="Search database"
        icon={<FiSend />}
        onClick={handleSendMessage}
      />
    </Flex>
  );
};

export default Footer;
