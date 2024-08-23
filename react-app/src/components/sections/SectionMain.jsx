import React from "react";

// Section Main
const SectionMain = ({ id, title, children, className = "" }) => {
    return (
        <section id={id} className={`section-main ${className}`}>
            {title && <h2>{title}</h2>}
            {children}
        </section>
    );
};

export default SectionMain;