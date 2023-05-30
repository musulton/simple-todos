import {render, screen, act} from "@testing-library/react-native";

import SplashScreen from "../../../src/screens/SplashScreen/SplashScreen";
import {login} from "../../../src/shared/store/login/LoginAction";
import {goToScreen} from "../../../src/navigation/NavigationHelper";
import {LOGIN_PATH, TODO_PATH} from "../../../src/navigation/NavigationPath";

const mockGetData = jest.fn()

jest
    .mock("react-redux", () => ({
        ...jest.requireActual("react-redux"),
        useDispatch: jest.fn(() => jest.fn())
    }))
    .mock("../../../src/shared/assets/images", () => ({
        enigma: "dummy/path/enigma.jpg"
    }))
    .mock("../../../src/shared/store/login/LoginAction", () => ({
        login: jest.fn()
    }))
    .mock("../../../src/navigation/NavigationHelper", () => ({
        goToScreen: jest.fn()
    }))
    .mock("../../../src/shared/utils/LocalStorage", () => ({
        __esModule: true,
        default: jest.fn(() => ({
            getData: mockGetData
        }))
    }))

describe("SplashScreen", () => {
    beforeAll(() => {
        jest.useFakeTimers();
    })

    afterAll(() => {
        jest.clearAllMocks()
    })

    test("should return correctly", () => {
        render(<SplashScreen />)

        expect(screen.toJSON()).toMatchSnapshot()
    })

    test("should navigate to TODO_PATH when has token", async () => {
        mockGetData.mockImplementation(() => true)

        render(<SplashScreen />)

        await act(() => {
            jest.runOnlyPendingTimers()
        })

        expect(login).toHaveBeenCalledWith({isLoggedIn: true})
        expect(goToScreen).toHaveBeenCalledWith(TODO_PATH, true)
    })

    test("should navigate to LOGIN_PATH when has not token", async () => {
        mockGetData.mockImplementation(() => false)

        render(<SplashScreen />)

        await act(() => {
            jest.runOnlyPendingTimers()
        })

        expect(login).toHaveBeenCalledWith({isLoggedIn: false})
        expect(goToScreen).toHaveBeenCalledWith(LOGIN_PATH, true)
    })
})
