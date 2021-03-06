import Link from "next/link";
import React, { useState } from 'react'
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import { Avatar, Button, Flex, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";

import NavbarItem from "./NavbarItem";

const SAMPLE_LOGO_PATH  = "https://foodtruckempire.com/wp-content/uploads/The-best-Greek-Restaurants-use-Greek-styling-to-signify-their-brand.jpg" // TODO(mark): get restaurant logo
const SAMPLE_RESTAURANT_NAME = "saganaki" // TODO(mark): temporary name, unsure if this is the correct name?

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    const updateMenuToggle = () => {
        const icon = showMenu ? <ChevronDownIcon/> : <ChevronUpIcon/>
        setShowMenu(!showMenu);
        return icon
    }

    const menuItemPathList = [
        {"item": "Breakfast", "path": "/breakfast"},
        {"item": "Lunch", "path": "/lunch"},
        {"item": "Dinner", "path": "/dinner"},
        {"item": "Drinks", "path": "/drinks"},
        {"item": "Specials", "path": "/specials"},
        {"item": "Sunday Buffet", "path": "/sunday-buffet"}
    ]

    return (
        <Flex
            as="header"
            bg="gray.100"
            position="fixed"
            top="0"
            w="100%"
            paddingTop="5"
            paddingBottom="5"
            paddingLeft="20"
        >
            {/* TODO(mark): fix overlay of navbar on top of page */}
            {/* TODO(mark): put logo here. */}
            {/* TODO(mark): add toggle to display navbar items, for mobile + tablet devices: https://raptis.wtf/blog/create-a-navbar-with-chakra-ui-react/*/}
            <Avatar size='2xl' name={ SAMPLE_RESTAURANT_NAME } src={ SAMPLE_LOGO_PATH } />
            <Menu>
                <MenuButton
                    as={Button}
                    rightIcon={showMenu ? <ChevronUpIcon/> : <ChevronDownIcon/>}
                    onClick={() => updateMenuToggle()}
                    marginTop="3"
                    marginLeft="4"
                >
                    Menus
                </MenuButton>
                <MenuList>
                    {menuItemPathList.map((menuItem) => (
                        <Link href={menuItem.path} passHref key={menuItem.path}>
                            <MenuItem>{menuItem.item}</MenuItem>
                        </Link>
                    ))}
                </MenuList>
            </Menu>
            <NavbarItem itemName="About Us" to_path="/"/>
            <NavbarItem itemName="Catering" to_path="/"/>
            <NavbarItem itemName="Contact Us" to_path="/contact-us"/>
            <NavbarItem itemName="Media" to_path="/"/>
            <NavbarItem itemName="Join Us!" to_path="/"/>

            {/* TODO(mark): add "Order Now" section, on the right*/}
            {/* TODO(mark): Add big "Make a reservation" section on the right */}
            {/* TODO(mark): put the "Order Now" and "Make a reservation" on right, by themselves. */}
            <NavbarItem itemName="Order Now" to_path="/"/>
            <NavbarItem itemName="Make a Reservation" to_path="/"/>
            {/* TODO(mark): add links to socials */}
        </Flex>
    )
}

export default Navbar;