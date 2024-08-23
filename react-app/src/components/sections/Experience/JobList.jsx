import React from "react";
import JobItem from "./JobItem";

const JobList = ({ jobData }) => {
    return (
        <>
            {jobData.map((job, index) => (
                <JobItem key={index} title={job.title} date={job.date} description={job.description} tasks={job.tasks}/>
            ))}
        </>
    );
}

export default JobList;