import styles from "@/app/page.module.css";
import React from "react";

export default function Agmiscelaneos() {
    return(
        <div className={styles.things_work_container}>
            <h1 className={styles.interesting}>AGmiscelaneos</h1>
            <div className={styles.container_things}>
                <div className={styles.paragraph_content}>
                    <p>
                        <h3>08/2022-09/2023</h3>
                        <h3 className={styles.tittle_modal_work}>Project Manager</h3>
                        Information System specifically designed for the efficient management
                        of pallets in logistics and storage environments. It features security
                        measures in both the frontend and backend to guard against potential
                        vulnerabilities and attacks. It employs intelligent algorithms to
                        optimize the arrangement of pallets, maximizing storage space and
                        facilitating efficient access in the warehouse.<br/><br/>
                        The project makes use of technologies such as React.js and Firebase
                        to ensure accessibility and efficiency of processes in AGmiscelaneos.
                    </p>
                </div>
                <div className={styles.img_modal} id={styles.ag_img}></div>
            </div>
        </div>
    )
}