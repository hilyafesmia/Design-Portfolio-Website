import Header from "../components/header";
import Footer from "../components/footer";
import Head from "next/head";
import { GoogleAnalytics } from '@next/third-parties/google'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <meta name="description" content="Hilya's Product Design Portfolio" />
        <link rel="icon" href="/icon.svg" />
      </Head>
      <Header />
      <main>
        {children}
        <Footer />
      </main>
      <GoogleAnalytics gaId="G-3X0Z63REYJ" />
    </>
  );
}
