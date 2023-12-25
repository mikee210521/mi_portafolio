import styles from "@/app/page.module.css";
import React from "react";


export default function FrancoMotors() {
    return(
        <div className={styles.things_work_container}>
            <h1 className={styles.interesting}>FrancoMotors</h1>
            <div className={styles.container_things}>
                <div className={styles.paragraph_content}>
                    <p>
                        <h3>01/2022-06/2023</h3>
                        <h3 className={styles.tittle_modal_work}>Frontend Developer</h3>
                        Collaborated on the following activities:<br/>
                        <ul>
                            <li>Implementation of the administrator interface, ensuring the creation of
                                components with React.js.
                            </li>
                            <li>Development of a fully functional administrator interface.</li>
                            <li>Responsive design applied to the project.</li>
                            <li>Debugging and correction of any issues identified during the process. </li>
                            <li>Implementation of security measures in the frontend to guard against potential
                                vulnerabilities and attacks.
                            </li>
                            <li>Identifying opportunities to enhance the user interface in terms of usability and
                                design, implementing adjustments and updates as needed.
                            </li>
                        </ul>
                    </p>
                </div>
                <div className={styles.img_modal} id={styles.franco_img}></div>
            </div>
        </div>
    )
}