import React from "react";

// Experience Section
const ExperienceSection = (props) => {
    return(
      <section id="experience" class="experience-section">
        <h2>Experience</h2>
        <div class="job">
            <h3>Internship: Full Stack Developer, Lansweeper</h3>
            <span>02/2023 - 06/2023</span>
            <p>An internship as a full stack developer within Discovery Team 1 working on the On-prem version of Lansweeper. Main tasks included:</p>
            <ul>
                <li>● Web application development using ASP.NET (frontend) and C# (backend)</li>
                <li>● Bug detection and resolution using ticketing through Jira</li>
                <li>● Agile collaboration and daily progress meetings within the team</li>
                <li>● Controlled code management of repositories using GitKraken</li>
            </ul>
        </div>
        <div class="job">
            <h3>Administrative Clerk, Luminus</h3>
            <span>03/2021 - 02/2023</span>
            <p>An administrative job as support at Luminus, Customer Care Gent. Main tasks included:</p>
            <ul>
                <li>● Managing customer dossiers (creating contracts, making corrections, ...)</li>
                <li>● Forwarding documents and letters to customers</li>
            </ul>
        </div>
        <div class="job">
            <h3>Administrative Clerk, Univ. Gent</h3>
            <span>12/2019 - 02/2020</span>
            <p>An administrative job as support at the department of European research projects in connection with Horizon 2020. Main tasks included:</p>
            <ul>
                <li>● Looking up and requesting employment contracts</li>
                <li>● Following up on the timesheets of the research personnel</li>
                <li>● Data input of hours and wages using tables and pivot tables in Excel</li>
                <li>● Retrieving timesheets and cost overviews of projects from SAP</li>
            </ul>
        </div>
        <div class="job">
            <h3>Student Job: ICT Employee, Artevelde Hogeschool</h3>
            <span>2017 - 2018</span>
            <p>A student job twice a week for the duration of 3 months, including two months during the summer holidays (helpdesk).</p>
        </div>
        <div class="job">
            <h3>Internship: Accounting Firm, Piens Mekerle Calfas</h3>
            <span>2014</span>
            <p>An internship as assistant bookkeeper during the last year of my secondary education.</p>
        </div>
    </section>
    );
}

export default ExperienceSection;