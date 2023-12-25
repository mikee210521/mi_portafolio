import styles from '@/app/page.module.css'
import photo1 from "@/assets/photo1.jpeg";
import photo2 from "@/assets/photo2.jpeg";
import Image from "next/image";
export default function AboutMe() {
    return(
        <div id={styles.about_me_container} className={styles.home_container}>
            <p id={styles.about_me_txt} className={styles.txt_me}>
                I am <b className={styles.interesting}>Angel Nuñez</b>,  I like to learn new technologies and
                tools that help me generate versatile solutions to problems.
                With my skills I have managed to make production processes
                efficient. <br/>I have taste and admiration for creation,
                design and creativity to do things with the imagination.
            </p>
            <div className={styles.img_grid}>
                <Image
                    src={photo1}
                    className={styles.picture_me}
                    alt="Picture of the author"
                />
                <Image
                    src={photo2}
                    className={styles.picture_me}
                    alt="Picture of the author"
                />
            </div>
        </div>
    )
}