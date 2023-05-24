import React, {useEffect} from 'react';
import {Image, StyleSheet, View,} from 'react-native';
import {LOGIN_PATH, TODO_PATH} from "../../navigation/NavigationPath";
import {enigma} from "../../shared/assets/images";

const SplashScreen = ({navigation}) => {
        useEffect(() => {
            setTimeout(() => {
                navigation.replace(TODO_PATH)
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
