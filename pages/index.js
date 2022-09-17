import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <div>
        <Script
          src="https://s.pageclip.co/v1/pageclip.js"
          charset="utf-8"
          defer
        ></Script>
      <Head>
        <title>Aditya Priyadarshi</title>
        <link rel="shortcut icon" href="icon.png" type="image/x-icon" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Hero />
    </div>
  );
}
