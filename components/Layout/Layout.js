import Head from "next/head";
import Navbar from "./Navbar.js";
import NavMenu from "./NavMenu";
import Footer from "./Footer.js";
import { Stack, Box, HStack } from "@chakra-ui/react";

export default function Layout({ children }) {
  return (
    <Box
      display="flex"
      justifyContent={"center"}
      flexDirection="column"
      alignContent="center"
    >
      <Head>
        <title>NatMatch Version2</title>
      </Head>
      <Navbar />
      <HStack justifyContent="center">
        <Stack
          className="mainContainer"
          maxW={"1200"}
          w={"100%"}
          direction={["column", "row"]}
          justifyContent={"center"}
        >
          <Box className="leftMenuNav" display={{ base: "none", md: "flex" }}>
            <NavMenu w={["100%", "25%"]} />
          </Box>
          <Stack p={{ base: "5", md: "10" }} w={{ base: "100%", md: "75%" }}>
            {children}
          </Stack>
        </Stack>
      </HStack>
      <Footer />
    </Box>
  );
}
