import { useEffect, useRef } from "react";

export default function ScrollBar() {
  const scrollBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollBarRef.current) {
        const { scrollHeight, clientHeight } = document.documentElement;
        const scrollableHeight = scrollHeight - clientHeight;
        const scrollY = window.scrollY;
        const scrollProgress = (scrollY / scrollableHeight) * 100;

        scrollBarRef.current.style.transform = `translateY(-${
          100 - scrollProgress
        }%)`;
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="scroll-bar">
      <div ref={scrollBarRef} className="scroll-bar__progress" />
    </div>
  );
}
