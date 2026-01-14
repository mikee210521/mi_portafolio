import { FaFacebook  } from "react-icons/fa";
import { FaInstagramSquare  } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import styles from '@/app/page.module.css'

export default function Icons() {

    return(
        <div className={styles.icons_tools_animation} id={styles.position_icon}>
            {/*<a href="https://www.facebook.com/mike.dominguez.7921975?mibextid=LQQJ4d" target="_blank"><FaFacebook className={styles.only_icons}/></a>*/}
            {/*<a href="https://www.instagram.com/angeeelnd?igshid=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr" target="_blank"><FaInstagramSquare className={styles.only_icons}/></a>*/}
            <a href="https://www.linkedin.com/in/miguel-angel-nu%C3%B1ez-dominguez?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" data-tooltip="Angel Nuñez"><FaLinkedin className={styles.only_icons}/></a>
            <a href="https://github.com/mikee210521" target="_blank" data-tooltip="mikee210521"><FaGithub className={styles.only_icons}/></a>
        </div>
    )
}