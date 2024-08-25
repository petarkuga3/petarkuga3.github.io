import React from "react";
import SectionMain from "../SectionMain";
import EducationList from "./EducationList";

import { useLanguage } from "../../../context/LanguageContext";

const EducationSection = () => {
    const { translate, loading } = useLanguage();
    const educationData = translate("education-s.items");

    if (loading) return null;

    return (
        <SectionMain id="education" className="education-section" title={translate("education-s.title")}>
            <EducationList educationData={educationData} />
        </SectionMain>
    );
};

export default EducationSection;

