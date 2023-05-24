import React from 'react'
import {View} from 'react-native'
import {useSelector} from "react-redux";

import ToDo from "./ToDo";


const ToDoList = () => {
    const todos = useSelector(state => state.ToDoReducer.todo);
    const type = useSelector(state => state.ToDoReducer.type);

    const getVisibleTodos = (todos, type) => {
        switch (type) {
            case 'All':
                return todos
            case 'Complete':
                return todos.filter((t) => t.complete)
            case 'Active':
                return todos.filter((t) => !t.complete)
        } }
    let selectedTodos = getVisibleTodos(todos, type)
    let todoItems = selectedTodos?.map((todo) => {
        return (
            <ToDo key={todo.todoIndex} todo={todo}/>
        );
    })
    return (
        <View>
            {todoItems}
        </View>
    )
}
export default ToDoList;
