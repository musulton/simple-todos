import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

import ToDoButton from "../../../shared/components/ToDoButton";

const ToDo = ({todo, onCompleted, onDelete}) => {
    return (
        <View style={styles.todoContainer}>
            <Text style={[styles.todoText, todo.complete ? styles.completeTodoText : null]}>
                {todo.title}
            </Text>
            <View style={styles.buttons}>
                <ToDoButton
                    name='Done'
                    onPress={() => onCompleted(todo)}/>
                <ToDoButton
                    name='Delete'
                    onPress={() => onDelete(todo.id)}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    todoContainer: {
        marginLeft: 20,
        marginRight: 20,
        //Mandatory style for shadowing
        backgroundColor: '#ffffff',
        borderWidth: 1,
        borderColor: '#ededed',
        paddingLeft: 14,
        paddingTop: 7,
        paddingBottom: 7,
        //Shadowing for IOS
        shadowOpacity: 0.2,
        shadowRadius: 3,
        shadowColor: '#000000',
        shadowOffset: {width: 3, height: 3},
        //Shadowing for Android
        elevation: 3,
        flexDirection: 'row',
        alignItems: 'center'
    },
    todoText: {
        fontSize: 16
    },
    completeTodoText: {
        textDecorationLine: 'line-through'
    },
    buttons: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
})
export default ToDo;
