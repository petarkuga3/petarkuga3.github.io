import React from "react";
import SectionMain from "../SectionMain";
import SkillsCategory from "./SkillsCategory";
import styles from "./Skills.module.css";

const skillsData = {
    "Programming Languages": [
        { id: "csharp-skill", name: "C#" },
        { id: "javascript-skill", name: "JavaScript" },
        { id: "react-skill", name: "React" },
        { id: "reactnative-skill", name: "React Native" },
        { id: "nodejs-skill", name: "NodeJS" },
        { id: "python-skill", name: "Python" }
    ],
    "Systems and Web Hosting": [
        { id: "windowshosting-skill", name: "Windows Hosting" },
        { id: "linuxhosting-skill", name: "Linux Hosting" },
        { id: "windowad-skill", name: "Windows AD" }
    ],
    "Tools": [
        { id: "vs-tool", name: "Visual Studio" },
        { id: "sublime-tool", name: "Sublime Text" },
        { id: "excel-tool", name: "Excel" },
        { id: "jira-tool", name: "Jira" },
        { id: "gitkraken-tool", name: "GitKraken" },
        { id: "pytorch-tool", name: "PyTorch" }
    ]
};

const SkillsSection = () => {
    return (
        <SectionMain id="skills" className={styles.skillsSection} title="Skills">
            {Object.entries(skillsData).map(([category, skills]) => (
                <SkillsCategory key={category} title={category} skills={skills} />
            ))}
        </SectionMain>
    );
}

export default SkillsSection;
