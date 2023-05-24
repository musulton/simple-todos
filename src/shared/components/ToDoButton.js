import React from 'react'
import {TouchableHighlight, StyleSheet} from 'react-native'
import Icon from '@expo/vector-icons/FontAwesome'

const ToDoButton = ({onPress, name}) => (
    <TouchableHighlight
        onPress={onPress}
        underlayColor='#efefef'
        style={styles.button}>
        {/*<Text style={[*/}
        {/*    styles.text,*/}
        {/*    complete ? styles.complete : null,*/}
        {/*    name === 'Delete' ? styles.deleteButton : null]}*/}
        {/*> {name}*/}
        {/*</Text>*/}
        <Icon name={name === 'Delete' ? 'trash-o' : 'hand-peace-o'}
              color={name === 'Delete' ? styles.deleteButton.color : styles.complete.color} size={16}/>
    </TouchableHighlight>
)
const styles = StyleSheet.create({
    button: {
        alignSelf: 'flex-end',
        alignItems: 'center',
        padding: 7,
        borderColor: '#ededed',
        borderWidth: 1,
        borderRadius: 4,
        marginRight: 5,
        width: 50,
    }, text: {
        color: '#666666'
    },
    complete: {
        color: 'green',
        fontWeight: 'bold'
    },
    deleteButton: {
        color: 'rgba(175, 47, 47, 1)'
    }
})
export default ToDoButton;
