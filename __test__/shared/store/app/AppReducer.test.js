import appReducer from "../../../../src/shared/store/app/AppReducer";
import {SHOW_ERROR, SHOW_LOADING, SHOULD_REFETCH} from "../../../../src/shared/utils/constants";

describe('app reducer', () => {
    test('show loading reducer', () => {
        const loading = true;

        const initialState = undefined;
        const nextState = appReducer(initialState, {
            type: SHOW_LOADING,
            payload: loading
        });

        expect(nextState).toEqual({
            error: "",
            isLoading: loading,
            isRefetch: true
        })
    })

    test('show error reducer', () => {
        const errMsg = "error";

        const initialState = undefined;
        const nextState = appReducer(initialState, {
            type: SHOW_ERROR,
            payload: errMsg
        });

        expect(nextState).toEqual({
            error: errMsg,
            isLoading: false,
            isRefetch: true
        })
    })

    test('should refetch reducer', () => {
        const isShouldRefetch = true;

        const initialState = undefined;
        const nextState = appReducer(initialState, {
            type: SHOULD_REFETCH,
            payload: isShouldRefetch
        });

        expect(nextState).toEqual({
            error: "",
            isLoading: false,
            isRefetch: isShouldRefetch
        })
    })
});
