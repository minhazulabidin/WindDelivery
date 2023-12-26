const getItem = () => {
    let shoppingCart = {};
    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('windDelivery');
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart);
    }
    return shoppingCart;
}
const addToLs = id => {
    let shoppingCart = getItem();
    // add quantity
    const quantity = shoppingCart[id];
    if (!quantity) {
        shoppingCart[id] = 1;
    }
    else {
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;
    }
    localStorage.setItem('windDelivery', JSON.stringify(shoppingCart));
}

const deleteFromLs = id => {
    const shoppingCart = getItem();
    if (id in shoppingCart) {
        delete shoppingCart[id];
        localStorage.setItem('windDelivery', JSON.stringify(shoppingCart));
    }
};

const deleteShoppingCart = () => {
    localStorage.removeItem('windDelivery');
}
export { addToLs, getItem, deleteFromLs, deleteShoppingCart }