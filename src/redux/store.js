import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { getProductReducer } from './reducers/product.Reducers';
import { getRecommandedProductReducer } from './reducers/recommandProduct.Reducers';
import { getUserDataReducer } from './reducers/user.Reducers';



const reducers = combineReducers({
 
    getProduct: getProductReducer,
    getRecommandedProduct: getRecommandedProductReducer,
    getUser: getUserDataReducer,

})


const middleware = [thunk]

const store = createStore(

    reducers,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;