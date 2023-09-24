import { createSlice } from '@reduxjs/toolkit';
import { products } from '../constants'



let initProdArray = products;

let initialState = {
        products: [],
        totalPrice: 0,
        isLoading: false
};


let cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setQuantity: (state, action) => {
            if (action.payload.value < 1 || action.payload.value > 5) {
                return;
            }
            state.products[action.payload.indexId].quantity = +action.payload.value;
        },

        calculatePrice: (state, action) => {
            let id = action.payload.id;
            let result = state.products.findIndex((item, index) => {
                return item.id === id;
            });

            const newPrice = state.products[result].quantity * initProdArray[id].price;
            state.products[result].price = parseInt(newPrice);
        },

        totalPrice: (state, action) => {
            let totalPrice = initialState.totalPrice;
            for (let item of state.products) {
                totalPrice = totalPrice + item.price;
            }
            state.totalPrice = totalPrice;
        },

        addToCart: (state, action) => {
            
            

            




           





















            let id = action.payload.product.id;
            let result = state.products.find((item, index) => {
                return item.id === id;
            });

            if (result === undefined) {
                state.products.push(action.payload.product);


                const newArr = [];
                state.products.forEach((item) => {
                    return    newArr.push(item.id);
                })


                // localStorage.setItem('cartItem', newArr);


            } else {
                let resultIndex = state.products.findIndex((item, index) => {
                    return item.id === id;
                });

                if (state.products[resultIndex].quantity >= 5 || action.payload.indexDb) {
                    return;
                }

                state.products[resultIndex].quantity =
                    state.products[resultIndex].quantity + 1;
            }
        },

        deleteFromCart: (state, action) => {
            state.products.splice(action.payload, 1);
        },

        emptyTheCart: (state) => {
            
            state.products = [];
            
        }

    },
});


export const { addToCart, deleteFromCart, setQuantity, totalPrice, calculatePrice, emptyTheCart } = cartSlice.actions;


export default cartSlice.reducer;





















// import { createSlice } from '@reduxjs/toolkit';

// let initialState = {
//     counter: 0,
//     incrementer:0
// }

// let CounterSlice = createSlice({
//     name: 'counters',
//     initialState,
//     reducers: {
//         increment: (state, action) => {
//             state.counter++
//         },
//         incrementBy: (state, action) => {
//             state.counter = state.counter + action.payload
//         },
//         clear: (state, action) => {
//             state.counter = 0;
//         }
//     }
// })

// export let { increment, incrementBy, clear } = CounterSlice.actions;

// export default CounterSlice.reducer;