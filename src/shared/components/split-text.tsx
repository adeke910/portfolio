import React, { useRef, useEffect, useState, useCallback } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText as GSAPSplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
import { getScrollContainer } from "../lib/scroll";

gsap.registerPlugin(ScrollTrigger, GSAPSplitText, useGSAP);

export interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  ease?: string | ((t: number) => number);
  splitType?: "chars" | "words" | "lines" | "words, chars";
  from?: gsap.TweenVars;
  to?: gsap.TweenVars;
  threshold?: number;
  rootMargin?: string;
  trigger?: "scroll" | "hover";
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "a";
  href?: string;
  textAlign?: React.CSSProperties["textAlign"];
  onLetterAnimationComplete?: () => void;
  onClick?: () => void;
}

const SplitText: React.FC<SplitTextProps> = ({
  text,
  className = "",
  delay = 50,
  duration = 1.25,
  ease = "power3.out",
  splitType = "chars",
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  threshold = 0.1,
  rootMargin = "-100px",
  trigger = "scroll",
  textAlign = "center",
  tag = "p",
  href,
  onLetterAnimationComplete,
  onClick,
}) => {
  const ref = useRef<HTMLElement>(null);
  const animationCompletedRef = useRef(false);
  const onCompleteRef = useRef(onLetterAnimationComplete);
  const splitInstanceRef = useRef<GSAPSplitText | null>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);
  const [fontsLoaded, setFontsLoaded] = useState<boolean>(() => {
    if (typeof document === "undefined") return false;
    return document.fonts.status === "loaded";
  });

  useEffect(() => {
    onCompleteRef.current = onLetterAnimationComplete;
  }, [onLetterAnimationComplete]);

  useEffect(() => {
    if (fontsLoaded) return;

    document.fonts.ready.then(() => {
      setFontsLoaded(true);
    });
  }, [fontsLoaded]);

  const cleanupAnimation = useCallback(() => {
    tweenRef.current?.kill();
    tweenRef.current = null;

    try {
      splitInstanceRef.current?.revert();
    } catch {}

    splitInstanceRef.current = null;
  }, []);

  const getTargets = useCallback(
    (self: GSAPSplitText) => {
      let targets: Element[] = [];

      if (splitType.includes("chars") && self.chars.length)
        targets = self.chars;
      if (!targets.length && splitType.includes("words") && self.words.length)
        targets = self.words;
      if (!targets.length && splitType.includes("lines") && self.lines.length)
        targets = self.lines;
      if (!targets.length) targets = self.chars || self.words || self.lines;

      return targets;
    },
    [splitType],
  );

  const runHoverAnimation = useCallback(() => {
    if (!ref.current || !text || !fontsLoaded) return;
    const el = ref.current;

    cleanupAnimation();
    const splitInstance = new GSAPSplitText(el, {
      type: splitType,
      smartWrap: true,
      autoSplit: splitType === "lines",
      linesClass: "split-line",
      wordsClass: "split-word",
      charsClass: "split-char",
      reduceWhiteSpace: false,
    });

    splitInstanceRef.current = splitInstance;
    const targets = getTargets(splitInstance);
    gsap.set(targets, {
      display: "inline-block",
      willChange: "transform, opacity",
    });

    tweenRef.current = gsap.fromTo(
      targets,
      { ...from },
      {
        ...to,
        duration,
        ease,
        stagger: delay / 1000,
        force3D: true,
        onComplete: () => {
          cleanupAnimation();
          onCompleteRef.current?.();
        },
      },
    );
  }, [
    cleanupAnimation,
    delay,
    duration,
    ease,
    fontsLoaded,
    from,
    getTargets,
    splitType,
    text,
    to,
  ]);

  useGSAP(
    () => {
      if (!ref.current || !text || !fontsLoaded || trigger !== "scroll") return;
      if (animationCompletedRef.current) return;

      cleanupAnimation();
      const el = ref.current;
      const scroller = getScrollContainer();
      const startPct = (1 - threshold) * 100;
      const marginMatch = /^(-?\d+(?:\.\d+)?)(px|em|rem|%)?$/.exec(rootMargin);
      const marginValue = marginMatch ? parseFloat(marginMatch[1]) : 0;
      const marginUnit = marginMatch ? marginMatch[2] || "px" : "px";
      const sign =
        marginValue === 0
          ? ""
          : marginValue < 0
            ? `-=${Math.abs(marginValue)}${marginUnit}`
            : `+=${marginValue}${marginUnit}`;
      const start = `top ${startPct}%${sign}`;

      const splitInstance = new GSAPSplitText(el, {
        type: splitType,
        smartWrap: true,
        autoSplit: splitType === "lines",
        linesClass: "split-line",
        wordsClass: "split-word",
        charsClass: "split-char",
        reduceWhiteSpace: false,
        onSplit: (self: GSAPSplitText) => {
          const targets = getTargets(self);

          tweenRef.current = gsap.fromTo(
            targets,
            { ...from },
            {
              ...to,
              duration,
              ease,
              stagger: delay / 1000,
              scrollTrigger: {
                trigger: el,
                scroller: scroller ?? undefined,
                start,
                once: true,
                fastScrollEnd: true,
                anticipatePin: 0.4,
              },
              onComplete: () => {
                animationCompletedRef.current = true;
                onCompleteRef.current?.();
              },
              willChange: "transform, opacity",
              force3D: true,
            },
          );

          return tweenRef.current;
        },
      });

      splitInstanceRef.current = splitInstance;
      return () => {
        ScrollTrigger.getAll().forEach((st) => {
          if (st.trigger === el) st.kill();
        });
        cleanupAnimation();
      };
    },
    {
      dependencies: [
        text,
        delay,
        duration,
        ease,
        splitType,
        JSON.stringify(from),
        JSON.stringify(to),
        threshold,
        rootMargin,
        fontsLoaded,
        trigger,
      ],
      scope: ref,
    },
  );

  useEffect(() => {
    return () => cleanupAnimation();
  }, [cleanupAnimation]);

  const renderTag = () => {
    const style: React.CSSProperties = {
      textAlign,
      overflow: "hidden",
      display: "inline-block",
      whiteSpace: "normal",
      wordWrap: "break-word",
      willChange: "transform, opacity",
    };
    const classes = `split-parent ${className}`;
    const hoverHandlers =
      trigger === "hover"
        ? {
            onMouseEnter: () => runHoverAnimation(),
            onFocus: () => runHoverAnimation(),
          }
        : {};

    if (tag === "a") {
      return (
        <a
          ref={ref as React.RefObject<HTMLAnchorElement>}
          style={style}
          className={classes}
          href={href}
          {...hoverHandlers}
          onClick={onClick}
        >
          {text}
        </a>
      );
    }

    if (tag === "h1")
      return (
        <h1
          ref={ref as React.RefObject<HTMLHeadingElement>}
          style={style}
          className={classes}
          {...hoverHandlers}
        >
          {text}
        </h1>
      );
    if (tag === "h2")
      return (
        <h2
          ref={ref as React.RefObject<HTMLHeadingElement>}
          style={style}
          className={classes}
          {...hoverHandlers}
        >
          {text}
        </h2>
      );
    if (tag === "h3")
      return (
        <h3
          ref={ref as React.RefObject<HTMLHeadingElement>}
          style={style}
          className={classes}
          {...hoverHandlers}
        >
          {text}
        </h3>
      );
    if (tag === "h4")
      return (
        <h4
          ref={ref as React.RefObject<HTMLHeadingElement>}
          style={style}
          className={classes}
          {...hoverHandlers}
        >
          {text}
        </h4>
      );
    if (tag === "h5")
      return (
        <h5
          ref={ref as React.RefObject<HTMLHeadingElement>}
          style={style}
          className={classes}
          {...hoverHandlers}
        >
          {text}
        </h5>
      );
    if (tag === "h6")
      return (
        <h6
          ref={ref as React.RefObject<HTMLHeadingElement>}
          style={style}
          className={classes}
          {...hoverHandlers}
        >
          {text}
        </h6>
      );
    if (tag === "span")
      return (
        <span
          ref={ref as React.RefObject<HTMLSpanElement>}
          style={style}
          className={classes}
          {...hoverHandlers}
        >
          {text}
        </span>
      );

    return (
      <p
        ref={ref as React.RefObject<HTMLParagraphElement>}
        style={style}
        className={classes}
        {...hoverHandlers}
      >
        {text}
      </p>
    );
  };
  return renderTag();
};

export default SplitText;
