import 'bootstrap/dist/css/bootstrap.min.css';

import Head from 'next/head';

import '../styles/globals.css';
import Layout from '../components/layout/layout';
import IndexLayout from '../components/layout/index_layout';

import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  if((router.pathname.startsWith("/about")) || (router.pathname.startsWith("/contact")) || (router.pathname.startsWith("/team"))){
    return (
      <Layout>
        <Head>
          <meta name='viewport' content='width=device-width, initial-scale=1' />
        </Head>
        <Component {...pageProps} />
      </Layout>
    );
  }
  return (
    <IndexLayout>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <Component {...pageProps} />
    </IndexLayout>
  );
}

export default MyApp;
