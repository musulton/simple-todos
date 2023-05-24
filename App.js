import {StatusBar} from 'react-native';
import {Provider} from "react-redux";

import configureStore from "./src/shared/store/store";
import Loading from "./src/shared/components/Loading";
import RootNavigator from "./src/navigation/RootNavigator";

const App = () => {
    const store = configureStore()
    return (
        <Provider store={store}>
            <StatusBar backgroundColor={'#F2F2F2'}/>
            <RootNavigator/>
            <Loading/>
        </Provider>
    );
};

export default App;
