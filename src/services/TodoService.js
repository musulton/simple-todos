import {useDeps} from "../shared/context/DependencyContext";

const ToDoService = () => {
    const {apiClient} = useDeps();
    const addTodoService = async (todo) => {
        try {
            return await apiClient.post('/todos', {
                title: todo.title,
                complete: todo.complete
            });
        } catch (e) {
            console.log(e);
            throw e;
        }
    }

    const getTodoService = async () => {
        try {
            return await apiClient.get('/todos');
        } catch (e) {
            console.log(e);
            throw e;
        }
    }

    return {addTodoService, getTodoService}
}

export default ToDoService;
