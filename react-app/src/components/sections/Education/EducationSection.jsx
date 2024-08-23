import React from "react";
import SectionMain from "../SectionMain";
import EducationList from "./EducationList";

const educationData = [
    { title: "Graduate Computer Programming", yearStart: "2021", yearEnd: "2023", institution: "Higher Eductation, Hogeschool Gent, Gent" },
    { title: "Accounting/Computer Science", yearStart: "2012", yearEnd: "2014", institution: "Secundary Education, PHTI, Gent" },
    { title: "Business Management", yearStart: "2012", yearEnd: "2014", institution: "Diverse Education, PHTI, Gent" }
];

// Education Section
const EducationSection = () => {
    return (
        <SectionMain id="education" className="education-section" title="Education">
            <EducationList educationData={educationData} />
        </SectionMain>
    );
}

export default EducationSection;