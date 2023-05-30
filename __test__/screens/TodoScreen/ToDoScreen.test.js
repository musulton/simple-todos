import {render, fireEvent, screen} from "@testing-library/react-native";

import ToDoScreen from "../../../src/screens/TodoScreen/ToDoScreen";

jest.mock("react-redux", () => ({
    ...jest.requireActual("react-redux"),
    useSelector: jest.fn(),
    useDispatch: jest.fn(() => jest.fn())
}))

describe("ToDoScreen", () => {
    const mockOnSubmit = jest.fn();
    const mockOnDismissError = jest.fn();
    const mockOnLoad = jest.fn();
    const mockOnDelete = jest.fn();
    const mockOnCompleted = jest.fn();

    const onRefetchFn = expect.any(Function)

    const mockTodoService = jest.fn(() => ({
        onSubmitTodo: mockOnSubmit,
        onDismissError: mockOnDismissError,
        onLoadTodo: mockOnLoad,
        onDeleteTodo: mockOnDelete,
        onCompletedTodo: mockOnCompleted
    }))

    test("should return correctly", () => {
        render(<ToDoScreen todo={mockTodoService} />)

        expect(screen.toJSON()).toMatchSnapshot()
    })

    test("should call on submit service with params correctly", () => {
        render(<ToDoScreen todo={mockTodoService} />)

        fireEvent
            .changeText(screen.getByPlaceholderText("What needs to be done?"), "value")
        fireEvent.press(screen.getByText("Submit"))

        expect(mockOnSubmit).toHaveBeenCalledWith("value", onRefetchFn)
    })
})
