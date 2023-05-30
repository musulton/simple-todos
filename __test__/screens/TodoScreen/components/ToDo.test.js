import {fireEvent, render, screen} from "@testing-library/react-native";

import ToDo from "../../../../src/screens/TodoScreen/components/ToDo";

jest.mock('expo-font', () => ({
    loadAsync: jest.fn(),
    isLoaded: jest.fn().mockReturnValue(true)
}))

describe("ToDo", () => {
    test("should return correctly", () => {
        const mockProps = {
            todo: {
                title: "title",
                id: 1
            },
            onCompleted: jest.fn(),
            onDelete: jest.fn()
        }

        render(<ToDo {...mockProps} />)

        expect(screen.toJSON()).toMatchSnapshot()
    })

    test("should call onCompleted props when Done button is clicked", () => {
        const mockProps = {
            todo: {
                title: "title",
                id: 1
            },
            onCompleted: jest.fn(),
            onDelete: jest.fn()
        }

        render(<ToDo {...mockProps} />)

        fireEvent.press(screen.getByText(""))

        expect(mockProps.onCompleted).toHaveBeenCalledWith(mockProps.todo)
    })

    test("should call onDeleted props when Delete button is clicked", () => {
        const mockProps = {
            todo: {
                title: "title",
                id: 1
            },
            onCompleted: jest.fn(),
            onDelete: jest.fn()
        }

        render(<ToDo {...mockProps} />)

        fireEvent.press(screen.getByText(""))

        expect(mockProps.onDelete).toHaveBeenCalledWith(mockProps.todo.id)
    })
})
