export const getCartDataDB = (initDB, dispatch, addToCart, calculatePrice, products) => {
    initDB().then((db) => {
        const transaction = db.transaction(['products']);
        const objectStore = transaction.objectStore('products');
        const request = objectStore.get('p1');
    
        request.onsuccess = (event) => {
            let cartArray = [];
            if (request.result?.cart) {
                cartArray = request.result.cart;
            }
            const resArr = [];
            cartArray?.forEach((item) => {
                const res = products.filter((product) => {
                    return product.id === item;
                });
                
                resArr.push(res[0]);
    
                dispatch(addToCart({ product: res[0], indexDb: true }));
                dispatch(calculatePrice({ id: res[0].id }));
            });
        };
    });
}