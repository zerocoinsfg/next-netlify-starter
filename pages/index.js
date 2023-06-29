import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Zero Coins</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Zero Coins" />
        <p className="description">
          Contact
        </p>
      </main>

      <Footer />
    </div>
  )
}
