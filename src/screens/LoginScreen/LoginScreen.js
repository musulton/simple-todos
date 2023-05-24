import React, {useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet, View,} from 'react-native';
import {useDispatch, useSelector} from "react-redux";

import Input from "../../shared/components/Input";
import SubmitButton from "../../shared/components/SubmitButton";
import {TODO_PATH} from "../../navigation/NavigationPath";
import {showLoading} from "../../shared/store/todo/ToDoAction";
import {login} from "../../shared/store/login/LoginAction";
import Heading from "../../shared/components/Heading";

const LoginScreen = ({navigation}) => {
    const dispatch = useDispatch();
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const isLoggedIn = useSelector((state) => state.LoginReducer.isLoggedIn);

    useEffect(() => {
        if (isLoggedIn) {
            dispatch(showLoading(false));
            navigation.replace(TODO_PATH);
        }
    }, [isLoggedIn])
    const submitLogin = () => {
        dispatch(showLoading(true));

        setTimeout(function () {
            if (userName === '123' && password === '123') {
                dispatch(login(true));
            } else {
                dispatch(login(false));
            }

            dispatch(showLoading(false));
        }, 1000);
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <View style={{paddingBottom: 20}}>
                    <Heading title={'Todo'}/>
                </View>
                <Input placeholder={"Enter your username"} inputValue={userName} onInputChange={setUserName}/>
                <Input placeholder={"Enter your password"} isSecureText={true} inputValue={password} onInputChange={setPassword}/>
                <SubmitButton title={"Submit"} onSubmit={submitLogin}/>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        flex: 1,
        justifyContent: 'center'
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

export default LoginScreen;
