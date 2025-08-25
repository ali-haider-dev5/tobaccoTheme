import Image from "next/image";
import Hero from "@/components/Hero"
import TobaccoCarousel from "@/components/Carousel";
import TobaccoCards from "@/components/Cards";
import TobaccoSplitShowCase from "@/components/SplitShowcase"
import WorkshopStoryPanel from "@/components/WorkshopStoryPanel";
import Testimonial from "@/components/Testimonial"

export default function Home() {
  return (
    <>
      <Hero />
      <TobaccoCarousel />
      <TobaccoCards />
      <WorkshopStoryPanel />
      <TobaccoSplitShowCase />
      <Testimonial />
    </>
  );
}
