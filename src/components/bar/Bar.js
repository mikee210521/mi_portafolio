'use client'
import React, { useState, useEffect } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import ThemeSwitch from "@/components/bar/ThemeSwitch";
import styles from '@/app/page.module.css';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.backgroundColor};
    color: ${(props) => props.theme.textColor};
  }
`;

const darkTheme = {
    backgroundColor: '#222222',
    textColor: '#F8F8F8',
}

const lightTheme ={
    backgroundColor :'#F8F8F8',
    textColor : '#444444'
}
export default function Bar({isChecked}){
    const [isDarkMode, setDarkMode] = useState(false);

    useEffect(() => {
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    }, [isDarkMode]);

    return(
        <div className={styles.bar_container}>
            <p className={styles.brand}>Angel</p>
            <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
                <GlobalStyle />
                <ThemeSwitch onToggle={(value) => setDarkMode(value)}/>
            </ThemeProvider>
        </div>
    )
}