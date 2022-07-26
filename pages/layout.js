import Link from 'next/link';
import Header from '../components/header';
import Footer from '../components/footer';
import Head from 'next/head'

export default function Layout({ children }) {
    return (
        <>
            <Head>
                <title>Hilya&apos;s Product Design Portfolio</title>
                <meta name="description" content="Hilya's Product Design Portfolio" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header/>
            <div>
                <main>{children}</main>
            </div>
            <Footer/>
        </>
    )
}