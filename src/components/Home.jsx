import React from 'react'
import { CustomerReviews, Footer, Hero, Services, SpecialOffer, Subscribe, SuperQuality } from '../sections'
import Header from './Header'
import ProductDetails from './productDetails/ProductDetails'
import PopularProducts from './PopularProducts'




const Home = () => {
    

    




  return (


        <main className='relative '>
        <Header />
        <section className='xl:padding-l wide:padding-r padding-b'>
          <Hero />
        </section>
        <section className='padding'>
          <PopularProducts />
        </section>
        <section className='py-12 sm:py-20'>
          <SuperQuality />
        </section>
        <section className='padding-x py-10'>
          <Services />
        </section>
        <section className='padding'>
          <SpecialOffer />
        </section>
        <section className='bg-pale-blue padding'>
          <CustomerReviews />
        </section>
        <section className='padding-x sm:py-32 py-16 w-full'>
          <Subscribe />
        </section>
        <section className=' bg-black padding-x padding-t pb-8'>
          <Footer />
        </section>

        
        
      </main>
  )
}

export default Home