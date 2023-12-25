import styles from "@/app/page.module.css";
import React from "react";
export default function Quirocenter() {
    return(
        <div className={styles.things_work_container}>
            <h1 className={styles.interesting}>Quirocenter</h1>
            <div className={styles.container_things}>
                <div className={styles.paragraph_content}>
                    <p>
                        <h3>06/2021-08/2021</h3>
                        <h3 className={styles.tittle_modal_work}>Frontend Developer</h3>
                        Collaborated on the following activities:<br/>
                        <ul>
                            <li>Create intuitive and user-friendly interface designs for both users and administrators,
                                focusing on straightforward navigation using the Vue.js framework.
                            </li>
                            <li>Develop interactive components that allow users to schedule appointments,
                                access their medical history, and view information about doctors.
                            </li>
                            <li>Implement form validations to ensure accurate data entry and prevent potential errors. </li>
                            <li>Optimize interface performance, ensuring fast loading times and an agile user experience. </li>
                            <li>Implement security measures with Firebase to safeguard the integrity and
                                confidentiality of information stored in the database.
                            </li>
                        </ul>
                    </p>
                </div>
                <div className={styles.img_modal} id={styles.quirocenter_img}></div>
            </div>
        </div>
    )
}