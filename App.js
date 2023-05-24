import { StyleSheet, SafeAreaView } from 'react-native';
import {Provider} from "react-redux";

import configureStore from "./src/shared/store/store";
import ToDoScreen from "./src/screens/TodoScreen/ToDoScreen";

const App = () => {
    const store = configureStore()
    return (
        <Provider store={store}>
            <SafeAreaView style={styles.container}>
                <ToDoScreen/>
            </SafeAreaView>
        </Provider>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default App;
