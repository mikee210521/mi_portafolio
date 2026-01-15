'use client'
import styles from '@/app/page.module.css'
import React from "react";
import Modal from "@/components/modal/Modal";
import Agmiscelaneos from "@/components/experience/Agmiscelaneos";
import FrancoMotors from "@/components/experience/FrancoMotors";
import Quirocenter from "@/components/experience/Quirocenter";
import Image from "next/image";

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
                <div className={styles.txt_info}>
                    <div className="img_xp_card">
                        <Image
                            src="/assets/personajes.webp"
                            alt="Xtreme Park"
                            width={180}
                            height={140}
                            style={{ objectFit: "cover" }}
                        />
                    </div>
                    <h3 className={styles.name_work}>Xtreme Park</h3>
                    <p>Entertainment park with extreme rides and dynamic activities for the whole family...</p>
                    <button
                        className={styles.view_more_btn}
                        onClick={()=> {
                                setOpenModal(true);
                                setOpenScroll(open);
                            }}
                    >
                        Ver más
                    </button>
                </div>
            </div>
            <div className={styles.working_experience} id={styles.working_2}>
                <div className={styles.txt_info}>
                    <div>
                        <Image
                            src="/assets/pallet1.webp"
                            alt="Xtreme Park"
                            width={180}
                            height={140}
                            style={{ objectFit: "cover" }}
                        />
                    </div>
                    <h3 className={styles.name_work}>AGmiscelaneos</h3>
                    <p>Company specialized in the manufacturing, sale, and recycling of wooden pallets...</p>
                    <button
                        className={styles.view_more_btn}
                        onClick={
                            ()=> {
                                setOpenModal2(true);
                                setOpenScroll(open);
                            }}
                    >
                        Ver más
                    </button>
                </div>
            </div>
            <div className={styles.working_experience} id={styles.working_3}>
                <div className={styles.txt_info}>
                    <div>
                        <Image
                            src="/assets/colum1.webp"
                            alt="Xtreme Park"
                            width={180}
                            height={140}
                            style={{ objectFit: "cover" }}
                        />
                    </div>
                    <h3 className={styles.name_work}>Quirocenter</h3>
                    <p>Chiropractic center focused on professional treatments to relieve pain, improve mobility, and enhance quality of life...</p>
                    <button
                        className={styles.view_more_btn}
                        onClick={
                            ()=> {
                                setOpenModal3(true);
                                setOpenScroll(open);
                            }}
                    >
                        Ver más
                    </button>
                </div>
            </div>

            {/*modal's components*/}

            { openModal && (
                <Modal onSubmit={onSubmit}>
                    <div className={styles.work_container}>
                        <FrancoMotors onSubmit={onSubmit} />
                    </div>
                </Modal>
            )}
            { openModal2 && (
                <Modal onSubmit={onSubmit}>
                    <div className={styles.work_container}>
                        <Agmiscelaneos onSubmit={onSubmit} />
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