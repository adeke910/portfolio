"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import BubbleMenu from "./BubbleMenu";
import { ModeToggle } from "./ui/mode-toggle";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const PROFILE = {
  name: "Adekemi",
  title: "Frontend Engineers",
  imageSrc: "/profile.jpeg",
  imageAlt: "Adekemi Bamiteko",
  initials: "BA",
};
const NAV_ITEMS = [
  { label: "Catalogue", href: "#catalogue" },
  { label: "Skills", href: "#skills" },
  { label: "Connect with me", href: "#connect-with-me" },
] as const;

gsap.registerPlugin(SplitText);

export default function Header() {
  const activeAnimationsRef = useRef<
    Map<HTMLAnchorElement, { split: SplitText; tween: gsap.core.Tween }>
  >(new Map());

  const animateNavItem = (link: HTMLAnchorElement) => {
    const existingAnimation = activeAnimationsRef.current.get(link);

    if (existingAnimation) {
      existingAnimation.tween.kill();
      existingAnimation.split.revert();
    }

    const split = SplitText.create(link, {
      type: "chars",
      tag: "span",
      charsClass: "nav-hover-char",
      aria: "auto",
    });

    gsap.set(split.chars, {
      display: "inline-block",
      willChange: "transform,opacity",
    });

    const tween = gsap.fromTo(
      split.chars,
      { yPercent: 110, opacity: 0 },
      {
        yPercent: 0,
        opacity: 1,
        duration: 0.4,
        stagger: 0.018,
        ease: "power3.out",
        onComplete: () => {
          split.revert();
          activeAnimationsRef.current.delete(link);
        },
      },
    );

    activeAnimationsRef.current.set(link, { split, tween });
  };

  useEffect(() => {
    const activeAnimations = activeAnimationsRef.current;

    return () => {
      activeAnimations.forEach(({ split, tween }) => {
        tween.kill();
        split.revert();
      });

      activeAnimations.clear();
    };
  }, []);

  return (
    <div className="relative h-16 w-full flex items-center justify-between px-8 md:px-12 lg:px-16 rounded-lg bg-secondary/70">
      <div className="flex items-center gap-10">
        <div className="flex items-center gap-3">
          <div className="md:hidden block">
            <BubbleMenu
              logo="BA"
              useFixedPosition
              className="md:hidden"
              style={{
                position: "static",
                left: "auto",
                right: "auto",
                top: "auto",
                padding: 0,
              }}
              menuAriaLabel="Toggle mobile navigation"
              menuBg="var(--secondary)"
              menuContentColor="var(--primary-foreground)"
              items={NAV_ITEMS.map((item) => ({
                ...item,
                hoverStyles: {
                  bgColor: "var(--accent)",
                  textColor: "var(--accent-foreground)",
                },
              }))}
            />
          </div>
          <Avatar size="lg" className="hidden md:block">
            <AvatarImage src={PROFILE.imageSrc} alt={PROFILE.imageAlt} />
            <AvatarFallback>{PROFILE.initials}</AvatarFallback>
          </Avatar>
        </div>
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-primary-foreground ">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="hover:text-foreground dark:hover:text-primary transition"
              onMouseEnter={(event) => animateNavItem(event.currentTarget)}
              onFocus={(event) => animateNavItem(event.currentTarget)}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
      <div className="flex items-center gap-2">
        <div className="flex items-center justify-center h-10 w-10  rounded-md text-center bg-primary-foreground text-xl leading-1.5 font-extrabold tracking-tight">
          <span className=" text-primary text-center">BA</span>
        </div>
        <ModeToggle />
      </div>
    </div>
  );
}
