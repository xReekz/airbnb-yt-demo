import React from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import Banner from '../components/Banner'
import SmallCard from '@/components/SmallCard'
import LargeCard from '@/components/LargeCard'
import MediumCard from '@/components/MediumCard'

import scrollbarHide from 'tailwind-scrollbar-hide'
import Footer from '@/components/Footer'


// This is called descructuring, instead of passing -> props and then calling -> props.exploreData  we destructure and with curly braces we simply pass exploreData
export default function Home({exploreData, cardsData}) {
  exploreData;
  return (
    // <div className="flex flex-col items-center justify-center min-h-screen py-2">
    <div>
      <Head>
        <title>My Airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      {/* Header */}
      <Header />
      {/* Banner */}
      <Banner />

      <main className='max-w-7xl mx-auto px-8 sm:px-16'>
        <section className='pt-6'>
          <h2 className='text-4xl font-bold pb-5' >Explore Nearby</h2>

          {/* API */}
          {/* Pull data from an external server - API endpoints already made - using server side rendering (Static) */}
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {exploreData.map((item) => (
              <SmallCard
                key={item.img}
                img={item.img}
                location={item.location}
                distance={item.distance} 
                // Can be destructured to if you destructure it at the map level -> exploreData.map(({img, location, distance}) => (\
                // key={img}
                // img={img}
                // location={location}
                // distance={distance}
              />
            ))}
          </div>
        </section>
              
        <section>
          <h2 className='text-4xl font-bold py-8'>Live Anywhere</h2>
          {/* Should be its own API call but since it's not returning the right data then i'm using the API above, code for the right API is commented out in case the api works again */}
          <div className='flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3'>
          {/* Example of destructured json(didn't work), compared to above example */}
          {cardsData.map((item) => (
              <MediumCard
                key={item.img}
                img={item.img}
                title={item.title} 
              />
            ))}
          </div>
        </section>

        <LargeCard 
          img="https://links.papareact.com/4cj"
          title="The Greatest Outdoors"
          description="Wishlists curated by Airbnb."
          buttonText="Get Inspired"
        />
      </main>
      
      <footer>
        <Footer />
      </footer>
      
    </div>
  )
}

// All of this is happening on the server asynchonously
export async function getStaticProps() {
  const exploreData = await fetch("https://www.jsonkeeper.com/b/4G1G").then(
    (res) => res.json()
  );

  const cardsData = await fetch("https://www.jsonkeeper.com/b/VHHT").then(
    (res) => res.json()
  );

  return {
    props: {
      exploreData,
      cardsData,
    },
  };
}