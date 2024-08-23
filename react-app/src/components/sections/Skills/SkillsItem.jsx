import React from "react";
import styles from "./Skills.module.css";

const SkillItem = ({ id, name }) => {
    return (
        <li id={id} className={styles.skillsItem}>
            {name}
        </li>
    );
}

export default SkillItem;
