import { useGSAP } from "@gsap/react";
import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { PROFILE } from "../shared/lib/data";
import ProfileImage from "../shared/assets/icons/profile-image.svg";
import { getScrollContainer } from "../shared/lib/scroll";

gsap.registerPlugin(ScrollTrigger, useGSAP);
export default function Profile() {
  const container = React.useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const scroller = getScrollContainer();

      const tl = gsap.timeline({
        scrollTrigger: {
          id: "profile-in",
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
          id: "profile-out",
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
    <section id="profile">
      <div
        ref={container}
        className="flex flex-col gap-5 slide-up-and-fade min-h-[calc(100svh-80px)]  justify-center"
      >
        <h2 className="text-3xl md:text-4xl font-thin slide-up-and-fade font-grand-slang ">
          Profile
        </h2>
        <div className="flex md:flex-row flex-col gap-5 justify-between">
          <div className="flex flex-col gap-5 ">
            <p className="text-4xl leading-relaxed  font-semibold text-primary slide-up-and-fade">
              {PROFILE.profileText1}
            </p>
            <p className="text-2xl leading-relaxed  font-medium text-primary-foreground slide-up-and-fade">
              {PROFILE.profileText2}
            </p>
            <p className="text-xl leading-relaxed  text-primary-foreground/80 slide-up-and-fade">
              {PROFILE.profileText3}
            </p>
          </div>

          <ProfileImage className="fill-accent text-secondary stroke-primary" />
        </div>
        <div className="flex flex-wrap items-center gap-5 justify-center mt-5 slide-up-and-fade">
          {PROFILE.metrics.map(({ text, Icon, value }) => (
            <div key={text} className="flex items-center gap-2">
              <Icon className="text-primary size-14" />
              <div className="flex flex-col">
                <span className="text-2xl font-bold">{value}</span>
                <span className="text-lg font-normal font-mono">{text}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
