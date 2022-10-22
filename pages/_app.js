import { SessionProvider } from "next-auth/react";
import 'remixicon/fonts/remixicon.css';
import Layout from "../components/layout";
import "../styles/global.scss";

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

