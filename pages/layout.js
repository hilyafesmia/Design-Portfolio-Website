import Link from 'next/link';
import Header from '../components/header';
import Footer from '../components/footer';
import Head from 'next/head'

export default function Layout({ children }) {
    return (
        <>
            <Head>
                <title>Hilya's Product Design Portfolio</title>
                <meta name="description" content="Hilya's Product Design Portfolio" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
                <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;500;600;700&display=swap" rel="stylesheet"/>
            </Head>
            <Header/>
            <div>
                <main>{children}</main>
            </div>
            <Footer/>
        </>
    )
}