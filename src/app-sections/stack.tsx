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

const stackCards = [
  {
    title: "Languages",
    height: "h-80",
    items: MY_STACK.languages,
  },
  {
    title: "Tools",
    height: "h-100",
    items: MY_STACK.tools,
  },
  {
    title: "Libraries & Frameworks",
    height: "h-120",
    items: MY_STACK.Libraries,
  },
];

gsap.registerPlugin(ScrollTrigger, useGSAP);
const Stack = () => {
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
    <section id="stack">
      <div ref={containerRef} className="pt-30">
        <SectionHeader
          className="slide-up"
          sectionTitle="Stack"
          sectionSubTitle="Technologies I typically work with"
        />

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {stackCards.map(({ title, height, items }) => (
            <Card key={title} className={`flex flex-wrap w-full ${height}`}>
              <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-white/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative z-10 flex max-w-7xl items-center justify-between border-b border-accent/40 pb-3">
                <span className="text-xl font-bold tracking-tight text-primary-foreground/80 transition-colors duration-300 group-hover:text-primary-foreground">
                  {title}
                </span>
              </div>

              <div className="relative z-10 mx-auto mt-6 grid grid-cols-3 place-items-center gap-6 text-center lg:mx-0 lg:max-w-none">
                {items.map((technology) => (
                  <Tooltip key={technology.name}>
                    <TooltipTrigger>
                      <technology.Icon className="size-12" />
                    </TooltipTrigger>
                    <TooltipContent>{technology.name}</TooltipContent>
                  </Tooltip>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stack;
