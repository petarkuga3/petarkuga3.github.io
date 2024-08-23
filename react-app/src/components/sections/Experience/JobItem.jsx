import React from "react";
import styles from './Experience.module.css';

const JobItem = ({ title, date, description, tasks }) => {
    return (
        <div className={styles.jobItem}>
            <h3>{title}</h3>
            <span>{date}</span>
            <p>{description}</p>
            {tasks && (
                <ul>
                    {tasks.map((task, index) => (
                        <li key={index}>● {task}</li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default JobItem;