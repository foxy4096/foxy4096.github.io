import "../styles/globals.css";
import { Navbar } from "../components/Navbar";
import About from "../components/About";
import Work from "../components/Work";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Navbar />
      <Component {...pageProps} />
      <About/>
      <Work/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default MyApp;
