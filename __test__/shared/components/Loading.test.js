import {render, screen} from "@testing-library/react-native";

import Loading from "../../../src/shared/components/Loading";
import {useSelector} from "react-redux";

jest.mock("react-redux", () => ({
    useSelector: jest.fn(() => true)
}))

describe("Loading", () => {
    test("should render correctly when loading", () => {
        render(<Loading />)

        expect(screen.toJSON()).toMatchSnapshot()
    })

    test("should render correctly when is not loading", () => {
        useSelector.mockImplementation(() => false)

        render(<Loading />)

        expect(screen.toJSON()).toMatchSnapshot()
    })
})
