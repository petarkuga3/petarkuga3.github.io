import React from "react";
import SectionMain from "../SectionMain";
import LanguagesItem from "./LanguagesItem";
import styles from "./Languages.module.css";

const languagesData = [
    { language: "Dutch", progressColor: "#0078d7", progressWidth: "100%" },
    { language: "English", progressColor: "#339d25", progressWidth: "100%" },
    { language: "French", progressColor: "#ff9700", progressWidth: "50%" },
    { language: "Serbian", progressColor: "#ee4c2c", progressWidth: "90%" }
];

const LanguagesSection = () => {
    return (
        <SectionMain id="languages" className="languages-section" title="Language skills">
            <ul className={styles.languagesList}>
                {languagesData.map((item, index) => (
                    <LanguagesItem key={index} language={item.language} progressColor={item.progressColor} progressWidth={item.progressWidth}/>
                ))}
            </ul>
        </SectionMain>
    );
}

export default LanguagesSection;
