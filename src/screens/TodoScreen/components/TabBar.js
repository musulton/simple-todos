import React from 'react'
import {View, StyleSheet} from 'react-native'
import {useDispatch, useSelector} from "react-redux";

import {changeType} from "../../../shared/store/todo/ToDoAction";
import TabBarItem from "../../../shared/components/TabBarItem";

const TabBar = () => {
    const dispatch = useDispatch();
    const todoType = useSelector(state => state.ToDoReducer.type);

    const onSetType = (title) => {
        dispatch(changeType(title));
    }

    return (
        <View style={styles.container}>
            <TabBarItem border selected title='All' setType={onSetType} type={todoType}/>
            <TabBarItem border title='Active' setType={onSetType} type={todoType}/>
            <TabBarItem border title='Complete' setType={onSetType} type={todoType}/>
        </View>)
}

const styles = StyleSheet.create({
    container: {
        height: 70,
        flexDirection: 'row',
        borderTopWidth: 1,
        borderTopColor: '#dddddd'
    }
})
export default TabBar;
