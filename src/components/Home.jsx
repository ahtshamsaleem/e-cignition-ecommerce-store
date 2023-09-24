import React from 'react'
import { CustomerReviews, Footer, Hero, Services, SpecialOffer, Subscribe, SuperQuality } from '../sections'
import Header from './Header'
import ProductDetails from './productDetails/ProductDetails'
import PopularProducts from './PopularProducts'
import { useDispatch, useSelector } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react'
import { db } from './indexedDB'
import { products } from '../constants'
import { addToCart, calculatePrice } from '../redux-slices/cart-slice'
import { useLayoutEffect } from 'react'




const Home = () => {
    

    // const cartArr = products.filter((item) => {
    //     return item.category === 'pods'
    // })


const dispatch = useDispatch()





    

    
    useEffect(() => {
    
        console.log('HOme useeffetc moionde')
        
                    
               if (!db) {
                return 
               } else {
                const transaction = db.transaction(['products']);
                const objectStore = transaction.objectStore('products');
                const request = objectStore.get('p1');
                
                request.onsuccess = (event) => {
                    // Do something with the request.result!
                    console.log(
                        `Name for SSN 444-44-4444 is ${request.result.cart}`
                    );

                    const cartArray = request.result.cart;

                        
                    
                    const resArr = [];

                    cartArray?.forEach((item) => {
                        const res = products.filter((product) => {
                            return product.id === item;
                        })
        
                        resArr.push(res[0])

                        dispatch(addToCart({product:res[0]}));
                        dispatch(calculatePrice({id:res[0].id}));





                    })
                    


                     console.log(resArr);

                };

               }

            

               





    }, [])




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
        
        { <ToastContainer />}
        
        
      </main>
  )
}

export default Home