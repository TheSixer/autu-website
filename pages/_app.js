import { useRouter } from "next/router";
import { IntlProvider } from "react-intl";
import { SessionProvider } from 'next-auth/react';
import en from "@/lang/en.json";
import zh from "@/lang/zh.json";
import '@/styles/globals.css'
import 'react-toastify/dist/ReactToastify.css';

const messages = {
  en,
  zh,
};

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  const { locale } = useRouter();

  return (
    <SessionProvider
      options={{
        staleTime: 0,
        refetchInterval: 0
      }}
      session={pageProps.session}
    >
      <IntlProvider locale={locale} messages={messages[locale]}>
        <Component {...pageProps} />
      </IntlProvider>
    </SessionProvider>
  );
}
