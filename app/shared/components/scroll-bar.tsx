"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { getScrollContainer } from "../lib/scroll";

type ScrollTarget = Window | HTMLElement;

function getScrollMetrics(target: ScrollTarget) {
  if (!(target instanceof HTMLElement)) {
    return {
      scrollTop: window.scrollY,
      docHeight: document.documentElement.scrollHeight - window.innerHeight,
    };
  }

  return {
    scrollTop: target.scrollTop,
    docHeight: target.scrollHeight - target.clientHeight,
  };
}

export function ScrollBar() {
  const [progress, setProgress] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    const scrollContainer = getScrollContainer();
    const target: ScrollTarget = scrollContainer ?? window;

    const handleScroll = () => {
      const { scrollTop, docHeight } = getScrollMetrics(target);
      const percentage =
        docHeight > 0 ? Math.min((scrollTop / docHeight) * 100, 100) : 0;
      setProgress(percentage);
    };
    target.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    handleScroll();

    return () => {
      target.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [pathname]);

  return (
    <div className="scroll-bar">
      <div
        className="scroll-bar__progress"
        style={{
          transform: `translateY(${-(100 - progress)}%)`,
        }}
      />
    </div>
  );
}
