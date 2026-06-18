import HeroSection from "../shared/components/hero-section";

export default function Home() {
  return (
    <div
      data-scroll-container="true"
      className="no-scrollbar flex flex-col gap-8 p-8 overflow-y-auto h-full md:gap-12 md:p-12 lg:gap-16 lg:p-16 min-h-0 flex-1"
    >
      <HeroSection />
      <HeroSection />
      <HeroSection />
      <HeroSection />
      <div className="flex flex-1 flex-col justify-center items-start max-w-[544px]">
        <div className="flex flex-col gap-2 items-start">
          <h2 className="font-anton text-4xl font-medium tracking-[-0.08em] leading-[.75] sm:text-[80px]">
            About Me
          </h2>
        </div>
      </div>
    </div>
  );
}
