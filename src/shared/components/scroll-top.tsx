"use client";

import { useRef } from "react";
import { ArrowUp } from "lucide-react";
import { Button } from "./ui/button";
import { useLenis } from "lenis/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function ScrollTop() {
  const btnRef = useRef<HTMLButtonElement>(null);
  const lenis = useLenis();

  const scrollToTop = () => {
    lenis?.scrollTo(0, {
      duration: 1.5,
    });
  };

  useGSAP(() => {
    const btn = btnRef.current;
    if (!btn) return;

    gsap.set(btn, {
      autoAlpha: 0,
      scale: 0.8,
      pointerEvents: "none",
    });

    const trigger = ScrollTrigger.create({
      start: 300,
      onUpdate: (self) => {
        if (self.scroll() > 300) {
          gsap.to(btn, {
            autoAlpha: 1,
            scale: 1,
            pointerEvents: "auto",
            duration: 0.3,
            ease: "power2.out",
            overwrite: "auto",
          });
        } else {
          gsap.to(btn, {
            autoAlpha: 0,
            scale: 0.8,
            pointerEvents: "none",
            duration: 0.3,
            ease: "power2.in",
            overwrite: "auto",
          });
        }
      },
    });

    return () => {
      trigger.kill();
    };
  }, []);

  return (
    <Button
      ref={btnRef}
      size="icon-lg"
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-50 shadow-lg"
      aria-label="Scroll to top"
    >
      <ArrowUp className="size-4" />
    </Button>
  );
}
