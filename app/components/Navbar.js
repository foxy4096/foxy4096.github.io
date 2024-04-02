"use client";
import {
  Box,
  Button,
  ButtonGroup,
  Center,
  Flex,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import Toggle from "./Toggle";
import { CiTwitter } from "react-icons/ci";

export const Navbar = () => {
  return (
    <Center>
      <Box
        border={"1px solid"}
        borderColor={["transparent", "gray", "gray"]}
        w={"fit-content"}
        p={2}
        m={2}
        rounded={"full"}
      >
        <Flex
          justifyContent={"center"}
          columnGap={20}
          wrap={"wrap"}
          align={"center"}
          fontFamily={"monospace"}
        >
          <Link href={"/"}>
            <Button
              rounded={"full"}
              leftIcon={
                <Image
                  src="https://github.com/foxy4096.png"
                  style={{ borderRadius: "100%" }}
                  width="30"
                  height="30"
                  draggable={false}
                  alt="Profile Picture"
                />
              }
              variant={"ghost"}
              size={"lg"}
            >
              {" / "}@foxy4096
            </Button>
          </Link>
          <ButtonGroup rounded={"none"} size={"sm"} variant={"ghost"}>
            <Link href={"/blog"}>
              <Button>Blog</Button>
            </Link>
            <Link href={"/projects"}>
              <Button>Projects</Button>
            </Link>
            <Link href={'https://twitter.com/foxy4096'} target="_blank">
            <Button colorScheme={"twitter"} leftIcon={<CiTwitter />}>
              Follow Me
            </Button>
            </Link>
            <Toggle />
          </ButtonGroup>
        </Flex>
      </Box>
    </Center>
  );
};
