import React from 'react';
import OrderDetail from './OrderDetail';
import './orderDetail.css';

const OrderDetails = ({ orderId, name, email, phone,  products, totalPrice, deliveryStatus, address }) => {
    return (
        <div className='grid grid-cols-3 w-full p-4 bg-gray-100'>
            <ul className='customCSS grid  gap-2 font-semibold justify-items-center  '>
                <li>Order ID</li>
                <li>Name</li>
                <li>Email</li>
                <li>Phone</li>
                <li>Products</li>
                <li>Total Price</li>
                <li>delivery status</li>
                <li>Address</li>
            </ul>

            <OrderDetail
                orderId={orderId}
                name={name}
                email={email}
                phone={phone}
                products={products}
                totalPrice={totalPrice}
                deliveryStatus={deliveryStatus}
                address={address}
            />
        </div>
    );
};

export default OrderDetails;
