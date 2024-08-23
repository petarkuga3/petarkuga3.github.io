import React from "react";
import EducationItem from "./EducationItem";

const EducationList = ({ educationData }) => (
    <ul className="education-list">
        {educationData.map(( education, index ) => (
            <EducationItem key={index} title={education.title} yearStart={education.yearStart} yearEnd={education.yearEnd} institution={education.institution} />
        ))} 
    </ul>
);

export default EducationList;