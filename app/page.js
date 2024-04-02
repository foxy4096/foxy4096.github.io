import { Box, Center, Container, Heading, Link } from "@chakra-ui/react";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Container centerContent>
        <Image
          src="https://github.com/foxy4096.png"
          className="profile-img"
          width="230"
          height="300"
          alt="Profile Picture"
        />
        <Heading mt={6} size={"2xl"} fontFamily={"monospace"}>
          Hello! I am{" "}
          <span title="Aditya Priyadarshi" className="jolly">
            Aditya
          </span>
        </Heading>
        <span>
          aka{" "}
          <Link
            href="https://github.com/foxy4096"
            target="_blank"
            fontFamily={"monospace"}
            fontSize={"md"}
          >
            @foxy4096
          </Link>{" "}
          🦊
        </span>
        <Box mt={3} fontFamily={"monospace"} fontSize={"md"}>
          Hello, I am A Dumb Web Developer Who Loves Django. I am also a high
          school student, who makes stuff with <code>django</code>, or at least
          try to 😓. Well nothing too fancy, I am currently learning{" "}
          <code>Rust 🦀</code>.
          <br />
          <br />I also know <code>HTML 📄</code>, <code>Python 🐍</code>,
          <code>Javascript 🌎</code>, little bit <code>CSS ✨</code>,
          <code>Java 💀</code>, <code>C# 🎮</code>.
          <br />
          <br />
          <Center>
            <small title="Yes it's sucks very much">
              Not gonna lie <code>java</code> sucks
            </small>
          </Center>
          <br />I currently work at{" "}
          <a href="https://ripledd.com/center/" target="_blank">
            @ripledd
          </a>{" "}
          and at{" "}
          <a href="https://visualway.xyz" target="_blank">
            @visualway
          </a>
        </Box>
      </Container>
    </>
  );
}
