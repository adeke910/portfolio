import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "./shared/components/header";
import Silk from "./shared/components/silk";
import IntroSection from "./app-sections/intro-section";
import Skills from "./app-sections/skills";
import Footer from "./app-sections/contact";
import Catalogue from "./app-sections/catalogue";
import Profile from "./app-sections/profile";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function App() {
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(".page-transition--inner", {
      yPercent: 0,
      duration: 0.2,
    })
      .to(".page-transition--inner", {
        yPercent: -100,
        duration: 0.2,
      })
      .to(".page-transition", {
        yPercent: -100,
      });
  });

  return (
    <div className="relative ">
      <div className="absolute inset-0">
        <Silk
          speed={5}
          scale={1}
          color="#7F676D"
          noiseIntensity={1.5}
          rotation={0}
        />
      </div>
      <div className="relative z-10 h-screen w-screen p-4 md:p-10 bg-secondary/70 flex flex-1 ">
        <div className=" absolute inset-x-4 top-4 z-30 md:inset-x-10 md:top-10">
          <Header />
        </div>

        <div
          className="flex flex-1 flex-col no-scrollbar h-full overflow-y-auto scroll-smooth  gradient(to_bottom,transparent_0,transparent_5.75rem,rgba(0,0,0,0.35)_7.75rem,black_10.5rem,black_calc(100%-5rem),transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,transparent_0,transparent_5.75rem,rgba(0,0,0,0.35)_7.75rem,black_10.5rem,black_calc(100%-5rem),transparent_100%)] px-2 md:px-4 lg:px-6"
          data-scroll-container="true"
        >
          <div className="page-transition w-screen h-screen fixed top-0 left-0 bg-transparent z-5">
            <div className="page-transition--inner w-screen h-screen fixed top-0 left-0 bg-transparent z-5 translate-y-full"></div>
          </div>
          <div className="flex flex-1 flex-col">
            <IntroSection />
            <Profile />
            <Catalogue />
            <Skills />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
