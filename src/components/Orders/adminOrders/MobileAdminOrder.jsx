import React from 'react';
import { useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import OrderDetails from './OrderDetails';

const MobileAdminOrder = ({orderId, name, email, phone,  products, totalPrice, deliveryStatus, address }) => {




    const [showDetails, setShowDetails] = useState(false);



    const arrowDownHandler = () => {
        setShowDetails((prevState) => {
            return !prevState;
        })
    }






    return (
        <>
            <ul className='px-4  grid grid-cols-4 max-lg:grid-cols-4 gap-2 justify-items-center items-center py-2 border-b-2 '>
            <li>{orderId}</li>
            <li>{name}</li>
            <li>{totalPrice}</li>
            <li onClick={arrowDownHandler}>{!showDetails ? <IoIosArrowDown /> : <IoIosArrowUp />}</li>
        </ul>
            {showDetails && <OrderDetails orderId={orderId} name={name} email={email} phone={phone}  products={products} totalPrice={totalPrice} deliveryStatus={deliveryStatus} address={address} />}
        </>
        
    );
};

export default MobileAdminOrder;