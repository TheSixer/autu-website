import { useRouter } from "next/router";
import { IntlProvider } from "react-intl";
import en from "@/lang/en.json";
import zh from "@/lang/zh.json";
import '@/styles/globals.css'

const messages = {
  en,
  zh,
};

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  const { locale } = useRouter();

  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <Component {...pageProps} />
    </IntlProvider>
  );
}
