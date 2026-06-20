"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React from "react";
import { PROFILE } from "../shared/lib/data";
import { getScrollContainer } from "../shared/lib/scroll";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Catalogue = () => {
  const container = React.useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const scroller = getScrollContainer();

      const tl = gsap.timeline({
        scrollTrigger: {
          id: "catalogue-in",
          trigger: container.current,
          scroller: scroller ?? undefined,
          start: "top 70%",
          end: "bottom bottom",
          scrub: 0.5,
        },
      });

      tl.from(".slide-up-and-fade", {
        y: 150,
        opacity: 0,
        stagger: 0.05,
      });
    },
    { scope: container },
  );

  useGSAP(
    () => {
      const scroller = getScrollContainer();

      const tl = gsap.timeline({
        scrollTrigger: {
          id: "catalogue-out",
          trigger: container.current,
          scroller: scroller ?? undefined,
          start: "bottom 50%",
          end: "bottom 10%",
          scrub: 0.5,
        },
      });

      tl.to(".slide-up-and-fade", {
        y: -150,
        opacity: 0,
        stagger: 0.02,
      });
    },
    { scope: container },
  );

  return (
    <section id="catalogue" className="pb-100">
      <div ref={container}>
        <h2 className="text-4xl md:text-6xl font-thin mb-20 slide-up-and-fade font-grand-slang ">
          Catalogue
        </h2>
        <div className="flex items-center justify-between gap-5">
          <div className="flex flex-col gap-5">
            <p className="text-4xl leading-relaxed font-mono font-semibold text-primary slide-up-and-fade">
              {PROFILE.profileText1}
            </p>
            <p className="text-2xl leading-relaxed font-mono font-medium text-muted-foreground slide-up-and-fade">
              {PROFILE.profileText2}
            </p>
            <p className="text-xl leading-relaxed font-mono text-muted-foreground slide-up-and-fade">
              {PROFILE.profileText3}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Catalogue;
