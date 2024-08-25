import React from "react";
import SectionMain from "../SectionMain";
import SkillsCategory from "./SkillsCategory";
import styles from "./Skills.module.css";

import { useLanguage } from "../../../context/LanguageContext";

const skillsData = {
    "programmingLanguages": [
        { id: "csharp-skill", name: "C#" },
        { id: "javascript-skill", name: "JavaScript" },
        { id: "react-skill", name: "React" },
        { id: "reactnative-skill", name: "React Native" },
        { id: "nodejs-skill", name: "NodeJS" },
        { id: "python-skill", name: "Python" }
    ],
    "systemsAndWebHosting": [
        { id: "windowshosting-skill", name: "Windows Hosting" },
        { id: "linuxhosting-skill", name: "Linux Hosting" }
        /*{ id: "windowad-skill", name: "Windows AD" }*/
    ]
    /*"tools": [
        { id: "vs-tool", name: "Visual Studio" },
        { id: "sublime-tool", name: "Sublime Text" },
        { id: "excel-tool", name: "Excel" },
        { id: "jira-tool", name: "Jira" },
        { id: "gitkraken-tool", name: "GitKraken" },
    ]*/
};

const SkillsSection = () => {
    const { translate, loading } = useLanguage();

    if (loading) return null;

    return (
        <SectionMain id="skills" className={styles.skillsSection} title={translate("skills-s.title")}>
            {Object.entries(skillsData).map(([category, skills]) => (
                <SkillsCategory key={category} title={translate(`skills-s.categories.${category}`)} skills={skills} />
            ))}
        </SectionMain>
    );
}

export default SkillsSection;
