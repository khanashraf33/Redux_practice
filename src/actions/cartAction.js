//first we write the action 
//in count number we are hard coding value 
// such the count only increase by one
// but if we want to dunamically decide the amount of increament
//we use one more parameter as payload
//poduct object can be added or removed from store


export const addToCart = (product = {}) => {
    console.log(product)
    return {
        type: 'add-to-cart',
        payload: product,
    }
}

export const removeFromCart = (product = {}) => {
    return {
        type: 'remove-from-cart',
        payload: product,
    }
}


//basically this action is passed to reducer
//also we are sending product to reducer