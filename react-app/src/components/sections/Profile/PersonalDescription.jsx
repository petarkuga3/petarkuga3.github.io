import React from "react";
import styles from "./Profile.module.css";
import Navigation from "../Navigation";

const PersonalDescription = () => {
    return (
        <div className={styles.personalDescription}>
            <h2>Petar Kuga</h2>
            <h3>Junior Software Developer</h3>
            <p>
                I’m a junior software developer that enjoys building web applications and exploring both frontend and backend development. 
                During my internship at Lansweeper, I had the chance to dive into complex projects using ASP.NET and C#, which has allowed me to improved my coding skills. 
                In 2023, I studied computer programming at Hogeschool Gent, where I picked up a solid foundation in programming. 
                I’m comfortable with tools like Visual Studio, Jira, and GitKraken, and I’m always on the lookout for new things to learn. 
                Writing clean, effective code is something that is important to me, and I would love to work on existing projects. 
                <br/><br/>My personal interests include gaming, reading novels and machine learning.</p>
            <ul className={styles.additionalInfo}>
                <li><strong>E-mail:</strong> <a href="mailto:petarkuga@gmail.com">petarkuga@gmail.com</a></li>
                <li><strong>Phone:</strong> +32 483 03 18 60</li>
            </ul>

            <Navigation />
        </div>
    );
};

export default PersonalDescription;