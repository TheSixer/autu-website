import { Html, Head, Main, NextScript } from 'next/document'

export default function Document(props) {
  return (
    <Html lang="en">
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/assets/images/favicons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/assets/images/favicons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/assets/images/favicons/favicon-16x16.png" />
        <link
          href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="/assets/css/bootstrap.min.css"
          rel="stylesheet"
        />
        <link
          href="/assets/css/apton-icons.css"
          rel="stylesheet"
        />
        <link
          href="/assets/css/animate.min.css"
          rel="stylesheet"
        />
        <link
          href="/assets/css/swiper-bundle.min.css"
          rel="stylesheet"
        />
        <link
          href="/assets/css/fontawesome-all.min.css"
          rel="stylesheet"
        />
        <link
          href="/assets/css/main.min.css"
          rel="stylesheet"
        />
        <link
          href="/assets/css/style.css"
          rel="stylesheet"
        />
        <link
          href="/assets/css/responsive.css"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
