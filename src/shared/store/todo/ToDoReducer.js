import {
    CHANGE_TYPE,
    SET_TODO
} from "../../utils/constants";

const initialState = {
    todo: [],
    type: 'All'
};
const ToDoReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TODO: {
            return {
                ...state,
                todo: action.payload
            };
        }
        case CHANGE_TYPE: {
            return {
                ...state,
                type: action.payload
            };
        }
        default:
            return state;
    }
}
export default ToDoReducer;
