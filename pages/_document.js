import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin='true'/>
        <link href="https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,300;0,400;0,800;1,300&display=swap" rel="stylesheet"/>
      </Head>
      <body style={{fontFamily: "Nunito', sans-serif"}}>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}