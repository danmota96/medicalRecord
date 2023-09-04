import React, { useEffect, useState } from "react";
import {
  HStack,
  IconButton,
  Tooltip,
  Flex,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@chakra-ui/react";
import { MdMic, MdMicOff, MdVideocam, MdVideocamOff } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { FaNotesMedical } from "react-icons/fa";

interface ControlsBarProps {
  onOpen: () => void;
}

const ControlsBar = ({ onOpen }: ControlsBarProps) => {
  return (
    <Flex
      direction="column"
      justify="flex-end"
      align="center"
      bottom="0"
      left="1"
      right="1"
      width="100%"
      height="100%"
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
        <Popover placement="top" isLazy>
          <PopoverTrigger>
            <IconButton
              aria-label="More server options"
              icon={<FaNotesMedical />}
              variant="solid"
              w="fit-content"
              bg="#494949"
              colorScheme="white"
              onClick={onOpen}
            />
          </PopoverTrigger>
          {/*      <PopoverContent css={{ all: "unset" }}>
            {showMedicalRecord && (
              <MedicalRecord>
                <MedicalRecordContent
                  roomName={roomName}
                  patient={patient}
                  patientId={patientId}
              
                />
              </MedicalRecord>
            )}
          </PopoverContent> */}
        </Popover>
      </HStack>
    </Flex>
  );
};

export default ControlsBar;
