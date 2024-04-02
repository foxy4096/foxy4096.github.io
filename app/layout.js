import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { Navbar } from "@/app/components/Navbar";
import { Box, Container } from "@chakra-ui/react";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Web • @foxy4096",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <Providers>
          <Navbar />
          <Container mt={6} maxW={"1200px"}>
            <Box minH={"80vh"}>{children}</Box>
          <Footer />
          </Container>
        </Providers>
      </body>
    </html>
  );
}
