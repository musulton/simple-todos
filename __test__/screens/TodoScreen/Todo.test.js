import {Todo} from "../../../src/screens/TodoScreen/Todo";
import {showError, showLoading} from "../../../src/shared/store/app/AppAction";
import {setTodo} from "../../../src/shared/store/todo/ToDoAction";
import {MandatoryError} from "../../../src/shared/utils/AppError";

jest
    .mock("react-redux", () => ({
        ...jest.requireActual("react-redux"),
        useDispatch: jest.fn(() => jest.fn())
    }))
    .mock("../../../src/shared/store/app/AppAction", () => ({
        showError: jest.fn(),
        showLoading: jest.fn()
    }))
    .mock("../../../src/shared/utils/AppError", () => ({
        MandatoryError: jest.fn()
    }))
    .mock("../../../src/shared/store/todo/ToDoAction", () => ({
        setTodo: jest.fn()
    }))

describe("Todo", () => {
    const mockData = [{
        title: 'title',
        complete: false
    }];

    const mockAddTodo = jest.fn();
    const mockGetTodo = jest.fn().mockResolvedValue(mockData);
    const mockUpdateTodo = jest.fn();
    const mockDeleteTodo = jest.fn();
    const mockOnSuccess = jest.fn();

    const mockService = jest.fn(() => ({
        addTodoService: mockAddTodo,
        getTodoService: mockGetTodo,
        updateTodoService: mockUpdateTodo,
        deleteTodoService: mockDeleteTodo
    }))

    const mapResultToProps = Todo(mockService)

    beforeEach(() => {
        jest.clearAllMocks()
    })

    test("should return onAuthenticate and onDismissError properties", () => {
        expect(mapResultToProps)
            .toMatchObject({
                onSubmitTodo: expect.any(Function),
                onLoadTodo: expect.any(Function),
                onCompletedTodo: expect.any(Function),
                onDeleteTodo: expect.any(Function),
                onDismissError: expect.any(Function)
            })
    })

    describe("onSubmitTodo", () => {
        test("should call add todo service when todo name is filled", async () => {
            const todoName = "title";

            await mapResultToProps.onSubmitTodo(todoName, mockOnSuccess)

            expect(showLoading).toHaveBeenCalledWith(true)
            expect(mockAddTodo).toHaveBeenCalledWith({
                title: todoName,
                complete: false
            })
            expect(mockOnSuccess).toHaveBeenCalled()
            expect(showLoading).toHaveBeenCalledWith(false)
        })

        test("should call error when todo name is not filled", async () => {
            await mapResultToProps.onSubmitTodo(null, mockOnSuccess)

            expect(showLoading).toHaveBeenCalledWith(true)
            expect(MandatoryError).toHaveBeenCalledWith("Todo Name is required")
            expect(showError).toHaveBeenCalled();
            expect(showLoading).toHaveBeenCalledWith(false)
        })
    })

    test("onLoadTodo", async () => {
        await mapResultToProps.onLoadTodo()

        expect(showLoading).toHaveBeenCalledWith(true)
        expect(mockGetTodo).toHaveBeenCalled()
        expect(setTodo).toHaveBeenCalledWith(mockData)
        expect(showLoading).toHaveBeenCalledWith(false)
    })

    test("onDeleteTodo", async () => {
        const id = 1;

        await mapResultToProps.onDeleteTodo(id, mockOnSuccess)

        expect(showLoading).toHaveBeenCalledWith(true)
        expect(mockDeleteTodo).toHaveBeenCalledWith(id)
        expect(mockOnSuccess).toHaveBeenCalled()
        expect(showLoading).toHaveBeenCalledWith(false)
    })

    test("onCompletedTodo", async () => {
        const todo = {
            title: "title",
            completed: false
        }

        await mapResultToProps.onCompletedTodo(todo, mockOnSuccess)

        expect(showLoading).toHaveBeenCalledWith(true)
        expect(mockUpdateTodo).toHaveBeenCalledWith(todo)
        expect(mockOnSuccess).toHaveBeenCalled()
        expect(showLoading).toHaveBeenCalledWith(false)
    })

    test("onDismissError", () => {
        mapResultToProps.onDismissError()

        expect(showError).toHaveBeenCalledWith('')
    })
})
