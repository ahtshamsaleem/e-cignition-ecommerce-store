import React, { useState } from 'react'
import { products } from '../../constants';
import { Footer } from '../../sections';
import Header from '../Header';
import PopularProductCard from '../PopularProductCard';
import ProductDetails from '../productDetails/ProductDetails';



const Pods = () => {
    const [showProdDetails, setShowProdDetails] = useState(false);
    const [detailsProduct, setDetailsProduct] = useState({});
    

    const clickHandler = (product) => {
        setDetailsProduct(() => {
            return product;
        });
        setShowProdDetails(true);
    };

    const flavorsArr = products.filter((item) => {
        return item.category === 'pods'
    })


    return (
        <>  
            <Header />
            {showProdDetails && (
                <ProductDetails
                    product={detailsProduct}
                    closeHandler={() => setShowProdDetails(false)}
                />
            )}
            <section id='products' className='max-container py-32'>
                <div className='flex flex-col justify-start items-center gap-2'>
                    <div className="flex flex-col">
                    <h2 className='text-4xl font-palanquin font-bold'>
                        Our <span className='text-coral-red'> Trending </span>{' '}
                        Flavors
                    </h2>
                    <p className='lg:max-w-lg mt-2 font-montserrat text-slate-gray'>
                        Experience top-notch quality and taste with our
                        sought-after selections. Discover a world of taste,
                        punch, and value
                    </p>
                    </div>
                </div>

                <div className='mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14 '>
                    {flavorsArr.map((product) => (
                        <PopularProductCard
                            key={product.title}
                            {...product}
                            clickHandler={() => clickHandler(product)}
                            product={product}
                        />
                    ))}
                </div>
            </section>

            <section className=' bg-black padding-x padding-t pb-8'>
          <Footer />
        </section>
        </>
    );
};


export default Pods