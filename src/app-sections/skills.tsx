import { MY_STACK } from "../shared/lib/data";
import { Card } from "../shared/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "../shared/components/ui/tooltip";
import SectionHeader from "@/shared/components/section-header";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger, useGSAP);
const Skills = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const slideUpEl = containerRef.current?.querySelectorAll(".slide-up");

      if (!slideUpEl?.length) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "bottom 80%",
          scrub: 0.5,
        },
      });

      tl.from(".slide-up", {
        opacity: 0,
        y: 40,
        ease: "none",
        stagger: 0.4,
      });
    },
    { scope: containerRef },
  );

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "bottom 20%",
          end: "bottom 10%",
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
      <div ref={containerRef} className="pb-40">
        <SectionHeader
          className="slide-up"
          sectionTitle="Skills"
          sectionSubTitle="Technologies I typically work with"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Card className="flex flex-wrap h-80 w-full ">
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
                    <technology.Icon className="size-12" />
                  </TooltipTrigger>
                  <TooltipContent>{technology.name}</TooltipContent>
                </Tooltip>
              ))}
            </div>
          </Card>
          <Card className="flex flex-wrap h-100 w-full ">
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
                    <technology.Icon className="size-12" />
                  </TooltipTrigger>
                  <TooltipContent>{technology.name}</TooltipContent>
                </Tooltip>
              ))}
            </div>
          </Card>
          <Card className="flex flex-wrap h-120 w-full ">
            <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-white/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
            <div className="relative z-10 flex max-w-7xl items-center justify-between border-b border-accent/40 pb-3">
              <span className="text-xl font-bold tracking-tight transition-colors duration-300 group-hover:text-white">
                Technical Skills
              </span>
            </div>

            <div className="relative z-10 mx-auto mt-6 grid grid-cols-3 place-items-center gap-6 text-center lg:mx-0 lg:max-w-none">
              {MY_STACK.technicalSkills.map((technology) => (
                <Tooltip key={technology.name}>
                  <TooltipTrigger>
                    <technology.Icon className="size-12" />
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
