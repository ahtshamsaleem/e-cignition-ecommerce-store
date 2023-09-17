import React from 'react';

const MyOrder = ({orderId, numberOfProducts, totalPrice, deliveryStatus}) => {
    return (
        <tr className='flex justify-between w-full  p-2 '>
            <td>{orderId}</td>
            <td>{numberOfProducts}</td>
            <td>{totalPrice}</td>
            <td>{deliveryStatus}</td>
        </tr>
    );
};

export default React.memo(MyOrder);
