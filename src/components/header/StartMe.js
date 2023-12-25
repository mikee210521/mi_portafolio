import Image from "next/image";
import styles from '@/app/page.module.css'
import  photo1 from "@/assets/photo1.png"

export default function StarMe(){

    return(
        <div className={styles.home_container}>
            <p className={styles.txt_me}>
                <b className={styles.tittle}>Hello!</b>
                <br/> I am a
                <b className={styles.interesting}>Web Developer </b>,
                I like to learn new technologies,
                I like to exercise, walk, read,
                dance and listen to music.
            </p>
            <Image
                src={photo1}
                className={styles.photo}
                alt="Picture of the author"
            />
        </div>
    )
}