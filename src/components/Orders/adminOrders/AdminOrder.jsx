import React from 'react';

const AdminOrder = ({ orderId, name, email, phone,  products, totalPrice, deliveryStatus, address }) => {
    return (
        <ul className='grid grid-cols-9 max-lg:grid-cols-4 gap-2 justify-items-center items-center py-2 border-b-2 '>
            <li>{orderId}</li>
            <li>{name}</li>
            <li>{email}</li>
            <li>{phone}</li>
            <ul>{products?.map((prod) => {
                return <li key={prod.id}>{prod.title}  ({prod.quantity})</li>
            })}</ul>
            <li>{totalPrice}</li>
            <li>{deliveryStatus}</li>
            <li className='col-span-2'>{address}</li>
        </ul>
    );
};

export default AdminOrder;
