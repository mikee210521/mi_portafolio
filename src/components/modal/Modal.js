import React from "react";
import ReactDOM from "react-dom";
import styles from '@/app/page.module.css'

export default function Modal({children,onSubmit}) {
    return ReactDOM.createPortal(
        <div
            className={styles.modal_container}
            onClick={onSubmit}
        >
            {children}
        </div>,
        document.getElementById('modal')
    );
};