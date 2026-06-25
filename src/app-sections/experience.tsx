import { MY_EXPERIENCE } from "@/shared/lib/data";
import { Card } from "@/shared/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/shared/components/ui/tooltip";
import { Briefcase } from "lucide-react";
import SectionHeader from "@/shared/components/section-header";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Experience() {
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
          start: "bottom 50%",
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
    <section id="experience">
      <div ref={containerRef} className="py-30">
        <SectionHeader
          sectionTitle="Work Experience"
          sectionSubTitle="My professional journey"
          className="slide-up"
        />
        <div className="relative mt-6">
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-linear-to-b from-primary via-secondary to-primary"></div>
          <div className="space-y-12">
            {MY_EXPERIENCE.map((exp, i) => (
              <div className="relative flex items-start " key={i}>
                <div
                  className={`relative z-10 flex items-center justify-center w-12 h-12 rounded-xl shadow-lg mr-6 shrink-0`}
                  style={{ backgroundColor: exp.color }}
                >
                  <Briefcase />
                </div>
                <div className="flex-1">
                  <Card className="gap-0">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold font-barlow text-primary mb-2">
                          {exp.title}
                        </h3>
                        <p className="text-lg font-semibold font-barlow-condensed">
                          {exp.company}
                        </p>
                      </div>
                      <div className="text-right mt-4 md:mt-0">
                        <p className="text-sm text-muted-foreground font-barlow-condensed">
                          {exp.duration}
                        </p>
                        <p className="text-sm text-muted-foreground font-barlow-condensed">
                          {exp.location}
                        </p>
                        <span className="inline-block px-3 py-1 bg-primary/80 dark:bg-primary/20 text-primary-foreground rounded-full text-xs font-medium mt-2">
                          {exp.model}
                        </span>
                      </div>
                    </div>
                    <div className="mt-3 ml-1 grid grid-cols-6 place-items-center gap-x-3 gap-y-4  md:grid-cols-10 lg:grid-cols-20">
                      {exp.stack.map((tech) => (
                        <div
                          className="flex items-center justify-center rounded-md h-8 w-8 transition-transform duration-200 hover:scale-110 bg-white/5 dark:bg-primary/20"
                          key={tech.name}
                        >
                          <Tooltip>
                            <TooltipTrigger>
                              <tech.Icon className="size-5" />
                            </TooltipTrigger>
                            <TooltipContent>{tech.name}</TooltipContent>
                          </Tooltip>
                        </div>
                      ))}
                    </div>
                  </Card>
                </div>
              </div>
            ))}
            {/* <div className="relative flex items-start">
              <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-xl bg-green-500 shadow-lg mr-6 shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-briefcase w-6 h-6 text-white"
                >
                  <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                  <rect width="20" height="14" x="2" y="6" rx="2"></rect>
                </svg>
              </div>
              <div className="flex-1">
                <div
                  data-slot="card"
                  className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm glassmorphism border-primary/20 hover:border-primary/40 transition-all duration-300"
                >
                  <div data-slot="card-content" className="p-8">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold font-space-grotesk text-primary mb-2">
                          Full Stack Web Development Intern
                        </h3>
                        <p className="text-lg font-semibold font-dm-sans">
                          EDU VERSITY
                        </p>
                      </div>
                      <div className="text-right mt-4 md:mt-0">
                        <p className="text-sm text-muted-foreground font-dm-sans">
                          01 May 2024 - 30 Jun 2024 · 2 Mon
                        </p>
                        <p className="text-sm text-muted-foreground font-dm-sans">
                          Remote
                        </p>
                        <span className="inline-block px-3 py-1 bg-primary/20 text-primary-foreground rounded-full text-xs font-medium mt-2">
                          Remote
                        </span>
                      </div>
                    </div>
                    <p className="text-muted-foreground font-dm-sans leading-relaxed">
                      Successfully completed my Summer Internship at
                      Edu-versity. Worked on projects like Tribute Page on Dr.
                      APJ Abdul Kalam, Result Management System, and Performance
                      Management System.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative flex items-start" >
              <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-xl bg-purple-500 shadow-lg mr-6 shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-briefcase w-6 h-6 text-white"
                >
                  <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                  <rect width="20" height="14" x="2" y="6" rx="2"></rect>
                </svg>
              </div>
              <div className="flex-1">
                <div
                  data-slot="card"
                  className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm glassmorphism border-primary/20 hover:border-primary/40 transition-all duration-300"
                >
                  <div data-slot="card-content" className="p-8">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold font-space-grotesk text-primary mb-2">
                          Web Development Intern
                        </h3>
                        <p className="text-lg font-semibold font-dm-sans">
                          1 Stop Ai
                        </p>
                      </div>
                      <div className="text-right mt-4 md:mt-0">
                        <p className="text-sm text-muted-foreground font-dm-sans">
                          01 Feb 2024 - 30 Mar 2024 · 2 Mon
                        </p>
                        <p className="text-sm text-muted-foreground font-dm-sans">
                          Remote
                        </p>
                        <span className="inline-block px-3 py-1 bg-primary/20 text-primary-foreground rounded-full text-xs font-medium mt-2">
                          Remote
                        </span>
                      </div>
                    </div>
                    <p className="text-muted-foreground font-dm-sans leading-relaxed">
                      Successfully completed (Front-End Development) Internship
                      at 1Stop. Worked on projects like a 1Stop Company Website
                      Clone, Calculator WebApp, and a To-Do List Application.
                    </p>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
