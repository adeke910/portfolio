import Header from "./shared/components/header";
import Silk from "./shared/components/silk";
import { useTheme } from "./shared/components/theme-provider";
import IntroSection from "./app-sections/intro-section";
import Skills from "./app-sections/skills";
import Footer from "./app-sections/contact";
import Catalogue from "./app-sections/catalogue";
import Profile from "./app-sections/profile";
import Experience from "./app-sections/experience";
import { ReactLenis } from "lenis/react";
import "lenis/dist/lenis.css";

export default function App() {
  const { theme } = useTheme();

  return (
    <div>
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Silk
          speed={5}
          scale={1}
          color={theme === "dark" ? "#7F676D" : "#faf7ee4d"}
          noiseIntensity={1.5}
          rotation={0}
        />
      </div>
      {/* <div className="fixed top-4 md:top-10 left-0 right-0 z-50 px-4 md:px-10">
        <Header />
      </div> */}
      <ReactLenis
        root
        options={{
          lerp: 0.1,
          duration: 1.4,
        }}
      >
        <div className=" relative z-10 min-h-screen w-full bg-secondary/90 dark:bg-secondary/50 pt-4 md:pt-10 px-4 md:px-10">
          <Header />

          <main>
            <IntroSection />
            <Profile />
            <Catalogue />
            <Skills />
            <Experience />
            <Footer />
          </main>
        </div>
      </ReactLenis>
    </div>
  );
}
