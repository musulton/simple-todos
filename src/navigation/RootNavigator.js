import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

import LoginScreen from "../screens/LoginScreen/LoginScreen"
import ToDoScreen from "../screens/TodoScreen/ToDoScreen";
import SplashScreen from "../screens/SplashScreen/SplashScreen";
import {LOGIN_PATH, SPLASH_PATH, TODO_PATH} from "./NavigationPath";
import PopupMenu from "../shared/components/PopupMenu";

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
    return <NavigationContainer>
        <Stack.Navigator initialRouteName={SPLASH_PATH}>
            <Stack.Screen name={SPLASH_PATH} component={SplashScreen} options={{headerShown: false}}/>
            <Stack.Screen name={LOGIN_PATH} component={LoginScreen} options={{headerShown: false}}/>
            <Stack.Group
                screenOptions={({navigation}) => ({
                    headerStyle: {
                        backgroundColor: '#f2f2f2',
                    },
                    headerShadowVisible: false,
                    headerRight: () => <PopupMenu navigation={navigation}/>
                })}
            >
                <Stack.Screen name={TODO_PATH} component={ToDoScreen} options={{ title: '' }}/>
            </Stack.Group>
        </Stack.Navigator>
    </NavigationContainer>
}

export default RootNavigator;