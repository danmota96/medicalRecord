import React, { useEffect, useState } from "react";
import {
  HStack,
  IconButton,
  Tooltip,
  Flex,
  Popover,
  PopoverContent,
  PopoverTrigger,
  useDisclosure,
} from "@chakra-ui/react";
import {
  MdChatBubble,
  MdMic,
  MdMicOff,
  MdVideocam,
  MdVideocamOff,
} from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { FaNotesMedical } from "react-icons/fa";
import MedicalRecord from "./MedicalRecord";
import Chat from "./Chat/Chat";

interface ControlsBarProps {
  onOpen: () => void;
  onClose: () => void;
  isOpen: boolean;
}

const ControlsBar = () => {
  const [showMedicalRecord, setShowMedicalRecord] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const openMedicalRecord = () => {
    setShowMedicalRecord(true);
    setShowChat(false);
    onOpen();
  };

  const openChat = () => {
    setShowChat(true);
    setShowMedicalRecord(false);
    onOpen();
  };

  // Impede a propagação do evento de clique nos componentes internos
  const handleMedicalRecordClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  const handleChatClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  return (
    <Flex
      direction="column"
      justify="flex-end"
      align="center"
      position="absolute"
      bottom="0"
      left="1"
      right="1"
      height="95vh"
    >
      <HStack
        borderRadius="20px"
        bg="rgba(0, 0, 0, 0.5)"
        p="12px 36px"
        gap="24px"
        marginBottom="20px"
      >
        <IconButton
          aria-label=""
          icon={<FiPhone />}
          bg="#EF4037"
          colorScheme="white"
        />

        <Tooltip label={""}>
          <IconButton
            aria-label=""
            icon={<MdMic />}
            bg="#494949"
            colorScheme="white"
          />
        </Tooltip>
        <Tooltip label={""}>
          <IconButton
            aria-label=""
            icon={<MdVideocam />}
            bg="#494949"
            colorScheme="white"
          />
        </Tooltip>

        <IconButton
          aria-label="More server options"
          icon={<FaNotesMedical />}
          variant="solid"
          w="fit-content"
          bg="#494949"
          colorScheme="white"
          onClick={openMedicalRecord}
        />

        <IconButton
          aria-label=""
          icon={<MdChatBubble />}
          bg="#494949"
          colorScheme="white"
          onClick={openChat}
        />
      </HStack>
      {showMedicalRecord && (
        <MedicalRecord
          isOpen={isOpen}
          onClose={onClose}
          onClick={handleMedicalRecordClick}
        />
      )}
      {showChat && (
        <Chat isOpen={isOpen} onClose={onClose} onClick={handleChatClick} />
      )}
    </Flex>
  );
};

export default ControlsBar;
