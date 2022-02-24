import { EXAMPLE_ACTION } from "./actions"
const initialState = {
showName: false,
name: 'Serg'
}

const profileReducer = (state = initialState, action) => {
    switch (action.type){
        case EXAMPLE_ACTION:
            return {
                ...state,
                showName: !state.showName
            }
            default:
                return state;
    }
}

export default profileReducer;