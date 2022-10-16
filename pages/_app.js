import {SessionProvider} from "next-auth/react";
import Layout from "../components/layout";
import "../styles/global.scss";
import 'remixicon/fonts/remixicon.css'

function MyApp({Component, pageProps: {session, ...pageProps}}) {
    return (
        <SessionProvider session={session}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </SessionProvider>
    );
}

export default MyApp;

