import {render} from "@testing-library/react-native";

import PopupMenu from "../../../src/shared/components/PopupMenu";
import {useSelector} from "react-redux";
import {LOGIN_PATH} from "../../../src/navigation/NavigationPath";

jest.mock("react-redux", () => ({
    useSelector: jest.fn(),
    useDispatch: jest.fn()
}))

describe("PopupMenu", () => {
    test("should navigate to LOGIN_PATH when isLoggedIn is false", () => {
        useSelector.mockImplementation(() => false)
        const mockProps = {
            navigation: {
                replace: jest.fn()
            }
        }

        render(<PopupMenu {...mockProps} />)

        expect(mockProps.navigation.replace).toHaveBeenCalledWith(LOGIN_PATH)
    })
})
