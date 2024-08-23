import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import styles from "./Languages.module.css";

const LanguagesItem = ({ language, progressColor, progressWidth }) => {
    const ref = useRef(null);
    const inView = useInView(ref);
    
    return (
        <li className={styles.languagesItem} ref={ref}>
            <strong>{language}:</strong>
            <div className={styles.progressBar}>
                <motion.div
                    className={styles.progress}
                    initial={{ width: 0 }}
                    animate={{ width: inView ? progressWidth : 0 }}
                    transition={{ duration: 0.5 }}
                    style={{ backgroundColor: progressColor }}
                />
            </div>
        </li>
    );
}

export default LanguagesItem;
