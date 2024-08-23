import React from "react";
import SkillItem from "./SkillsItem";
import styles from "./Skills.module.css";

const SkillsCategory = ({ title, skills }) => {
    return (
        <>
            <h3>{title}:</h3>
            <ul className={styles.skillsList}>
                "{skills.map(skill => (
                    <SkillItem key={skill.id} id={skill.id} name={skill.name} />
                ))}"
            </ul>
        </>
    );
}

export default SkillsCategory;
