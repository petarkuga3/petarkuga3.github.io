import React from "react";

// Languages Section
const LanguagesSection = (props) => {
    return(
        <section id="languages">
            <h2>Language skills</h2>
            <ul class="languages-list">
                <li class="language-item">
                    <strong>Dutch:</strong>
                    <div class="progress-bar">
                        <div class="progress" style={{backgroundColor: '#0078d7'}}></div>
                    </div>
                </li>
                <li class="language-item">
                    <strong>English:</strong>
                    <div class="progress-bar">
                        <div class="progress" style={{backgroundColor: '#339d25'}}></div>
                    </div>
                </li>
                <li class="language-item">
                    <strong>French:</strong>
                    <div class="progress-bar">
                        <div class="progress" style={{backgroundColor: '#ff9700'}}></div>
                    </div>
                </li>
                <li class="language-item">
                    <strong>Serbian:</strong>
                    <div class="progress-bar">
                        <div class="progress" style={{backgroundColor: '#ee4c2c'}}></div>
                    </div>
                </li>
            </ul>
        </section>
    );
}

export default LanguagesSection;