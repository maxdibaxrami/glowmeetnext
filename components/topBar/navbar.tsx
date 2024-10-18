import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
  
} from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import React from 'react'
import { ChatIcon } from "./icons";
import {Badge} from "@nextui-org/badge";

export const Navbar = () => {

  return (
    <NextUINavbar style={{height:'100px'}}>
      <NavbarContent>
        <NavbarBrand>
          <p className="font-bold text-4xl my-10">Matches</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>

        <Badge content="5" color="danger" placement="bottom-left">
          <Button size="md" isIconOnly color="primary" aria-label="Like">
            <ChatIcon />
          </Button>
        </Badge>
        
        </NavbarItem>
      </NavbarContent>
    </NextUINavbar>
  );
};
