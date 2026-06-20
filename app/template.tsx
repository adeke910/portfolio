"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePathname } from "next/navigation";
import { useRef } from "react";
import Header from "./shared/components/header";
import Silk from "./shared/components/silk";
import { SCROLL_CONTAINER_SELECTOR } from "./shared/lib/scroll";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Template({ children }: { children: React.ReactNode }) {
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
    <div className="relative h-full w-full">
      <div className="absolute inset-0">
        <Silk
          speed={5}
          scale={1}
          color="#7F676D"
          noiseIntensity={1.5}
          rotation={0}
        />
      </div>

      <div className="relative z-10 h-full p-4 md:p-10 bg-secondary/70 ">
        <div className="pointer-events-none absolute inset-x-4 top-4 z-30 md:inset-x-10 md:top-10">
          <div className="pointer-events-auto">
            <Header />
          </div>
        </div>

        <div
          className="no-scrollbar h-full overflow-y-auto scroll-smooth gradient(to_bottom,transparent_0,transparent_5.75rem,rgba(0,0,0,0.35)_7.75rem,black_10.5rem,black_calc(100%-5rem),transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,transparent_0,transparent_5.75rem,rgba(0,0,0,0.35)_7.75rem,black_10.5rem,black_calc(100%-5rem),transparent_100%)]"
          data-scroll-container="true"
        >
          <div className="page-transition w-screen h-screen fixed top-0 left-0 bg-transparent z-5">
            <div className="page-transition--inner w-screen h-screen fixed top-0 left-0 bg-transparent z-5 translate-y-full"></div>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}
