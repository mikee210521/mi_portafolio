'use client'
import styles from '@/app/page.module.css'
import React from "react";
import Modal from "@/components/modal/Modal";
import Agmiscelaneos from "@/components/experience/Agmiscelaneos";
import FrancoMotors from "@/components/experience/FrancoMotors";
import Quirocenter from "@/components/experience/Quirocenter";

export default function Experience() {
    const [openModal,setOpenModal] =
        React.useState(false);

    const [openModal2,setOpenModal2] =
        React.useState(false);

    const [openModal3,setOpenModal3] =
        React.useState(false);

    const onSubmit = (event) => {
        event.preventDefault();
        setOpenModal(false);
        setOpenModal2(false);
        setOpenModal3(false);
        setOpenScroll(close);
    };

    const [openScroll,setOpenScroll] =
        React.useState(false);

    const close = () =>{
        setOpenScroll(false);
        document.body.style.overflow = 'unset';
    }
    const open = () => {
        setOpenScroll(true);
        document.body.style.overflow = 'hidden';

    }

    return(
        <div id={styles.work_container_full} className={styles.home_container}>
            <div className={styles.working_experience} id={styles.working_1}>
                <h3
                    className={styles.name_work}
                    onClick={
                        ()=> {
                            setOpenModal(true);
                            setOpenScroll(open);
                        }
                    }
                >AGmiscelaneos</h3>
            </div>
            <div className={styles.working_experience} id={styles.working_2}>
                <h3
                    className={styles.name_work}
                    onClick={
                        ()=> {
                            setOpenModal2(true);
                            setOpenScroll(open);
                        }
                    }
                >FrancoMotors</h3>
            </div>
            <div className={styles.working_experience} id={styles.working_3}>
                <h3
                    className={styles.name_work}
                    onClick={
                        ()=> {
                            setOpenModal3(true);
                            setOpenScroll(open);
                        }
                    }
                >Quirocenter</h3>
            </div>

            {/*modal's components*/}

            { openModal && (
                <Modal onSubmit={onSubmit}>
                    <div className={styles.work_container}>
                        <Agmiscelaneos onSubmit={onSubmit} />
                    </div>
                </Modal>
            )}
            { openModal2 && (
                <Modal onSubmit={onSubmit}>
                    <div className={styles.work_container}>
                        <FrancoMotors onSubmit={onSubmit} />
                    </div>
                </Modal>
            )}
            { openModal3 && (
                <Modal onSubmit={onSubmit}>
                    <div className={styles.work_container}>
                        <Quirocenter onSubmit={onSubmit} />
                    </div>
                </Modal>
            )}
        </div>
    )

}