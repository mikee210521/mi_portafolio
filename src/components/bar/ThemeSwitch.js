import React from 'react';
import styles from "@/app/page.module.css";

export default function ThemeSwitch({onToggle}) {

    const [isChecked, setChecked] = React.useState(false);
    const handleToggle = () => {
        setChecked(!isChecked);
        onToggle(!isChecked);
    }
    return (
        <label className={styles.switch}>
            <input type="checkbox" checked={isChecked} onChange={handleToggle} />
            <span className={styles.slider}></span>
        </label>
    );

}
