import React from "react";

import styles from "./Profile.module.css";
import picture from "../../../images/profile-picture.png";

import ProfilePictureAndLinks from "./ProfilePictureAndLinks";
import PersonalDescription from "./PersonalDescription";

const ProfileSection = () => {
    return(
        <section id="profile" className={styles.profileSection}>
            <ProfilePictureAndLinks picture={picture} />
            <PersonalDescription />
        </section>
    );
}

export default ProfileSection;