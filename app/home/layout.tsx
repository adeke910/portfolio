"use client";

import Header from "../shared/components/header";
import Silk from "../shared/components/Silk";

export default function PagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative h-full w-full">
      <div className="absolute inset-0">
        <Silk
          speed={5}
          scale={1}
          color="#7F676D"
          noiseIntensity={1.5}
          rotation={0}
        />
      </div>

      <div className="relative z-10 h-full p-4 md:p-10 bg-secondary/70 ">
        <div className="pointer-events-none absolute inset-x-4 top-4 z-30 md:inset-x-10 md:top-10">
          <div className="pointer-events-auto">
            <Header />
          </div>
        </div>

        <div
          data-scroll-container="true"
          className="no-scrollbar h-full overflow-y-auto pt-24 md:pt-30 mask-[linear-gradient(to_bottom,transparent_0,transparent_5.75rem,rgba(0,0,0,0.35)_7.75rem,black_10.5rem,black_calc(100%-5rem),transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,transparent_0,transparent_5.75rem,rgba(0,0,0,0.35)_7.75rem,black_10.5rem,black_calc(100%-5rem),transparent_100%)]  "
        >
          {children}
        </div>
      </div>
    </div>
  );
}
