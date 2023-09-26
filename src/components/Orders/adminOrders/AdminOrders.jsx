import React, { useCallback } from 'react';
import Header from '../../Header';
import { useDispatch, useSelector } from 'react-redux';
import MyOrder from '../myOrders/MyOrder';
import { useEffect } from 'react';
import { fetchOrders, removeAllOrders } from '../../../redux-slices/orders-slice';
import Spinner from '../../UI/Spinner';
import { useMemo } from 'react';
import AdminOrder from './AdminOrder';
import { useState } from 'react';
import MobileAdminOrder from './MobileAdminOrder';
import { Footer } from '../../../sections';



const AdminOrders = () => {

    const [isMobile, setIsMobile] = useState(false);
    const AdminOrders = useSelector((state) => state.orders.orders);
    const isLoading = useSelector((state) => state.orders.isLoading);
    const email = useSelector(state => state.auth.user.email);

    const from = useSelector(state => state.ui.uiColor.from);
    const to = useSelector(state => state.ui.uiColor.to);

    const dispatch = useDispatch();



    

  
   



    useEffect(() => {

       


            dispatch(fetchOrders(email));
            
            return () => dispatch(removeAllOrders());
        
    }, []);

    return (
        <>
            <Header />

            <section className={`w-full h-[100vh] pt-[40px] py-8 px-0 xl:px-0 bg-gradient-to-r ${from} ${to}`}>
                <div className='w-full h-[90%] max-md:h-[80%] mt-16 overflow-y-auto flex flex-col justify-start items-center bg-white/[0.6]  overflow-hidden shadow-lg relative'>
                    {isLoading ? (
                        <div className='absolute top-[40%] '>
                            <Spinner />
                        </div>
                    ) : (
                        <>
                            <div className='py-6'>
                                <h2 className='font-bold text-3xl font-montserrat'>
                                    Admin Orders
                                </h2>
                            </div>

                            <div className='w-full  ' >
                            {
                                !isMobile && (
                                    
                                <div className='grid grid-flow-row min-w-[700px] max-lg:hidden'>
                                    <ul className='grid grid-cols-9 gap-2 text-xl font-semibold justify-items-center bg-gray-100 py-4 '>
                                        <li>Order ID</li>
                                        <li>Name</li>
                                        <li>Email</li>
                                        <li>Phone</li>
                                        <li>Products</li>
                                        <li>Total Price</li>
                                        <li>delivery status</li>
                                        <li className='col-span-2'>Address</li>
                                    </ul>


                                    {AdminOrders.map((item) => {
                                        return (
                                            <AdminOrder
                                                key={item.orderId}
                                                orderId={item.orderId}
                                                name={item.contactInfo.name}
                                                email={item.contactInfo.email}
                                                phone={item.contactInfo.phone}
                                                products={item.orderedProducts}
                                                totalPrice={item.totalPrice}
                                                deliveryStatus={'pending'}
                                                address={
                                                    item.contactInfo.address
                                                }
                                            />
                                        );
                                    })}
                                </div>
                                
                                )
                            }




                                {!isMobile && (
                                    <div className='grid lg:hidden'>
                                        <ul className='grid grid-cols-4 gap-2 text-xl font-semibold justify-items-center bg-gray-100 py-4 '>
                                            <li>Order ID</li>
                                            <li>Name</li>
                                            <li>Total Price</li>
                                            <li>Details</li>
                                            
                                        </ul>

                                        {AdminOrders.map((item) => {
                                            return (
                                                <MobileAdminOrder
                                                    key={item.orderId}
                                                    orderId={item.orderId}
                                                    name={item.contactInfo.name}
                                                    email={item.contactInfo.email}
                                                    phone={item.contactInfo.phone}
                                                    products={item.orderedProducts}
                                                    totalPrice={item.totalPrice}
                                                    deliveryStatus={'pending'}
                                                    address={
                                                        item.contactInfo.address
                                                    }
                                                        
                                                    
                                                    
                                                    
                                                />
                                            );
                                        })}
                                    </div>
                                )}

                                
                                


                            </div>
                        </>
                    )}
                </div>
            </section>

            <section className=' bg-black padding-x padding-t pb-8'>
                <Footer />
            </section>
        </>
    );
};

export default AdminOrders;
