import { GET_GISTS_FAILURE } from "./action"
import { GET_GISTS_SUCCESS } from "./action"
import { GET_GISTS_REQUEST } from "./action"

export const STATUSES = {
    IDLE: 0,
    REQUEST: 1,
    SUCCESS: 2,
    FAILURE: 3
}

const initialState = {
    gists: [],
    request: STATUSES.IDLE,
    error: null
}

const gistsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_GISTS_REQUEST:
            return {
                ...state,
                request: true,
                success: false,
                error: false

            }
        case GET_GISTS_SUCCESS:
            return {
                ...state,
                gists: action.payload,
                request: false,
                success: true,
                error: false

            }
        case GET_GISTS_FAILURE:
            return {
                ...state,
                request: false,
                success: false,
                error: true

            }
        default:
            return state;
    }
}
export default gistsReducer