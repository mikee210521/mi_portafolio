import styles from '@/app/page.module.css'
import Ellipse22 from "@/assets/Ellipse 22.png";
import Image from "next/image";


export default function Contact() {
    return(
        <div className={styles.contact_container}>
            <h3 className={styles.txt_contact}>Send your message to Angel</h3>
            <a href="mailto:angel210521@gmail.com" className={styles.txt_mail}>angel210521@gmail.com</a>
            <Image
                src={Ellipse22}
                className={styles.img_contact}
                alt="Picture of the author"
            />
        </div>
    )
}