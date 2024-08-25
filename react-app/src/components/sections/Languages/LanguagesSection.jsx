import React from "react";
import SectionMain from "../SectionMain";
import LanguagesItem from "./LanguagesItem";
import styles from "./Languages.module.css";

import { useLanguage } from "../../../features/language/LanguageContext";

const languagesData = [
    { languageId: "dutch", progressColor: "#0078d7", progressWidth: "100%" },
    { languageId: "english", progressColor: "#339d25", progressWidth: "100%" },
    { languageId: "french", progressColor: "#ff9700", progressWidth: "50%" },
    { languageId: "serbian", progressColor: "#ee4c2c", progressWidth: "90%" }
];

const LanguagesSection = () => {
    const { translate, loading } = useLanguage();

    if (loading) return null;

    return (    
        <SectionMain id="languages" className="languages-section" title={translate("languages-s.title")}>
            <ul className={styles.languagesList}>
                {languagesData.map((item, index) => (
                    <LanguagesItem key={index} language={translate(`languages-s.languages.${item.languageId}`)} progressColor={item.progressColor} progressWidth={item.progressWidth}/>
                ))}
            </ul>
        </SectionMain>
    );
}

export default LanguagesSection;
