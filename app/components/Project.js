import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";
import Link from "next/link";

const Project = ({ project }) => {
  return (
    <Box
      textAlign={"center"}
      border={"3px solid rgb(219, 219, 219)"}
      padding={"9"}
      rounded={"xl"}
    >
      <Heading size={"lg"} mb={3}>
          <Link href={`${project.url}`} style={{
            borderBottom: "1px solid rgb(219, 219, 219)",
          }}>{project.name}</Link>
      </Heading>
      <Text>{project.description}</Text>
    </Box>
  );
};

export default Project;
