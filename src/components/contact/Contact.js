import styles from '@/app/page.module.css'
import Ellipse22 from "@/assets/Ellipse 22.png";
import { IoIosMail } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";


export default function Contact() {
    return(
        <div className={styles.contact_container}>
            <h3 className={styles.txt_contact}>Do you have a project? Let´s talk.</h3>
            <a href="mailto:angel210521@gmail.com" className={styles.txt_mail}> <IoIosMail className={styles.icon_contact}/>angel210521@gmail.com</a>
            <a href="https://www.linkedin.com/in/miguel-angel-nu%C3%B1ez-dominguez?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" className={styles.txt_mail}><FaLinkedin className={styles.only_icons}/> Linkedin</a>
            <a href="https://github.com/mikee210521" className={styles.txt_mail}><FaGithub className={styles.only_icons}/> Github</a>
            <Image
                src={Ellipse22}
                className={styles.img_contact}
                alt="Picture of the author"
            />
        </div>
    )
}