import React from "react";
import styles from "./Profile.module.css";

import { useLanguage } from "../../../features/language/LanguageContext";

const ProfileDescription = () => {
    const { translate, loading } = useLanguage();

    if (loading) return null;

    return (
        <div className={styles.ProfileDescription}>
            <h2>{translate("profile-s.name")}</h2>
            <h3>{translate("profile-s.title")}</h3>
            <p>{translate("profile-s.description").split('\n').map((line, index) => (<span key={index}>{line}<br/></span>))}</p>
            <ul className={styles.additionalInfo}>
                <li><strong>E-mail:</strong> <a href="mailto:petarkuga@gmail.com">petarkuga@gmail.com</a></li>
                <li><strong>{translate("profile-s.phone")}:</strong> +32 483 03 18 60</li>
            </ul>
        </div>
    );
};

export default ProfileDescription;