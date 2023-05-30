import {setTodo, changeType} from "../../../../src/shared/store/todo/ToDoAction"
import {SET_TODO, CHANGE_TYPE} from "../../../../src/shared/utils/constants";

describe('todo actions', () => {
    test('set todo action', () => {
        const todos = [{
            title: "Title",
            complete: false
        }];

        const action = setTodo(todos)

        expect(action).toEqual({
            type: SET_TODO,
            payload: todos
        })
    })

    test('change type action', () => {
        const type = "Active";
        const action = changeType(type)

        expect(action).toEqual({
            type: CHANGE_TYPE,
            payload: type
        })
    })
});
