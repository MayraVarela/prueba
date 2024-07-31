import type {NextPage} from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Banner from '../components/Banner'

const Home: NextPage = () => {
  return (
    <div className={`relative h-screen bg-gradient-to-b lg:h-[140vh] `}>
     
    <Head>
        <title>Home - Peliculas </title>

        <link rel="icon" href="/favicon.co" />
    </Head>

    <Header />

     <main>

    <Banner />	
      <section>
      
      </section>

     </main>
     
    </div>
  );
}
export default Home