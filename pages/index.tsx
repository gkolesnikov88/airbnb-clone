import Head from 'next/head'
import Header from '../components/Header'
import Banner from '../components/Banner'

export default function Home() {
  return (
    <main
      className={``}
    >
      <Head>
        <title>AIRBNB</title>
      </Head>

     <Header/>
     
     <Banner />
    </main>
  )
}
