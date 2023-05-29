import {
    CHANGE_TYPE,
    SET_TODO,
} from "../../utils/constants";

export function setTodo(todos) {
    return {
        type: SET_TODO,
        payload: todos
    }
}

export function changeType(type) {
    return {
        type: CHANGE_TYPE,
        payload: type
    }
}
