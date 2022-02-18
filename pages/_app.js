import Router from "next/router";
import NProgress from "nprogress";
import { ChakraProvider } from '@chakra-ui/react';

import Layout from '../src/Layout';

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  /* progress bars */
  NProgress.configure({ showSpinner: false });
  Router.events.on('routeChangeStart', () => {
    NProgress.start();
  });
  Router.events.on('routeChangeComplete', () => {
    NProgress.done();
  })

  /* display actual app */
  return (
    <ChakraProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  )
}

export default MyApp
