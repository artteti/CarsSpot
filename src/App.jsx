import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Gallery from "./components/Gallery";
import SeoSection from "./components/SeoSection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <div className="relative">
        <HeroSection />
      </div>
      <Gallery></Gallery>
      <SeoSection />
      <Footer />
    </>
  );
}
