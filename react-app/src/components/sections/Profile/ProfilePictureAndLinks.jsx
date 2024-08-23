import React from "react";
import styles from "./Profile.module.css";
import '@fortawesome/fontawesome-free/css/all.min.css';

const ProfilePicture = ({ picture }) => {
    return (
        <div className={styles.profilePicAndLinks}>
            <img src={picture} alt="Profile" width="160" />
        
            <div className={styles.profileLinks}>
                <a href="https://github.com/petarkuga3" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github" style={{color: "#ffffff"}}></i>
                </a>
                <a href="https://www.linkedin.com/in/petar-kuga-721134200/" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin" style={{color: "#0a66c2"}}></i>
                </a>
                <a href="https://www.instagram.com/plague_k95/" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-instagram" style={{color: "#e1306c"}}></i>
                </a>
            </div>

        </div>
    );
};

export default ProfilePicture;
