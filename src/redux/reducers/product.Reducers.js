import * as actionType from '../constants/product.Constants';

export const getProductReducer = (state = { Product: [] }, action) => {
    switch (action.type) {
        case actionType.GET_PRODUCT_SUCCESS:
            return { Product: action.payload }

        case actionType.GET_PRODUCT_FAIL:
            return { error: action.payload }

        default:
            return state
    }

}

