"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React from "react";
import { ArrowUpRight, Mail } from "lucide-react";
import { Button, ButtonTextClone } from "@/app/shared/components/ui/button";
import { Badge } from "../shared/components/ui/badge";
import Link from "next/link";
import { PROFILE, STACKS } from "@/app/shared/lib/data";
import ScrollArrow from "@/app/shared/components/scroll-arrow";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function IntroSection() {
  const container = React.useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          id: "intro-in",
          trigger: container.current,
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
      const tl = gsap.timeline({
        scrollTrigger: {
          id: "intro-out",
          trigger: container.current,
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
    <section className="relative overflow-hidden" id="intro">
      <div
        className="flex items-center min-h-[calc(100svh-80px)]"
        ref={container}
      >
        <div className="max-md:grow max-md:flex flex-col justify-center items-start max-w-[544px] container">
          <ScrollArrow />

          <div className="flex flex-col gap-2 items-start">
            <h1 className="font-barlow-condensed font-medium tracking-tight leading-[.75] md:text-[120px] text-[80px]">
              <span className=" text-primary">FRONTEND</span>
              <br />
              <span className=" text-primary-foreground pl-12">ENGINEER</span>
            </h1>

            <p className="mt-2 text-base leading-relaxed font-mono text-muted-foreground slide-up-and-fade">
              {PROFILE.welcomeText}
            </p>
          </div>

          <div className="mt-4 flex flex-wrap items-center  gap-2 justify-start slide-up-and-fade">
            {STACKS.map(({ name, Icon }) => (
              <Badge variant="outline" key={name}>
                <Icon />
                {name}
              </Badge>
            ))}
          </div>
          <Button
            variant="banner"
            asChild
            className="mt-9 slide-up-and-fade"
            style={{
              translate: "none",
              rotate: "none",
              scale: "none",
              transform: "translate(0px, 0px)",
              opacity: 1,
            }}
          >
            <Link href={`mailto:${PROFILE.email}`}>
              <span className="absolute top-[200%] left-0 right-0 h-full bg-white rounded-[50%] group-hover/button:top-0 transition-all duration-500 scale-150">
                <Mail className="size-4" />
              </span>
              <span className="z-1 flex items-center gap-2">
                Work With Me <Mail className="size-4" />
              </span>
            </Link>
          </Button>
          <div className="flex items-center gap-2 mt-3 slide-up-and-fade">
            <Button
              variant="link"
              asChild
              className="p-0 gap-0 text-primary hover:text-primary/80"
            >
              <a
                href={PROFILE.links.cv}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="view resume"
                className="inline-flex items-center gap-1"
              >
                <ButtonTextClone text="Career Snapshot" />
                <ArrowUpRight className="size-4 transition-transform duration-300 group-hover/button:-translate-y-0.5 group-hover/button:translate-x-0.5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
