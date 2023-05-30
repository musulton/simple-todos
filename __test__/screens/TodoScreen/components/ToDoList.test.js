import {fireEvent, render, screen} from "@testing-library/react-native";

import ToDoList from "../../../../src/screens/TodoScreen/components/ToDoList";
import {useSelector} from "react-redux";

jest
    .mock("react-redux", () => ({
        ...jest.requireActual("react-redux"),
        useSelector: jest.fn()
    }))
    .mock("../../../../src/shared/components/EmptyState", () => "EmptyState")

describe("ToDoList", () => {
    test("should return empty state correctly when data is empty", () => {
        const mockProps = {
            onDelete: jest.fn(),
            onCompleted: jest.fn()
        }

        render(<ToDoList {...mockProps} />)

        expect(screen.toJSON()).toMatchSnapshot()
    })

    test("should return correctly", () => {
        useSelector.mockImplementationOnce(() => [
            {title: 'title', complete: false, id: 1}
        ])
        useSelector.mockImplementationOnce(() => "All")

        const mockProps = {
            onDelete: jest.fn(),
            onCompleted: jest.fn()
        }

        render(<ToDoList {...mockProps} />)

        expect(screen.toJSON()).toMatchSnapshot()
    })
})
