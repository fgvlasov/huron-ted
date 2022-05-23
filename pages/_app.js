import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../components/Layout/Layout";
import "../styles/globals.css";
import theme from "./theme";
import { useRouter } from "next/router";
import { en } from "../locales/en";
import { fr } from "../locales/fr";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const t = router.locale === "en" ? en : fr;

  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
