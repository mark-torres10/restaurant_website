import React from 'react';

import { Box, Link, Text } from "@chakra-ui/react";

const NavbarItem = ( {itemName, to_path='/'} ) => {
  return (
    <Box
        padding="5"
        marginLeft="5"
        _hover={{opacity: '80%'}}
    >
        <Link href={to_path}>
            <Text>{ itemName }</Text>
        </Link>
    </Box>
  )
}

export default NavbarItem;