import { projects } from "@/projects";
import { Heading, SimpleGrid } from "@chakra-ui/react";
import Project from "../components/Project";

export const metadata = {
  title: "Projects • @foxy4096",
  description: "A list of my projects",
}

const page = () => {
  return (
    <>
      <Heading textAlign={'center'}>Projects</Heading>
      <SimpleGrid minChildWidth='350px' spacing='40px' mt={6}>
        {projects.map((project) => (
          <Project project={project} key={project.name} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default page;
