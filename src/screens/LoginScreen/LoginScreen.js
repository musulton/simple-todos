import React, {useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet, View,} from 'react-native';
import {useSelector} from "react-redux";

import Input from "../../shared/components/Input";
import SubmitButton from "../../shared/components/SubmitButton";
import Heading from "../../shared/components/Heading";
import MessageBox from "../../shared/components/MessageBox";

const LoginScreen = ({login}) => {
    const {onAuthenticate, onDismissError} = login();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const error = useSelector((state) => state.AppReducer.error);

    useEffect(() => {
        if (error) {
            MessageBox('Error', error, () => onDismissError()).showAlert();
        }
    })

    const submitLogin = async () => {
        onAuthenticate(email, password)
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <View style={{paddingBottom: 20}}>
                    <Heading title={'Todo'}/>
                </View>
                <Input placeholder={"Enter your email"} inputValue={email} onInputChange={setEmail}/>
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
