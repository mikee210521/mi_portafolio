import styles from '@/app/page.module.css'
import photo1 from "@/assets/photo1.jpeg";
import photo2 from "@/assets/photo2.jpeg";
import Image from "next/image";
export default function AboutMe() {
    return(
        <div id={styles.about_me_container} className={styles.home_container}>
            <p id={styles.about_me_txt} className={styles.txt_me}>
                I am
                <b className={styles.interesting}> Angel Nuñez</b>
                , passionate about creating efficient and scalable digital solutions. I enjoy building functional projects with a thoughtful user experience, combining logic, design, and best development practices.
                <br/>
                I am motivated by continuous learning and exploring new tools and approaches that allow me to enhance the quality, efficiency, and impact of every project.
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