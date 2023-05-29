import {SET_TODO, CHANGE_TYPE} from "../../../../src/shared/utils/constants";
import todoReducer from "../../../../src/shared/store/todo/ToDoReducer";

describe('todo reducer', () => {
    test('set todo reducer', () => {
        const todos = [{
            title: "Title",
            complete: false
        }];

        const initialState = undefined;
        const nextState = todoReducer(initialState, {
            type: SET_TODO,
            payload: todos
        });

        expect(nextState).toEqual({
            todo: todos,
            type: "All"
        })
    })

    test('change type reducer', () => {
        const type = "Active";

        const initialState = undefined;
        const nextState = todoReducer(initialState, {
            type: CHANGE_TYPE,
            payload: type
        });

        expect(nextState).toEqual({
            todo: [],
            type
        })
    })
});
