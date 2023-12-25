import { IoLogoJavascript } from "react-icons/io5";
import { FaHtml5 } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { ImNpm } from "react-icons/im";
import { TbBrandNextjs } from "react-icons/tb";
import { SiVuetify } from "react-icons/si";
import { FaVuejs } from "react-icons/fa6";
import { SiNotion } from "react-icons/si";
import styles from '@/app/page.module.css'
export default function IconsTools() {
    return(
        <div id={styles.all_icons_position} className={styles.icons_tools_animation}>
            <a><SiNotion className={styles.icon_tool} /></a>
            <a><IoLogoJavascript className={styles.icon_tool}/></a>
            <a><FaHtml5 className={styles.icon_tool}/></a>
            <a><FaCss3Alt className={styles.icon_tool}/></a>
            <a><SiVuetify className={styles.icon_tool}/></a>
            <a><FaVuejs className={styles.icon_tool}/></a>
            <a><FaGithub className={styles.icon_tool}/></a>
            <a><ImNpm className={styles.icon_tool}/></a>
            <a><FaReact className={styles.icon_tool}/></a>
            <a><TbBrandNextjs className={styles.icon_tool}/></a>
        </div>
    )
}