import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";
import { getScrollContainer } from "../shared/lib/scroll";
import { MY_STACK } from "../shared/lib/data";
import { Card } from "../shared/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "../shared/components/ui/tooltip";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Skills = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const scroller = getScrollContainer();

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          scroller: scroller ?? undefined,
          start: "top 60%",
          end: "bottom 50%",
          toggleActions: "restart none none reverse",
          scrub: 1,
        },
      });

      tl.from(".slide-up-and-fade", {
        y: 50,
        opacity: 0,
        stagger: 0.3,
      });
    },
    { scope: containerRef },
  );

  useGSAP(
    () => {
      const scroller = getScrollContainer();

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          scroller: scroller ?? undefined,
          start: "bottom 50%",
          end: "bottom 20%",
          scrub: 1,
        },
      });

      tl.to(containerRef.current, {
        y: -150,
        opacity: 0,
      });
    },
    { scope: containerRef },
  );

  return (
    <section id="skills">
      <div
        ref={containerRef}
        className="flex flex-col gap-5 slide-up-and-fade min-h-[calc(100svh-80px)] justify-center w-full"
      >
        <div className="slide-up-and-fade flex flex-col gap-2">
          <h2 className="text-4xl md:text-6xl font-thin font-grand-slang">
            Skills
          </h2>
          <h4 className="text-2xl font-medium ">
            Technologies I typically work with
          </h4>
        </div>
        <div className=" mt-6 box-border columns-1 gap-[1em] space-y-4 md:columns-2 lg:columns-3 items-start justify-items-start slide-up-and-fade">
          <Card className="flex flex-wrap h-80 w-full">
            <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-white/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="relative z-10 flex max-w-7xl items-center justify-between border-b border-accent/40 pb-3">
              <span className="text-xl font-bold tracking-tight text-white/80 transition-colors duration-300 group-hover:text-white">
                Languages
              </span>
            </div>

            <div className="relative z-10 mx-auto mt-6 grid grid-cols-3 place-items-center gap-6 text-center lg:mx-0 lg:max-w-none">
              {MY_STACK.languages.map((technology) => (
                <Tooltip key={technology.name}>
                  <TooltipTrigger>
                    <technology.Icon className="size-14" />
                  </TooltipTrigger>
                  <TooltipContent>{technology.name}</TooltipContent>
                </Tooltip>
              ))}
            </div>
          </Card>
          <Card className="flex flex-wrap h-100 w-full">
            <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-white/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
            <div className="relative z-10 flex max-w-7xl items-center justify-between border-b border-accent/40 pb-3">
              <span className="text-xl font-bold tracking-tight text-white/80 transition-colors duration-300 group-hover:text-white">
                Tools
              </span>
            </div>

            <div className="relative z-10 mx-auto mt-6 grid grid-cols-3 place-items-center gap-6 text-center lg:mx-0 lg:max-w-none">
              {MY_STACK.tools.map((technology) => (
                <Tooltip key={technology.name}>
                  <TooltipTrigger>
                    <technology.Icon className="size-14" />
                  </TooltipTrigger>
                  <TooltipContent>{technology.name}</TooltipContent>
                </Tooltip>
              ))}
            </div>
          </Card>
          <Card className="flex flex-wrap h-120 w-full">
            <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-white/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
            <div className="relative z-10 flex max-w-7xl items-center justify-between border-b border-accent/40 pb-3">
              <span className="text-xl font-bold tracking-tight text-white/80 transition-colors duration-300 group-hover:text-white">
                Technical Skills
              </span>
            </div>

            <div className="relative z-10 mx-auto mt-6 grid grid-cols-3 place-items-center gap-6 text-center lg:mx-0 lg:max-w-none">
              {MY_STACK.technicalSkills.map((technology) => (
                <Tooltip key={technology.name}>
                  <TooltipTrigger>
                    <technology.Icon className="size-14" />
                  </TooltipTrigger>
                  <TooltipContent>{technology.name}</TooltipContent>
                </Tooltip>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
