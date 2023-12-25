import styles from './page.module.css'
import StartMe from '@/components/header/StartMe';
import Bar from "@/components/bar/Bar";
import Icons from "@/components/icons/Icons";
import AboutMe from "@/components/about_me/AboutMe";
import IconsTools from "@/components/icons/IconsTools";
import Experience from "@/components/experience/Experience";
import Contact from "@/components/contact/Contact";

export default function Home() {
  return (
    <main className={styles.main}>
        <div className={styles.bar}>
            <Bar/>
        </div>
        <div className={styles.description}>
         <StartMe/>
          <Icons/>
        </div>
        <section className={styles.description}>
            <h1 className={styles.tittle}>ABOUT ME</h1>
            <AboutMe/>
            <IconsTools/>
        </section>
        <section className={styles.description}>
            <h1 className={styles.tittle}>EXPERIENCE</h1>
            <Experience/>
        </section>
        <footer className={styles.description_footer}>
            <h1  className={styles.tittle}>CONTACT</h1>
            <Contact/>
        </footer>
    </main>
  )
}
