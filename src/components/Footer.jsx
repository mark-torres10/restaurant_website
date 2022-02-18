import React from 'react';

import { EmailIcon, PhoneIcon } from "@chakra-ui/icons";
import { Box, Flex, Spacer, Text } from "@chakra-ui/react";

import NewsletterSignup from "./NewsletterSignup";
import SocialLinks from "./SocialLinks";

const Footer = () => {
  return (
    <Box textAlign="center" alignItems="center" justifyContent="center">
        <Flex>

        </Flex>
        <NewsletterSignup/>
        <Flex justifyContent="center" paddingTop="4" paddingBottom="10">
          <Box paddingRight="20">
            <Text textDecoration="underline">Hours</Text>
            <Text textAlign="left">Monday-Saturday: 7:00am - 8:00pm</Text>
            <Text textAlign="left">Sunday: 7:00am - 3:00pm</Text>
          </Box>
          <Box paddingRight="20">
            <Text textDecoration="underline">Address</Text>
            <Text>3883 Tamiami Trail East, Naples, FL 34112</Text>
          </Box>
          <Box alignItems="left" justifyContent="column">
            <Text textDecoration="underline">Contact Us</Text>
            <Text textAlign="left">
              <EmailIcon/> theecitysdiner@gmail.com
            </Text>
            <Text textAlign="left">
              <PhoneIcon/> (239) 228-5921
            </Text>
          </Box>
        </Flex>
        <SocialLinks/>
        <Spacer paddingTop="5" paddingBottom="10"/>
    </Box>
  )
}

export default Footer;