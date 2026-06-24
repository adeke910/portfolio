import { PROJECTS } from "@/shared/lib/data";
import { Card } from "@/shared/components/ui/card";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";
import SectionHeader from "@/shared/components/section-header";

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
            <Card key={project.title}>
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-50 object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>

                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary"
                    >
                      {tech}
                    </span>
                  ))}

                  {project.techStack.length > 3 && (
                    <span className="px-2 py-1 text-xs rounded-full bg-muted text-muted-foreground">
                      +{project.techStack.length - 3} more
                    </span>
                  )}
                </div>

                <div className="flex gap-3">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2 rounded-md bg-primary text-primary-foreground text-center"
                  >
                    Live Demo
                  </a>

                  <a
                    href={project.sourceCode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2 rounded-md border text-center"
                  >
                    GitHub
                  </a>
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
