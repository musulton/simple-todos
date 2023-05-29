import {LOGIN, LOGOUT} from "../../../../src/shared/utils/constants";
import loginReducer from "../../../../src/shared/store/login/LoginReducer";

describe('login reducer', () => {
    test('login', () => {
        const isLoggedIn = true;

        const initialState = undefined;
        const nextState = loginReducer(initialState, {
            type: LOGIN,
            payload: isLoggedIn
        });

        expect(nextState).toEqual({
            error: '',
            isLoggedIn
        })
    })

    test('logout', () => {
        const initialState = undefined;
        const nextState = loginReducer(initialState, {
            type: LOGOUT
        });

        expect(nextState).toEqual({
            error: '',
            isLoggedIn: false
        })
    })
});
