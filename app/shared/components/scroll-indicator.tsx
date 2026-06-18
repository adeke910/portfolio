"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

const SCROLL_CONTAINER_SELECTOR = '[data-scroll-container="true"]';

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

export function ScrollIndicator() {
  const [progress, setProgress] = useState(0);
  const [showArrow, setShowArrow] = useState(false);
  const hasScrolledOnceRef = useRef(false);
  const pathname = usePathname();

  useEffect(() => {
    hasScrolledOnceRef.current = false;

    const isFirstPage = pathname === "/home" || pathname === "/";
    const getActiveTarget = (): ScrollTarget =>
      document.querySelector<HTMLElement>(SCROLL_CONTAINER_SELECTOR) ?? window;

    let target: ScrollTarget = getActiveTarget();

    const handleScroll = () => {
      const activeTarget = getActiveTarget();
      if (activeTarget !== target) {
        target.removeEventListener("scroll", handleScroll);
        target = activeTarget;
        target.addEventListener("scroll", handleScroll, { passive: true });
      }

      const { scrollTop, docHeight } = getScrollMetrics(target);
      const scrollable = docHeight > 0;
      if (scrollTop > 0) {
        hasScrolledOnceRef.current = true;
      }

      const percentage = scrollable
        ? Math.min((scrollTop / docHeight) * 100, 100)
        : 0;

      setProgress(percentage);
      setShowArrow(isFirstPage && !hasScrolledOnceRef.current);
    };

    target.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    const observer = new MutationObserver(handleScroll);
    observer.observe(document.body, { childList: true, subtree: true });
    handleScroll();

    return () => {
      target.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      observer.disconnect();
    };
  }, [pathname]);

  return (
    <>
      <div className="scroll-indicator">
        <div
          className="scroll-indicator__progress"
          style={{
            transform: `translateY(${-(100 - progress)}%)`,
          }}
        />
      </div>

      <svg
        id="banner-arrow-svg"
        width="376"
        height="111"
        viewBox="0 0 376 111"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`scroll-arrow${showArrow ? " scroll-arrow--visible" : ""}`}
        aria-hidden="true"
      >
        <path
          className="svg-arrow svg-arrow-1"
          d="M1 1V39.9286L188 110V70.6822L1 1Z"
        />
        <path
          className="svg-arrow svg-arrow-2"
          d="M375 1V39.9286L188 110V70.6822L375 1Z"
        />
      </svg>
    </>
  );
}
