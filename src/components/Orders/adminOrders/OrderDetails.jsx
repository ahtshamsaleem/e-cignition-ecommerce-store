import React from 'react';
import './orderDetail.css';

const OrderDetails = ({ orderId, name, email, phone,  products, totalPrice, deliveryStatus, address }) => {
    return (
        <div className='grid grid-cols-1 w-full p-4 bg-gray-100'>
            <ul className='customCSS grid  gap-2 font-semibold justify-items-center  '>
                <li>Order ID  <span>{orderId}</span> </li>
                <li>Name  <span>{name}</span></li>
                <li>Email  <span>{email}</span></li>
                <li>Phone  <span>{phone}</span></li>
                <li>Products     <span>
                {products?.map((prod) => {
                    console.log(prod)
                return <ul key={prod.id}><li >{prod.title}  ({prod.quantity})</li></ul>
            })}
                </span></li>
                <li>Total Price  <span>{totalPrice}</span></li>
                <li>delivery status <span>{deliveryStatus}</span></li>
                <li>Address  <span>{address}</span></li>
            </ul>

           
        </div>
    );
};

export default OrderDetails;









 {/* <OrderDetail
                orderId={orderId}
                name={name}
                email={email}
                phone={phone}
                products={products}
                totalPrice={totalPrice}
                deliveryStatus={deliveryStatus}
                address={address}
            /> */}