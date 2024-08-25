import React, { useState, useEffect } from 'react';

import Settings from "./components/sections/Settings";
import ProfileSection from "./components/sections/Profile/ProfileSection";
import ExperienceSection from "./components/sections/Experience/ExperienceSection";
import EducationSection from "./components/sections/Education/EducationSection";
import SkillsSection from "./components/sections/Skills/SkillsSection";
import LanguagesSection from "./components/sections/Languages/LanguagesSection";
import './App.css';

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);
  useEffect(() => window.addEventListener("resize", () => setIsMobile(window.innerWidth <= 1024)), []);

  return (
    <div className="App">
      <Settings />
      <ProfileSection />
      <div className={isMobile ? "" : "skillsAndLanguages-container"}>
        <SkillsSection />
        <LanguagesSection />
      </div>
      <ExperienceSection />
      <EducationSection />
    </div>
  );
}


export default App;
