import { products } from '../constants';
import { PopularProductCard } from '.';
import { useState } from 'react';
import ProductDetails from './productDetails/ProductDetails';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { addToCart, calculatePrice } from '../redux-slices/cart-slice';

const PopularProducts = ({txtColor}) => {
    const [showProdDetails, setShowProdDetails] = useState(false);
    const [detailsProduct, setDetailsProduct] = useState({
        imgURL: 'shoe4',
        title: 'Nike Air Jordan-01',
        price: '$200.20',
    });
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const clickHandler = (product) => {
        if (document.body.clientWidth < 1000) {
            navigate(`/product/${product.title}`);
            
        }




        setDetailsProduct(() => {
            return product;
        });
        setShowProdDetails(true);
    };










    const productsArr = products.filter((item) => {
        return item.category === 'pods'
    })


    return (
        <>
            {showProdDetails && (
                <ProductDetails
                    product={detailsProduct}
                    closeHandler={() => setShowProdDetails(false)}
                />
            )}
            <section id='products' className='max-container max-sm:mt-12 '>
                <div className='flex flex-col gap-2 justify-center items-center'>
                    <div className="flex flex-col">
                    <h2 className='text-4xl font-palanquin font-bold'>
                        Our <span className={`${txtColor}`}> Popular </span>{' '}
                        Products
                    </h2>
                    <p className='lg:max-w-lg mt-2 font-montserrat text-slate-gray'>
                        Experience top-notch quality and style with our
                        sought-after selections. Discover a world of comfort,
                        design, and value
                    </p>
                    </div>
                </div>

                <div className='mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14'>
                    {productsArr.map((product) => (
                        <PopularProductCard
                            bgGradient
                            key={product.title}
                            {...product}
                            clickHandler={() => clickHandler(product)}
                            btnHandler = {() => showDetailsBtnHandler(product)}
                            atcHandler = {() => addToCartBtnHandler(product)}
                            product={product}

                        />
                    ))}
                </div>
            </section>
        </>
    );
};

export default PopularProducts;
