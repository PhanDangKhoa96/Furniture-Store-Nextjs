import { SessionProvider } from 'next-auth/react';
import 'remixicon/fonts/remixicon.css';
import Layout from '../components/layout';
import '../styles/global.scss';
import StoreProvider from '../store/context/store';

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
    return (
        <StoreProvider>
            <SessionProvider session={session}>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </SessionProvider>
        </StoreProvider>
    );
}

export default MyApp;
