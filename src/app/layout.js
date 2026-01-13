import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] });


export default function RootLayout({ children }) {
  return (

    <html lang="en">
    <head>
      <title>Angel Nuñez</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" href="/favicon-32x32.png" />
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
      <link href="https://fonts.googleapis.com/css2?family=Suez+One&family=Sumana&display=swap" rel="stylesheet"/>
    </head>
      <body id="nomal" className={inter.className}>{children}
      <div id="modal"></div>
      </body>

    </html>
  )
}
