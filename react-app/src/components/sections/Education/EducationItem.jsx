import React from "react";
import styles from './Education.module.css';

const EducationItem = ({ title, yearStart, yearEnd, institution }) => {
    return (
        <li className={styles.educationItem}>
            <h3>{title}</h3>
            <span>{yearStart} - {yearEnd}</span>
            <p>{institution}</p>
        </li>
    );
}

export default EducationItem;
