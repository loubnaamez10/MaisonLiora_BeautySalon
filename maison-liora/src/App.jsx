import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import Booking from "./components/Booking";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Faq from "./components/Faq";
import WhatsappButton from "./components/WhatsappButton";

function App() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <Services />
        <About />
        <Gallery />
        <Testimonials />
        <Faq />
        <Booking />
        <Contact />
      </main>
      <Footer />
      <WhatsappButton />
    </>
  );
}

export default App;