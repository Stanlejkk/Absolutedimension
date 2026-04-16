import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import FeaturedProducts from "./components/FeaturedProducts";
import Collections from "./components/Collections";
import Story from "./components/Story";
import Editorial from "./components/Editorial";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-bone text-ink">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <FeaturedProducts />
        <Collections />
        <Story />
        <Editorial />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
