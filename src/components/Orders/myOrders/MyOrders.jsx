import React, { useCallback } from 'react';
import Header from '../../Header';
import { useDispatch, useSelector } from 'react-redux';
import MyOrder from './MyOrder';
import { useEffect } from 'react';
import { fetchOrders, removeAllOrders } from '../../../redux-slices/orders-slice';
import Spinner from '../../UI/Spinner';
import { useMemo } from 'react';

const MyOrders = () => {
    const myOrders = useSelector((state) => state.orders.orders);
    const isLoading = useSelector((state) => state.orders.isLoading);
    const email = useSelector(state => state.auth.user.email)

    const dispatch = useDispatch();


    useEffect(() => {

            dispatch(fetchOrders(email));

            return () => dispatch(removeAllOrders());
        
    }, []);

    return (
        <>
            <Header />

            <section className=' w-full h-[100vh] pt-[80px] py-28 px-28 xl:px-64 bg-gradient-to-r from-teal-500/[0.4] to-cyan-500/[0.4] max-lg:p-8'>
                <div className=' h-[90%] max-md:h-[80%] mt-16 overflow-y-auto flex flex-col justify-start items-center bg-white rounded-xl overflow-hidden shadow-lg relative'>
                    {isLoading ? (
                        <div className='absolute top-[40%] '>
                            <Spinner />
                        </div>
                    ) : (
                        <>
                            <div className='py-6'>
                                <h2 className='font-bold text-3xl font-montserrat'>
                                    My Orders
                                </h2>
                            </div>

                            <div className='w-full px-10 max-md:px-2'>
                                <table className='w-full align-middle'>
                                    <tr className='font-semibold flex justify-between w-full p-2 border-b-[1px] border-black/[0.2]'>
                                        <th className='font-semibold'>
                                            Order Id
                                        </th>
                                        <th className='font-semibold'>
                                            Items Ordered
                                        </th>
                                        <th className='font-semibold'>
                                            Total Price
                                        </th>
                                        <th className='font-semibold'>
                                            Delivery Status
                                        </th>
                                    </tr>
                                    {myOrders.map((item) => {
                                        return <MyOrder {...item} />;
                                    })}
                                </table>
                            </div>
                        </>
                    )}
                </div>
            </section>
        </>
    );
};

export default React.memo(MyOrders);
