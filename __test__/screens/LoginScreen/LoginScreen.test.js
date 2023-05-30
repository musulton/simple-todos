import {render, screen} from "@testing-library/react-native";

import LoginScreen from "../../../src/screens/LoginScreen/LoginScreen";
import {useSelector} from "react-redux";
import MessageBox from "../../../src/shared/components/MessageBox";

const mockShowAlert = jest.fn();

jest
    .mock("react-redux", () => ({
        ...jest.requireActual("react-redux"),
        useSelector: jest.fn()
    }))
    .mock("../../../src/shared/components/MessageBox", () => ({
        __esModule: true,
        default: jest.fn(() => ({
            showAlert: mockShowAlert
        }))
    }))

describe("LoginScreen", () => {
    const mockAuthenticate = jest.fn();
    const mockDismissError = jest.fn();
    const mockLogin = () => ({
        onAuthenticate: mockAuthenticate,
        onDismissError: mockDismissError
    })

    test("should return correctly", () => {
        render(<LoginScreen login={mockLogin} />)

        expect(screen.toJSON()).toMatchSnapshot()
    })

    test("should show message box when error app is true", () => {
        useSelector.mockImplementation(() => true)

        render(<LoginScreen login={mockLogin} />)

        expect(MessageBox).toHaveBeenCalledWith("Error", true, expect.any(Function))
        expect(mockShowAlert).toHaveBeenCalled()
    })
})
