
import PRODUCTS from '../../data/dummy-data'
const initialState = {
    availableProducts: PRODUCTS,
    userProudcts: PRODUCTS.filter(product => product.ownerId === 'u1')
}

export default (state = initialState, actions) => {
    return state;
}