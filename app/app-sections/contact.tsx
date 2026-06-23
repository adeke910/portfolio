import { useGSAP } from "@gsap/react";
import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { getScrollContainer } from "../shared/lib/scroll";
import { Button } from "../shared/components/ui/button";
import { PROFILE } from "../shared/lib/data";
gsap.registerPlugin(ScrollTrigger, useGSAP);

const Footer = () => {
  const container = React.useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
      const scroller = getScrollContainer();

      const tl = gsap.timeline({
        scrollTrigger: {
          id: "contact-in",
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
          id: "contact-out",
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
    <section id="contact">
      <div
        ref={container}
        className="relative mb-10 overflow-hidden border-t border-accent/40 backdrop-blur-xl h-30 items-center flex slide-up-and-fade"
      >
        <div className="mx-auto gap-5 flex max-w-7xl flex-col px-6 py-2 md:flex-row md:items-center md:justify-between lg:px-8">
          <div className="flex items-center">
            <p className="text-center text-xs leading-5 text-white/50">
              © 2026.
              <span className="font-medium text-white/80">
                Adekemi Bamiteko
              </span>
            </p>
          </div>
          <div className=" flex items-center gap-3">
            {PROFILE.links.map((link, i) => (
              <Button key={i} size="icon-lg" className="text-white">
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${link.text} Profile`}
                >
                  <link.Icon />
                </a>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
