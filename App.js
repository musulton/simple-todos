import { StyleSheet, SafeAreaView } from 'react-native';
import ToDoScreen from "./src/screens/TodoScreen/ToDoScreen";

const App = () => {
  return (
      <SafeAreaView style={styles.container}>
        <ToDoScreen/>
      </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default App;
