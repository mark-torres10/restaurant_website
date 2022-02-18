import React from 'react';

import { Box, Flex, FormControl, FormLabel, FormHelperText, Input, Text } from "@chakra-ui/react";

const NewsletterSignup = () => {
  return (
    <Flex justifyContent="center" paddingBottom="10">
      <Box maxWidth="480px">
        <Text>Sign up for our newsletter!</Text>
        <FormControl paddingTop="10">
          <FormLabel htmlFor='email'>Email Address</FormLabel>
          <Input id='email' type='email' width="240px"/>
          <FormHelperText paddingTop="1" paddingBottom="2">We'll never share your email.</FormHelperText>
          <Input id='email' type='submit' value='Submit' width='80px'/>
        </FormControl>
      </Box>
    </Flex>
  )
}

export default NewsletterSignup;