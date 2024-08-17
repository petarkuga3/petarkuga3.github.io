import React from "react";
import picture from "../../images/profile-picture.png";

// Profile Section
const ProfileSection = (props) => {
    return(
        <section id="personal-information" class="personal-information">
            <div class="profile-pic">
                <img src={picture} alt="Profile Picture" width="160"/>
            </div>
            <div class="personal-description">
                <h2>Petar Kuga</h2>
                <h3>Junior Software Developer</h3>
                <p>Specializing in scalable web applications and full stack development.</p>
                <ul class="additional-info">
                    <li><strong>E-mail:</strong> <a href="mailto:petarkuga@gmail.com">petarkuga@gmail.com</a></li>
                    <li><strong>Phone:</strong> +32 483 03 18 60</li>
                </ul>
            </div>
        </section>
    );
}

export default ProfileSection;