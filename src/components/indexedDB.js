let db;
export const initDB = async () => {
    
    const request = new Promise((resolve,reject) => {
        
        const dbRequest = indexedDB.open('ecig-store', 1);
        
        dbRequest.onupgradeneeded = (event) => {
            db = event.target.result;
    
            const objStore = db.createObjectStore('products', { keyPath: 'cd' });
    
            // objStore.transaction.oncomplete = (event) => {
            //     const productStore =  db.transaction('products', 'readwrite').objectStore('products');
    
            //     productStore.add({cd:'p1', cart: 'my name is shmi'});
            // }
        };
        

        dbRequest.onsuccess = (event) => {
            db = event.target.result;
            resolve(db);
        };
    })




    

    return request;
};
