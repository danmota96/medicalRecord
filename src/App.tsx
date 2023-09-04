import * as React from "react";
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,

} from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { Logo } from "./Logo";
import AppRoutes from "./Routes";
import theme from "./theme/theme";


export const App = () => {
  return (
    <ChakraProvider theme={theme}>
          <AppRoutes/>
    </ChakraProvider>
  );
};
