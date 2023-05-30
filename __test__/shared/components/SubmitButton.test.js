import {render, screen, fireEvent} from "@testing-library/react-native";

import SubmitButton from "../../../src/shared/components/SubmitButton";

describe("SubmitButton", () => {
    test("should render correctly", () => {
        const mockProps = {
            title: "Title",
            onSubmit: jest.fn()
        }

        render(<SubmitButton {...mockProps} />)

        expect(screen.toJSON()).toMatchSnapshot()
    })

    test("should call onSubmit props when button is clicked", () => {
        const mockProps = {
            title: "Title",
            onSubmit: jest.fn()
        }

        render(<SubmitButton {...mockProps} />)
        fireEvent.press(screen.getByText(mockProps.title))

        expect(mockProps.onSubmit).toHaveBeenCalled()
    })
})
