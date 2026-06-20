"use client";

import { useRef } from "react";
import { ArrowUp } from "lucide-react";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, useGSAP);

const SCROLL_CONTAINER_SELECTOR = '[data-scroll-container="true"]';

export default function ScrollTop() {
  const btnRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();

  useGSAP(() => {
    const btn = btnRef.current;
    const scrollContainer = document.querySelector<HTMLElement>(
      SCROLL_CONTAINER_SELECTOR,
    );
    const target: Window | HTMLElement = scrollContainer ?? window;

    if (!btn) return;

    gsap.set(btn, {
      opacity: 0,
      pointerEvents: "none",
      visibility: "hidden",
    });

    const showBtn = () => {
      const scrollTop =
        target instanceof HTMLElement ? target.scrollTop : window.scrollY;

      gsap.to(btn, {
        opacity: scrollTop > 300 ? 1 : 0,
        pointerEvents: scrollTop > 300 ? "auto" : "none",
        visibility: scrollTop > 300 ? "visible" : "hidden",
        duration: 0.2,
        overwrite: true,
      });
    };

    showBtn();

    target.addEventListener("scroll", showBtn);
    window.addEventListener("resize", showBtn);

    return () => {
      target.removeEventListener("scroll", showBtn);
      window.removeEventListener("resize", showBtn);
    };
  }, [pathname]);

  const scrollToTop = () => {
    const scrollContainer = document.querySelector<HTMLElement>(
      SCROLL_CONTAINER_SELECTOR,
    );
    const target: Window | HTMLElement = scrollContainer ?? window;

    gsap.to(target, {
      duration: 1,
      scrollTo: { y: 0 },
      ease: "power3.inOut",
    });
  };

  return (
    <Button
      ref={btnRef}
      size="icon-lg"
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 z-50"
      id="scroll-top-btn"
    >
      <ArrowUp className="size-4" />
    </Button>
  );
}
