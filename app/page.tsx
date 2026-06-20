"use client";

import IntroSection from "./app-sections/intro-section";
import Skills from "./app-sections/skills";
import Contact from "./app-sections/contact";
import Catalogue from "./app-sections/catalogue";
import Profile from "./app-sections/profile";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <IntroSection />
      <Profile />
      <Catalogue />
      <Skills />
      <Contact />
    </div>
  );
}
