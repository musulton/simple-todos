import {shouldRefetch, showLoading, showError} from "../../../../src/shared/store/app/AppAction"
import {SHOW_ERROR, SHOW_LOADING, SHOULD_REFETCH} from "../../../../src/shared/utils/constants";

describe('app actions', () => {
    test('show loading action', () => {
        const loading = true;
        const action = showLoading(loading)

        expect(action).toEqual({
            type: SHOW_LOADING,
            payload: loading
        })
    })

    test('show error action', () => {
        const errMsg = "error";
        const action = showError(errMsg)

        expect(action).toEqual({
            type: SHOW_ERROR,
            payload: errMsg
        })
    })

    test('should refetch action', () => {
        const isShouldRefetch = true;
        const action = shouldRefetch(isShouldRefetch)

        expect(action).toEqual({
            type: SHOULD_REFETCH,
            payload: isShouldRefetch
        })
    })
});
