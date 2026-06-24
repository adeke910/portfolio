import { PROFILE } from "../shared/lib/data";
import ProfileImage from "../shared/assets/icons/profile-image.svg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React from "react";
import SectionHeader from "@/shared/components/section-header";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Profile() {
  const container = React.useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          id: "profile-in",
          trigger: container.current,
          start: "top 70%",
          end: "bottom bottom",
          scrub: 0.5,
        },
      });

      tl.from(".slide-up-fade", {
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
          id: "profile-out",
          trigger: container.current,
          start: "bottom 50%",
          end: "bottom 10%",
          scrub: 0.5,
        },
      });

      tl.to(".slide-up-fade", {
        y: -150,
        opacity: 0,
        stagger: 0.02,
      });
    },
    { scope: container },
  );
  return (
    <section id="profile">
      <div ref={container} className="pb-40">
        <SectionHeader sectionTitle="Profile" className="slide-up-fade" />
        <div className="flex md:flex-row flex-col gap-5 justify-between">
          <div className="flex flex-col gap-20">
            <p className="text-4xl leading-relaxed  font-semibold text-primary slide-up-fade">
              {PROFILE.profileText1}
            </p>
            <p className="text-2xl leading-relaxed  font-medium text-primary-foreground slide-up-fade">
              {PROFILE.profileText2}
            </p>
            <p className="text-xl leading-relaxed  text-primary-foreground/80 slide-up-fade">
              {PROFILE.profileText3}
            </p>
          </div>
          <ProfileImage className="fill-accent text-secondary stroke-primary slide-up-fade" />
        </div>

        <div className="flex flex-wrap items-center gap-5 justify-center mt-20 ">
          {PROFILE.metrics.map(({ text, Icon, value }) => (
            <div key={text} className="flex items-center gap-2">
              <Icon className="text-primary size-14 slide-up-fade" />
              <div className="flex flex-col">
                <span className="text-2xl font-bold slide-up-fade">
                  {value}
                </span>
                <span className="text-lg font-normal font-mono slide-up-fade">
                  {text}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
