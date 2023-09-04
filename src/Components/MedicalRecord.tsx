import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  Button,
  DrawerCloseButton,
  DrawerFooter,
  DrawerOverlay,
  Heading,
  FormLabel,
  FormControl,
  Textarea,
  HStack,
  Input,
  Text,
  Divider,
  Box,
  Stack,
} from "@chakra-ui/react";
import { useState } from "react";

interface MedicalRecordProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface PatientInfoData {
  diagnosis: string;
  queixaprincipal: string;
  historiadoenca: string;
  historiapatologica: string;
  alergias: string;
  peso: string;
  altura: string;
  imc: string;
  freqcardiaca: string;
  freqrespiratoria: string;
  pressaoarterial: string;
  tax: string;
  glasgow: string;
  tiposanguineo: string;
  medicamentos: string;
  anotacoes: string;
}

const MedicalRecord = ({ onClose, isOpen }: MedicalRecordProps) => {
  const [medicalRecord, setMedicalRecord] = useState<PatientInfoData>({
    diagnosis: "",
    queixaprincipal: "",
    historiadoenca: "",
    historiapatologica: "",
    alergias: "",
    altura: "",
    peso: "",
    imc: "",
    freqcardiaca: "",
    freqrespiratoria: "",
    pressaoarterial: "",
    tax: "",
    glasgow: "",
    tiposanguineo: "",
    medicamentos: "",
    anotacoes: "",
  });
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
          <DrawerHeader>Medical Record</DrawerHeader>

          <DrawerBody>
            <Stack spacing={4}>
              <Heading fontSize="md">John Doe - 56 years</Heading>
              <Divider my="4" />
              <Text fontSize="md" fontWeight="semibold" color="#747B7D">
                Treatment
              </Text>
              <HStack>
                <FormControl>
                  <FormLabel fontSize="sm">Blood Type</FormLabel>
                  <Input
                    defaultValue={medicalRecord.tiposanguineo}
                    onChange={(event) =>
                      setMedicalRecord(
                        (prevMedicalRecord: PatientInfoData) => ({
                          ...prevMedicalRecord,
                          tiposanguineo: event.target.value,
                        })
                      )
                    }
                  />
                </FormControl>
              </HStack>
              <FormControl>
                <FormLabel fontSize="sm">Diagnosis</FormLabel>
                <Textarea
                  defaultValue={medicalRecord.diagnosis}
                  onChange={(event) =>
                    setMedicalRecord((prevMedicalRecord: PatientInfoData) => ({
                      ...prevMedicalRecord,
                      diagnosis: event.target.value,
                    }))
                  }
                />
              </FormControl>
              <FormControl>
                <FormLabel fontSize="sm">Alergies</FormLabel>
                <Textarea
                  defaultValue={medicalRecord.alergias}
                  onChange={(event) =>
                    setMedicalRecord((prevMedicalRecord: PatientInfoData) => ({
                      ...prevMedicalRecord,
                      alergias: event.target.value,
                    }))
                  }
                />
              </FormControl>
              <FormControl>
                <FormLabel fontSize="sm">Medicines</FormLabel>
                <Textarea
                  defaultValue={medicalRecord.medicamentos}
                  onChange={(event) =>
                    setMedicalRecord((prevMedicalRecord: PatientInfoData) => ({
                      ...prevMedicalRecord,
                      medicamentos: event.target.value,
                    }))
                  }
                />
              </FormControl>
              <FormControl>
                <FormLabel fontSize="sm">Anotações</FormLabel>
                <Textarea
                  defaultValue={medicalRecord.anotacoes}
                  onChange={(event) =>
                    setMedicalRecord((prevMedicalRecord: PatientInfoData) => ({
                      ...prevMedicalRecord,
                      anotacoes: event.target.value,
                    }))
                  }
                />
              </FormControl>
              <FormControl>
                <FormLabel fontSize="sm">Queixa principal</FormLabel>
                <Textarea
                  defaultValue={medicalRecord.queixaprincipal}
                  onChange={(event) =>
                    setMedicalRecord((prevMedicalRecord: PatientInfoData) => ({
                      ...prevMedicalRecord,
                      queixaprincipal: event.target.value,
                    }))
                  }
                />
              </FormControl>
              <FormControl>
                <FormLabel fontSize="sm">Histórico da Doença</FormLabel>
                <Textarea
                  defaultValue={medicalRecord.historiadoenca}
                  onChange={(event) =>
                    setMedicalRecord((prevMedicalRecord: PatientInfoData) => ({
                      ...prevMedicalRecord,
                      historiadoenca: event.target.value,
                    }))
                  }
                />
              </FormControl>
              <FormControl>
                <FormLabel fontSize="sm">Histórico Patológica</FormLabel>
                <Textarea
                  defaultValue={medicalRecord.historiapatologica}
                  onChange={(event) =>
                    setMedicalRecord((prevMedicalRecord: PatientInfoData) => ({
                      ...prevMedicalRecord,
                      historiapatologica: event.target.value,
                    }))
                  }
                />
              </FormControl>
              <Divider my="4" />
              <Text fontSize="md" fontWeight="semibold" color="#747B7D">
                Dados Vitais
              </Text>
              <HStack>
                <FormControl>
                  <FormLabel fontSize="sm">Altura</FormLabel>
                  <Input
                    defaultValue={medicalRecord.altura}
                    onChange={(event) =>
                      setMedicalRecord(
                        (prevMedicalRecord: PatientInfoData) => ({
                          ...prevMedicalRecord,
                          altura: event.target.value,
                        })
                      )
                    }
                    maxLength={4}
                    pattern="^\d/d+.(\.\d{1,2})?$"
                  />
                </FormControl>
                <FormControl>
                  <FormLabel fontSize="sm">Peso</FormLabel>
                  <Input
                    maxLength={6}
                    pattern="^\d+(\.\d{1,2})?$"
                    defaultValue={medicalRecord.peso}
                    onChange={(event) =>
                      setMedicalRecord(
                        (prevMedicalRecord: PatientInfoData) => ({
                          ...prevMedicalRecord,
                          peso: event.target.value,
                        })
                      )
                    }
                    style={{ paddingRight: "40px" }}
                  />
                  <Text
                    style={{
                      position: "absolute",
                      right: "10px",
                      top: "70%",
                      transform: "translateY(-50%)",
                      fontSize: "12px",
                      color: "#666",
                    }}
                  >
                    kg
                  </Text>
                </FormControl>
              </HStack>
              <HStack>
                <FormControl>
                  <FormLabel fontSize="sm">IMC</FormLabel>
                  <Input
                    maxLength={6}
                    defaultValue={medicalRecord.imc}
                    onChange={(event) =>
                      setMedicalRecord(
                        (prevMedicalRecord: PatientInfoData) => ({
                          ...prevMedicalRecord,
                          imc: event.target.value,
                        })
                      )
                    }
                  />
                </FormControl>
                <FormControl>
                  <FormLabel fontSize="sm">Freq. Cardíaca</FormLabel>
                  <Input
                    maxLength={3}
                    defaultValue={medicalRecord.freqcardiaca}
                    onChange={(event) =>
                      setMedicalRecord(
                        (prevMedicalRecord: PatientInfoData) => ({
                          ...prevMedicalRecord,
                          freqcardiaca: event.target.value,
                        })
                      )
                    }
                    style={{ paddingRight: "40px" }}
                  />
                  <Text
                    style={{
                      position: "absolute",
                      right: "10px",
                      top: "70%",
                      transform: "translateY(-50%)",
                      fontSize: "12px",
                      color: "#666",
                    }}
                  >
                    bpm
                  </Text>
                </FormControl>
              </HStack>
              <Box>
                <HStack>
                  <FormControl>
                    <FormLabel fontSize="sm">Freq. Respiratória</FormLabel>
                    <Input
                      maxLength={2}
                      defaultValue={medicalRecord.freqrespiratoria}
                      onChange={(event) =>
                        setMedicalRecord(
                          (prevMedicalRecord: PatientInfoData) => ({
                            ...prevMedicalRecord,
                            freqrespiratoria: event.target.value,
                          })
                        )
                      }
                      style={{ paddingRight: "40px" }}
                    />
                    <Text
                      style={{
                        position: "absolute",
                        right: "10px",
                        top: "70%",
                        transform: "translateY(-50%)",
                        fontSize: "12px",
                        color: "#666",
                      }}
                    >
                      mrm
                    </Text>
                  </FormControl>

                  <FormControl>
                    <FormLabel fontSize="sm">Glasgow</FormLabel>
                    <Input
                      maxLength={2}
                      defaultValue={medicalRecord.glasgow}
                      onChange={(event) =>
                        setMedicalRecord(
                          (prevMedicalRecord: PatientInfoData) => ({
                            ...prevMedicalRecord,
                            glasgow: event.target.value,
                          })
                        )
                      }
                    />
                  </FormControl>
                </HStack>
              </Box>
              <HStack>
                <FormControl>
                  <FormLabel fontSize="sm">TAX</FormLabel>
                  <Input
                    maxLength={3}
                    defaultValue={medicalRecord.tax}
                    onChange={(event) =>
                      setMedicalRecord(
                        (prevMedicalRecord: PatientInfoData) => ({
                          ...prevMedicalRecord,
                          tax: event.target.value,
                        })
                      )
                    }
                    style={{ paddingRight: "40px" }}
                  />
                  <Text
                    style={{
                      position: "absolute",
                      right: "10px",
                      top: "70%",
                      transform: "translateY(-50%)",
                      fontSize: "12px",
                      color: "#666",
                    }}
                  >
                    °C
                  </Text>
                </FormControl>
                <FormControl>
                  <FormLabel fontSize="sm">Pressão Arterial</FormLabel>
                  <Input
                    maxLength={7}
                    defaultValue={medicalRecord.pressaoarterial}
                    onChange={(event) =>
                      setMedicalRecord(
                        (prevMedicalRecord: PatientInfoData) => ({
                          ...prevMedicalRecord,
                          pressaoarterial: event.target.value,
                        })
                      )
                    }
                    style={{ paddingRight: "40px" }}
                  />
                  <Text
                    style={{
                      position: "absolute",
                      right: "10px",
                      top: "70%",
                      transform: "translateY(-50%)",
                      fontSize: "12px",
                      color: "#666",
                    }}
                  >
                    mmHg
                  </Text>
                </FormControl>
              </HStack>
            </Stack>
          </DrawerBody>

          <DrawerFooter>
            <Button w="full" bg="cyan" color="gray">
              Save
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default MedicalRecord;
