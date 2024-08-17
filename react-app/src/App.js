import * as React from "react";
import ProfileSection from "./components/sections/ProfileSection";
import ExperienceSection from "./components/sections/Experience/ExperienceSection";
import EducationSection from "./components/sections/Education/EducationSection";
import SkillsSection from "./components/sections/Skills/SkillsSection";
import LanguagesSection from "./components/sections/Languages/LanguagesSection";
import './App.css';


function App(props) {
  return(
    <div className="App">
        <ProfileSection/>
        <ExperienceSection/>
        <EducationSection/>
        <SkillsSection/>
        <LanguagesSection/>
    </div>
  );
}

export default App;