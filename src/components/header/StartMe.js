import Image from "next/image";
import styles from '@/app/page.module.css'
import  photo1 from "../../../public/assets/photo1.png"

export default function StarMe(){

    return(
        <div className={styles.home_container}>
            <p className={styles.txt_me}>
                <b className={styles.tittle}>Hello!</b>
                <br/> I am a
                <b className={styles.interesting}> Full-Stack Developer </b>,
                I enjoy learning new technologies and staying active through exercise, walking, reading, dancing, and listening to music.
            </p>
            <Image
                src={photo1}
                className={styles.photo}
                alt="Picture of the author"
            />
        </div>
    )
}