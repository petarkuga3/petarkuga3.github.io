import React from "react";

// Education Section
const EducationSection = (props) => {
    return(
        <section id="education" class="education-section">
            <h2>Education</h2>
            <ul class="education-list">
                <li class="education-item">
                    <h3>Graduate Computer Programming</h3>
                    <span>2021 - 2023</span>
                    <span>Hogeschool Gent, Gent</span>
                </li>
                <li class="education-item">
                    <h3>Secondary Education</h3>
                    <span>2012 - 2014</span>
                    <span>Accounting/Computer Science, PHTI, Gent</span>
                </li>
                <li class="education-item">
                    <h3>Divers Education</h3>
                    <span>2010 - 2012</span>
                    <span>Business Management, PHTI, Gent</span>
                </li>
            </ul>
        </section>
    );
}

export default EducationSection;