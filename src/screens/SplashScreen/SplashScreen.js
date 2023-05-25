import React, {useEffect} from 'react';
import {Image, StyleSheet, View,} from 'react-native';
import {LOGIN_PATH, TODO_PATH} from "../../navigation/NavigationPath";
import {enigma} from "../../shared/assets/images";
import LocalStorage from "../../shared/utils/LocalStorage";
import {goToScreen} from "../../navigation/NavigationHelper";
import {login} from "../../shared/store/login/LoginAction";
import {useDispatch} from "react-redux";

const SplashScreen = () => {
    const dispatch = useDispatch();

        useEffect(() => {
            setTimeout(async () => {
                const isLoggedIn = !!await LocalStorage().getData('token')
                const toRouteName = isLoggedIn ? TODO_PATH : LOGIN_PATH;
                dispatch(login({isLoggedIn}));
                goToScreen(toRouteName, true)
            }, 3000)
        })

        return (
            <View style={styles.content}>
                <Image source={enigma}/>
            </View>
        );
    }
;

const styles = StyleSheet.create({
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default SplashScreen;
