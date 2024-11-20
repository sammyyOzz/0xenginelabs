import ClientSection from "@/components/sections/client-section";
import HeroSection from "@/components/sections/hero-section";
import IceBergSection from "@/components/sections/ice-berg-section";
import TestimonialSection from "@/components/sections/testimonial-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ClientSection />
      <IceBergSection />
      <TestimonialSection />
    </>
  );
}
