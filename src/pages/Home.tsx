import Hero from "../components/Hero";
import Marquee from "../components/Marquee";
import FeaturedProducts from "../components/FeaturedProducts";
import Collections from "../components/Collections";
import Story from "../components/Story";
import Editorial from "../components/Editorial";
import Newsletter from "../components/Newsletter";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <FeaturedProducts />
      <Collections />
      <Story />
      <Editorial />
      <Newsletter />
    </>
  );
}
