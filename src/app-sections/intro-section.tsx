import { ArrowUpRight, Mail } from "lucide-react";
import { Button, ButtonTextClone } from "@/shared/components/ui/button";
import { Badge } from "../shared/components/ui/badge";
import { PROFILE, STACKS } from "@/shared/lib/data";
import ScrollArrow from "@/shared/components/scroll-arrow";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function IntroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "bottom 70%",
          end: "bottom 10%",
          scrub: 1,
        },
      });

      tl.fromTo(
        ".slide-up-fade",
        { y: 0 },
        { y: -150, opacity: 0, stagger: 0.02 },
      );
    },
    { scope: containerRef },
  );
  return (
    <section className="relative overflow-hidden" id="home">
      <ScrollArrow />
      <div
        className="h-[90vh] min-h-[530px] max-md:pb-10 flex justify-between items-center max-md:flex-col"
        ref={containerRef}
      >
        <div className="max-md:grow max-md:flex flex-col justify-center items-start max-w-[544px]">
          <div className="flex flex-col gap-2 items-start">
            <h1 className="font-barlow-condensed font-medium tracking-tight leading-[.75] md:text-[120px] text-[80px] slide-up-fade">
              <span className=" text-primary">FRONTEND</span>
              <br />
              <span className=" text-primary-foreground pl-12">ENGINEER</span>
            </h1>

            <p className="mt-2 text-base leading-relaxed font-mono slide-up-fade">
              {PROFILE.welcomeText}
            </p>
          </div>
          <div className="mt-4 flex flex-wrap items-center  gap-2 justify-start ">
            {STACKS.map(({ name, Icon }) => (
              <Badge variant="outline" key={name} className="slide-up-fade">
                <Icon />
                {name}
              </Badge>
            ))}
          </div>
          <Button
            variant="banner"
            asChild
            className="mt-9 slide-up-fade"
            style={{
              translate: "none",
              rotate: "none",
              scale: "none",
              transform: "translate(0px, 0px)",
              opacity: 1,
            }}
          >
            <a href={`mailto:${PROFILE.email}`}>
              <span className="absolute top-[200%] left-0 right-0 h-full bg-white rounded-[50%] group-hover/button:top-0 transition-all duration-500 scale-150">
                <Mail className="size-4" />
              </span>
              <span className="z-1 flex items-center gap-2">
                Work With Me <Mail className="size-4" />
              </span>
            </a>
          </Button>
          <div className="flex items-center gap-2 mt-3 ">
            <Button
              variant="link"
              asChild
              className="p-0 gap-0 text-primary hover:text-primary/80 slide-up-fade"
            >
              <a
                href={
                  PROFILE.links.find((link) => link.text === "CV")?.url ?? "#"
                }
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
