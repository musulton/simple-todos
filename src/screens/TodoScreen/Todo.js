import {useDispatch} from "react-redux";

import {showError, showLoading} from "../../shared/store/app/AppAction";
import {addTodo, setTodo} from "../../shared/store/todo/ToDoAction";
import {MandatoryError} from "../../shared/utils/AppError";

export const Todo = (service) => {
    const dispatch = useDispatch();
    const {addTodoService, getTodoService} = service();

    const onSubmitTodo = async (todoName, onSuccess) => {
        try {
            dispatch(showLoading(true));
            if (!todoName) {
                throw new MandatoryError('Todo Name is required')
            }
            let todo = {
                title: todoName,
                complete: false
            }

            await addTodoService(todo);
            onSuccess?.()
        } catch (e) {
            dispatch(showError(e.message));
        } finally {
            dispatch(showLoading(false));
        }
    }

    const onLoadTodo = async () => {
        try {
            dispatch(showLoading(true));
            const todos = await getTodoService();
            dispatch(setTodo(todos))
        } catch (e) {
            dispatch(showError(e.message));
        } finally {
            dispatch(showLoading(false));
        }
    }

    const onDismissError = () => dispatch(showError(''));
    return {
        onSubmitTodo,
        onDismissError,
        onLoadTodo
    };
};


