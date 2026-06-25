import { PROJECTS } from "@/shared/lib/data";
import { Card } from "@/shared/components/ui/card";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";
import SectionHeader from "@/shared/components/section-header";
import { Badge } from "@/shared/components/ui/badge";
import { Button } from "@/shared/components/ui/button";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Catalogue = () => {
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
    <section id="catalogue">
      <div ref={containerRef} className="pb-40">
        <SectionHeader
          sectionTitle="Catalogue"
          className="slide-up"
          sectionSubTitle="Showcasing my personal projects"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 pt-10">
          {PROJECTS.map((project) => (
            <Card key={project.title} className="justify-between gap-5">
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-50 object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>

                <p className="text-sm text-muted-foreground mb-3 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-2">
                  {project.techStack.slice(0, 3).map((tech) => (
                    <Badge
                      variant="secondary"
                      key={tech}
                      className="px-2 py-1 text-xs rounded-xs bg-primary/10 text-primary font-mono h-5"
                    >
                      {tech}
                    </Badge>
                  ))}

                  {project.techStack.length > 3 && (
                    <span className="px-2 py-1 text-xs rounded-full bg-secondary/10 text-muted-foreground">
                      +{project.techStack.length - 3} more
                    </span>
                  )}
                </div>

                <div className="flex gap-3 align-bottom">
                  <Button asChild className="flex-1">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo
                    </a>
                  </Button>
                  <Button variant="outline" className="flex-1" asChild>
                    <a
                      href={project.sourceCode}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Catalogue;
