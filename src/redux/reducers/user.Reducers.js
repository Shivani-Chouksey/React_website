import * as actionType from '../constants/user.Constants'


export const getUserDataReducer = (state = { userData: [] }, action) => {

    switch (action.type) {
        case actionType.USER_LOGIN_SUCCESS:
            return { userData: action.payload }
        case actionType.USER_LOGIN_FAIL:
            return { error: action.payload }
        default:
            return state

    }

}