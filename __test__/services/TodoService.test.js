import TodoService from "../../src/services/TodoService";
import {useDeps} from "../../src/shared/context/DependencyContext";

jest
    .mock("../../src/shared/context/DependencyContext", () => ({
        useDeps: jest.fn().mockReturnValue({
            apiClient: jest.fn()
        })
    }))

describe('TodoService', () => {
    afterEach(jest.clearAllMocks)

    const mockApiClient = jest.fn();

    test("addTodoService", async () => {
        useDeps().apiClient = mockApiClient

        const todo = {
            title: "title",
            complete: false
        }

        await TodoService().addTodoService(todo);

        expect(mockApiClient).toHaveBeenCalledWith({
            url: '/todos',
            method: 'post',
            params: todo
        })
    })

    test("getTodoService", async () => {
        useDeps().apiClient = mockApiClient;

        await TodoService().getTodoService();

        expect(mockApiClient).toHaveBeenCalledWith({
            url: '/todos',
            method: 'get',
        })
    })

    test("updateTodoService", async () => {
        useDeps().apiClient = mockApiClient;

        const todo = {
            id: 1,
            title: "title",
            complete: false
        }

        await TodoService().updateTodoService(todo);

        expect(mockApiClient).toHaveBeenCalledWith({
            url: '/todos/' + todo.id,
            method: 'put',
            params: {
                title: todo.title,
                complete: !todo.complete
            }
        })
    })

    test("deleteTodoService", async () => {
        useDeps().apiClient = mockApiClient;

        await TodoService().deleteTodoService(1);

        expect(mockApiClient).toHaveBeenCalledWith({
            url: '/todos/1',
            method: 'delete',
        })
    })
});
