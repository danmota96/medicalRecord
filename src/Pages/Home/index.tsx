import { Grid, VStack, Button, Box } from "@chakra-ui/react";

import { Logo } from "../../Logo";
import Participant from "../../Components/Participant";

const Home = () => {
  return (
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3}>
        <VStack spacing={8}>
          <Logo h="40vmin" pointerEvents="none" />
        </VStack>
        <Participant />
      </Grid>
    </Box>
  );
};

export default Home;
