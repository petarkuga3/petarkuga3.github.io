import React from "react";
import SectionMain from "../SectionMain";
import JobList from "./JobList";

const jobData = [
    {
        title: "Internship: Full Stack Developer, Lansweeper",
        date: "02/2023 - 06/2023",
        description: "An internship as a full stack developer within Discovery Team 1 working on the On-prem version of Lansweeper. Main tasks included:",
        tasks: [
            "Web application development using ASP.NET (frontend) and C# (backend)",
            "Bug detection and resolution using ticketing through Jira",
            "Agile collaboration and daily progress meetings within the team",
            "Controlled code management of repositories using GitKraken"
        ]
    },
    {
        title: "Administrative Clerk, Luminus",
        date: "03/2021 - 02/2023",
        description: "An administrative job as support at Luminus, Customer Care Gent. Main tasks included:",
        tasks: [
            "Managing customer dossiers (creating contracts, making corrections, ...)",
            "Forwarding documents and letters to customers"
        ]
    },
    {
        title: "Administrative Clerk, Univ. Gent",
        date: "12/2019 - 02/2020",
        description: "An administrative job as support at the department of European research projects in connection with Horizon 2020. Main tasks included:",
        tasks: [
            "Looking up and requesting employment contracts",
            "Following up on the timesheets of the research personnel",
            "Data input of hours and wages using tables and pivot tables in Excel",
            "Retrieving timesheets and cost overviews of projects from SAP"
        ]
    },
    {
        title: "Student Job: ICT Employee, Artevelde Hogeschool",
        date: "2017 - 2018",
        description: "A student job twice a week for the duration of 3 months, including two months during the summer holidays (helpdesk)."
    },
    {
        title: "Internship: Accounting Firm, Piens Mekerle Calfas",
        date: "2014",
        description: "An internship as assistant bookkeeper during the last year of my secondary education."
    }
];

// Experience Section
const ExperienceSection = () => {
    return (
        <SectionMain id="experience" className="experience-section" title="Experience">
            <JobList jobData={jobData} />
        </SectionMain>
    );
}

export default ExperienceSection;