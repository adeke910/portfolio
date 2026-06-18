import HeroSection from "../shared/components/hero-section";

export default function Home() {
  return (
    <div
      className="flex flex-col gap-8 p-8 md:gap-12 md:p-12 lg:gap-16 lg:p-16 snap-y
    snap-mandatory
    scroll-smooth"
    >
      <HeroSection />
      <HeroSection />
      <HeroSection />
      <HeroSection />
      <HeroSection />
    </div>
  );
}
