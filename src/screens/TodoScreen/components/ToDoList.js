import React from 'react'
import {View, FlatList} from 'react-native'
import {useSelector} from "react-redux";

import ToDo from "./ToDo";

const todoItems = ({item}) => {
    return (
        <ToDo todo={item}/>
    );
};

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
    const selectedTodos = getVisibleTodos(todos, type)

    return (
        <FlatList
            data={selectedTodos}
            renderItem={todoItems}
            keyExtractor={item => item.todoIndex}
        />
    )
}
export default ToDoList;
