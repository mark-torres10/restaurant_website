import React from 'react';

import { Flex, Spacer } from "@chakra-ui/react";

import { SocialIcon } from "react-social-icons";

const SocialLinks = ({ maxWidth = "240px" }) => {
  return (
    <Flex justifyContent="space-around" maxWidth={maxWidth} m="auto">
        <SocialIcon url="https://www.facebook.com/theecitysdiner"/>
        <SocialIcon url="https://www.instagram.com/theecitysdiner/"/>
    </Flex>
  )
}

export default SocialLinks;