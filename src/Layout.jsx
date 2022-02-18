import React from 'react';
import Head from "next/head";
import { Box } from "@chakra-ui/react";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const Layout = ({ children }) => {
  return (
    <>
        <Head>This is the head</Head>
        <Box maxWidth="1600px" m="auto">
            <header>
                <Navbar />
            </header>
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