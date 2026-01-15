import styles from "@/app/page.module.css";
import React from "react";

export default function Agmiscelaneos() {
    return (
        <div className={styles.things_work_container}>
            <h1 className={styles.interesting}>AGmiscelaneos</h1>
            <div className={styles.container_things}>
                <div className={styles.paragraph_content}>
                    <p>
                        <h3>August 2022 – June 2024</h3>
                        <h3 className={styles.tittle_modal_work}>Web Developer</h3>
                        <strong>Key Activities:</strong>
                        <ul>
                            <li>Developed interactive and visually appealing components to enhance user experience.</li>
                            <li>Maintained and optimized the server supporting data collection, ensuring a smooth and secure flow of information.</li>
                            <li>Created and optimized endpoints to efficiently handle frontend requests, improving system performance and speed.</li>
                            <li>Managed and optimized databases to ensure data integrity and availability, implementing security and backup practices.</li>
                        </ul>
                        <strong>Technologies:</strong> React.js | JavaScript | HTML | CSS | Bootstrap | Material UI | MySQL | Figma | GitHub | NPM | Notion
                    </p>
                </div>
                <div className={styles.img_modal} id={styles.ag_img}></div>
            </div>
        </div>
    );
}