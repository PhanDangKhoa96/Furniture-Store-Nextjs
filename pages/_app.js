import {ChakraProvider} from "@chakra-ui/react";
import Layout from "../components/layout";
import theme from "../styles/chakra-ui/theme";
import "../styles/globals.scss";
import {SessionProvider} from "next-auth/react";

function MyApp({Component, pageProps: {session, ...pageProps}}) {
    return (
        <SessionProvider session={session}>
            <ChakraProvider theme={theme}>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </ChakraProvider>
        </SessionProvider>
    );
}

export default MyApp;

