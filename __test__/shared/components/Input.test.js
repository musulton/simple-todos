import {fireEvent, render, screen} from "@testing-library/react-native";

import Input from "../../../src/shared/components/Input";

describe("Input", () => {
    test("should render correctly", () => {
        const mockProps = {
            inputValue: "Value",
            onInputChange: jest.fn(),
            placeholder: "Placeholder"
        }

        render(<Input {...mockProps} />)

        expect(screen.toJSON()).toMatchSnapshot()
    })

    test("should call onInputChange when change input text", () => {
        const mockProps = {
            inputValue: "Value",
            onInputChange: jest.fn(),
            placeholder: "Placeholder"
        }
        const inputValue = "input value"

        render(<Input {...mockProps} />)
        fireEvent.changeText(screen.getByPlaceholderText(mockProps.placeholder), inputValue)

        expect(mockProps.onInputChange).toHaveBeenCalledWith(inputValue)
    })
})
