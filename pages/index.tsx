import Head from 'next/head'
import Header from '../components/Header'
import Banner from '../components/Banner'

export default function Home({ exploreData }) {
  return (
    <div
      className={``}
    >
      <Head>
        <title>AIRBNB</title>
      </Head>

      <Header />

      <Banner />

      <main className='max-w-7xl mx-auto px-8 sm:px-16'>
        <section className='pt-6'>
          <h2 className='text-4xl font-semibold '>Explore Nearby</h2>

          {/* Get data from a server - API endpoint */}
          {exploreData?.map(item => (
            <h1>{item.location}</h1>
          ))}
        </section>
      </main>
    </div>
  )
}


export async function getStaticProps() {
  const exploreData = await fetch(`https://www.jsonkeeper.com/b/4G1G`)
    .then(res => res.json());

  return {
    props: {
      exploreData
    }
  };
}