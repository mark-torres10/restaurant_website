import React from 'react';
import Head from "next/head";
import { Box, Spacer} from "@chakra-ui/react";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const Layout = ({ children }) => {
  return (
    <>
        {/*TODO(mark): update head element*/}
        <Head>This is the head</Head>
        <Box m="auto">
            <header>
                <Navbar />
            </header>
            <Spacer height="180px"/>
            <main>
                { children }
            </main>
            <footer>
                <Footer />
            </footer>
        </Box>
    </>
  )
}

export default Layout;