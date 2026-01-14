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
import { SiPhp } from "react-icons/si";
import { FaLaravel } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa6";
import { SiSass } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { FaAws } from "react-icons/fa6";
import { VscAzureDevops } from "react-icons/vsc";


import styles from '@/app/page.module.css'
export default function IconsTools() {
    return(
        <div id={styles.all_icons_position} className={styles.icons_tools_animation}>
            <a data-tooltip="React"><FaReact className={styles.icon_tool}/></a>
            <a data-tooltip="AWS"><FaAws className={styles.icon_tool}/></a>
            <a data-tooltip="Php"><SiPhp className={styles.icon_tool}/></a>
            <a data-tooltip="MySQL"><SiMysql className={styles.icon_tool}/></a>
            <a data-tooltip="Laravel"><FaLaravel className={styles.icon_tool}/></a>
            <a data-tooltip="JavaScript"><IoLogoJavascript className={styles.icon_tool}/></a>
            <a data-tooltip="Html5"><FaHtml5 className={styles.icon_tool}/></a>
            <a data-tooltip="Css3"><FaCss3Alt className={styles.icon_tool}/></a>
            <a data-tooltip="Sass"><SiSass className={styles.icon_tool}/></a>
            <a data-tooltip="Bootstrap"><FaBootstrap className={styles.icon_tool}/></a>
            <a data-tooltip="Vuetify"><SiVuetify className={styles.icon_tool}/></a>
            <a data-tooltip="Vue"><FaVuejs className={styles.icon_tool}/></a>
            <a data-tooltip="Github"><FaGithub className={styles.icon_tool}/></a>
            <a data-tooltip="AzureDevOps"><VscAzureDevops className={styles.icon_tool}/></a>
            <a data-tooltip="Npm"><ImNpm className={styles.icon_tool}/></a>
            <a data-tooltip="Next.js"><TbBrandNextjs className={styles.icon_tool}/></a>
            <a data-tooltip="Notion"><SiNotion className={styles.icon_tool} /></a>
        </div>
    )
}