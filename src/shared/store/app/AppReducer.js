import {SHOW_ERROR, SHOW_LOADING, SHOULD_REFETCH} from "../../utils/constants";

const initialState = {
    isLoading: false,
    error:'',
    isRefetch: true
};

const AppReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_LOADING: {
            return {
                ...state,
                isLoading: action.payload
            };
        }
        case SHOW_ERROR: {
            return {
                ...state,
                error: action.payload
            };
        }
        case SHOULD_REFETCH: {
            return {
                ...state,
                isRefetch: action.payload
            }
        }
        default:
            return state;
    }
}
export default AppReducer;
