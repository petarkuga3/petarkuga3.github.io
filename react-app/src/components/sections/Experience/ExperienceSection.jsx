import React from "react";
import SectionMain from "../SectionMain";
import JobList from "./JobList";

import { useLanguage } from "../../../features/language/LanguageContext";

// Experience Section
const ExperienceSection = () => {
    const { translate, loading } = useLanguage();
    const jobData = translate("experience-s.jobs");

    if (loading) return null;

    return (
        <SectionMain id="experience" className="experience-section" title={translate("experience-s.title")}>
            <JobList jobData={jobData} />
        </SectionMain>
    );
}

export default ExperienceSection;