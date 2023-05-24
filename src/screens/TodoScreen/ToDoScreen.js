import React, {useState} from 'react';
import {ScrollView, StyleSheet, View, ActivityIndicator, KeyboardAvoidingView} from 'react-native';
import {useDispatch, useSelector} from "react-redux";

import {addTodo, showLoading, setTodoName} from "../../shared/store/todo/ToDoAction";
import Heading from "../../shared/components/Heading";
import Input from "../../shared/components/Input";
import ToDoList from "./components/ToDoList";
import SubmitButton from "../../shared/components/SubmitButton";
import TabBar from "./components/TabBar";

const ToDoScreen = () => {
    const dispatch = useDispatch();
    const currIndex = useSelector((state) => state.ToDoReducer.todoIndex);
    const isLoading = useSelector((state) => state.ToDoReducer.isLoading);
    const todoName = useSelector((state) => state.ToDoReducer.newTodoName);

    const submitTodo = () => {
        dispatch(showLoading(true));

        if (todoName.match(/^\s*$/)) {
            return
        }
        const todo = {
            title: todoName,
            todoIndex: currIndex,
            complete: false
        }

        /* Simulasi fetch API u/ memberi jeda sukses ketika menambah ToDo */
        setTimeout(function () {
            dispatch(addTodo(todo));
            dispatch(showLoading(false));
        }, 1000);
    }

    const onInputChange = (text) => {
        dispatch(setTodoName(text));
    }

    return (
        <KeyboardAvoidingView style={styles.container}>
            <View style={styles.content}>
                <Heading/>
                <Input inputValue={todoName} inputChange={onInputChange}/>
                <SubmitButton submitTodo={submitTodo}/>
                <ScrollView
                    contentInsetAdjustmentBehavior="automatic"
                    keyboardShouldPersistTaps="never"
                    style={styles.content}
                >
                    <ToDoList />
                </ScrollView>
                <TabBar/>
            </View>
            {isLoading && <View style={styles.loading}>
                <ActivityIndicator size={"large"} color="#0000ff"/>
            </View>}
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        flex: 1,
        paddingTop: 10,
    },
    loading: {
        flex: 1,
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        opacity: 0.5,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default ToDoScreen;
