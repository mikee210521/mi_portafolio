import styles from "@/app/page.module.css";
import React from "react";

export default function FrancoMotors() {
    return (
        <div className={styles.things_work_container}>
            <h1 className={styles.interesting}>XTREME PARK</h1>
            <div className={styles.container_things}>
                <div className={styles.paragraph_content}>
                    <p>
                        <h3>June 2024 – Present</h3>
                        <h3 className={styles.tittle_modal_work}>Full-Stack Developer</h3>
                        <strong>Key Activities:</strong>
                        <ul>
                            <li>Developed dynamic and visually appealing interfaces using Vue.js and Material UI.</li>
                            <li>Created and optimized endpoints and REST APIs to improve system efficiency.</li>
                            <li>Analyzed and designed MySQL databases, ensuring security and performance.</li>
                            <li>Integrated external services (emailing, transactions) to automate processes.</li>
                            <li>Configured AWS environments and implemented security and performance enhancements.</li>
                        </ul>
                        <strong>Technologies:</strong> Vue.js | PHP | Laravel | JavaScript | MySQL | AWS | Material UI | HTML | CSS | Sass
                    </p>
                </div>
                <div className={styles.img_modal} id={styles.franco_img}></div>
            </div>
        </div>
    );
}