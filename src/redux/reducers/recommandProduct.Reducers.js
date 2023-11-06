import * as actionType from '../constants/recommandProduct.Constants';

export const getRecommandedProductReducer = (state = { recommandedProduct: [] }, action) => {
    switch (action.type) {
        case actionType.GET_RECOM_PRODUCT_SUCCESS:
            return { Product: action.payload }

        case actionType.GET_RECOM_PRODUCT_FAIL:
            return { error: action.payload }

        default:
            return state
    }

}

