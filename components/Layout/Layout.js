import Head from "next/head";
import Navbar from "./Navbar.js";
import LeftMenu from "./LeftMenu.js";
import Footer from "./Footer.js";
import { Stack, Box } from "@chakra-ui/react";

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
      <Stack
        className="mainContainer"
        maxW={"75rem"}
        direction={["column", "row"]}
        spacing="24px"
      >
        <LeftMenu />
        {children}
      </Stack>
      <Footer />
    </Box>
  );
}
