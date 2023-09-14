import React from 'react';
import Cart from '../Cart/Cart';
import ContactData from './ContactData';

const Checkout = () => {
    return (
        <>
            
            <div className='overflow-x-hidden '>
                <Cart>
                    <ContactData />
                </Cart>
            </div>
        </>
    );
};

export default Checkout;
