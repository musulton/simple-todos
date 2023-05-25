import React, {useState, useEffect} from 'react';
import {StyleSheet, View, KeyboardAvoidingView} from 'react-native';
import {useSelector} from "react-redux";

import Input from "../../shared/components/Input";
import ToDoList from "./components/ToDoList";
import SubmitButton from "../../shared/components/SubmitButton";
import TabBar from "./components/TabBar";
import MessageBox from "../../shared/components/MessageBox";

const ToDoScreen = ({todo}) => {
    const {onSubmitTodo, onDismissError} = todo();
    const [todoName, setTodoName] = useState('');
    const error = useSelector((state) => state.AppReducer.error);

    useEffect(() => {
        if (error) {
            MessageBox('Error', error, () => onDismissError()).showAlert();
        }
    })

    const submitTodo = () => {
        onSubmitTodo(todoName);
    }

    return (
        <KeyboardAvoidingView style={styles.container}>
            <View style={styles.content}>
                <Input placeholder={'What needs to be done?'} inputValue={todoName} onInputChange={setTodoName}/>
                <SubmitButton onSubmit={submitTodo}/>
                <View style={styles.content}>
                    <ToDoList />
                </View>
                <TabBar/>
            </View>
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
