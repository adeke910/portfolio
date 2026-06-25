import { useEffect, useState } from "react";

export default function ScrollBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const percentage =
        docHeight > 0 ? Math.min((scrollTop / docHeight) * 100, 100) : 0;

      setProgress(percentage);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

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
