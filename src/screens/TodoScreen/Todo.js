import {useDispatch} from "react-redux";

import {showError, showLoading} from "../../shared/store/app/AppAction";
import {addTodo} from "../../shared/store/todo/ToDoAction";
import {MandatoryError} from "../../shared/utils/AppError";

export const Todo = (service) => {
    const dispatch = useDispatch();
    const {addTodoService} = service();

    const onSubmitTodo = async (todoName) => {
        try {
            dispatch(showLoading(true));
            if (!todoName) {
                throw new MandatoryError('Todo Name is required')
            }
            let todo = {
                title: todoName,
                complete: false
            }

            let todoId = await addTodoService(todo);
            dispatch(addTodo(
                {...todo, todoIndex: todoId.id}
            ));
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
    };
};


