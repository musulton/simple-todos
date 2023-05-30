import {Login} from "../../../src/screens/LoginScreen/Login";
import {showError, showLoading} from "../../../src/shared/store/app/AppAction";
import {login} from "../../../src/shared/store/login/LoginAction";
import {goToScreen} from "../../../src/navigation/NavigationHelper";
import {TODO_PATH} from "../../../src/navigation/NavigationPath";

jest
    .mock("react-redux", () => ({
        ...jest.requireActual("react-redux"),
        useDispatch: jest.fn(() => jest.fn())
    }))
    .mock("../../../src/shared/store/app/AppAction", () => ({
        showError: jest.fn(),
        showLoading: jest.fn()
    }))
    .mock("../../../src/shared/store/login/LoginAction", () => ({
        login: jest.fn()
    }))
    .mock("../../../src/navigation/NavigationHelper", () => ({
        goToScreen: jest.fn()
    }))

describe("Login", () => {
    const mockCallLogin = jest.fn();
    const mockService = jest.fn(() => ({
        callLoginService: mockCallLogin
    }))

    const mapResultToProps = Login(mockService)

    test("should return onAuthenticate and onDismissError properties", () => {
        expect(mapResultToProps)
            .toMatchObject({
                onAuthenticate: expect.any(Function),
                onDismissError: expect.any(Function)
            })
    })

    test("onAuthenticate", async () => {
        const email = "email@email.com";
        const password = "123456";

        await mapResultToProps.onAuthenticate(email, password)

        expect(showLoading).toHaveBeenCalledWith(true)
        expect(mockCallLogin).toHaveBeenCalledWith(email, password)
        expect(login).toHaveBeenCalledWith({isLoggedIn: true})
        expect(goToScreen).toHaveBeenCalledWith(TODO_PATH, true)
    })

    test("onDismissError", () => {
        mapResultToProps.onDismissError()

        expect(showError).toHaveBeenCalledWith('')
    })
});
