import React from "react";

// Skills Section
const SkillsSection = (props) => {
    return(
        <section id="skills">
            <h2>Skills</h2>

            <h3>Programming Languages:</h3>
            <ul>
                "<li id="csharp-skill" class="skill-item">C#</li>
                <li id="javascript-skill" class="skill-item">JavaScript</li>
                <li id="react-skill" class="skill-item">React</li>
                <li id="reactnative-skill" class="skill-item">React Native</li>
                <li id="nodejs-skill" class="skill-item">NodeJS</li>
                <li id="python-skill" class="skill-item">Python</li>"
            </ul>

            <h3>Systems and Web Hosting:</h3>
            <ul>
                "<li id="windowshosting-skill" class="skill-item">Windows Hosting</li>
                <li id="linuxhosting-skill" class="skill-item">Linux Hosting</li>
                <li id="windowad-skill" class="skill-item">Windows AD</li>"
            </ul>

            <h3>Tools:</h3>
            <ul>
                "<li id="vs-tool" class="skill-item">Visual Studio</li>
                <li id="sublime-tool" class="skill-item">Sublime Text</li>
                <li id ="excel-tool" class="skill-item">Excel</li>
                <li id="jira-tool" class="skill-item">Jira</li>
                <li id="gitkraken-tool" class="skill-item">GitKraken</li>
                <li id="pytorch-tool" class="skill-item">PyTorch</li>"

            </ul>
        </section>
    );
}

export default SkillsSection;