import {login, logout} from "../../../../src/shared/store/login/LoginAction"
import {LOGIN, LOGOUT} from "../../../../src/shared/utils/constants";

describe('login actions', () => {
    test('login', () => {
        const payload = {
            email: "email@email.com",
            password: "123456"
        }

        const action = login(payload)

        expect(action).toEqual({
            type: LOGIN,
            payload
        })
    })

    test('logout', () => {
        const action = logout()

        expect(action).toEqual({
            type: LOGOUT,
        })
    })
});
