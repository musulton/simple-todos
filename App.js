import {StatusBar} from 'react-native';
import {Provider} from "react-redux";

import configureStore from "./src/shared/store/store";
import Loading from "./src/shared/components/Loading";
import RootNavigator from "./src/navigation/RootNavigator";
import DepProvider from "./src/shared/context/DependencyContext";
import ApiClient from "./src/services/ApiClient";

const App = () => {
    const store = configureStore()

    if(__DEV__) {
        import('./src/config/ReactotronConfig').then(() => console.log('Reactotron Configured'))
    }

    return (
        <Provider store={store}>
            <DepProvider services={{apiClient: ApiClient}}>
                <StatusBar backgroundColor={'#F2F2F2'}/>
                <RootNavigator/>
                <Loading/>
            </DepProvider>
        </Provider>
    );
};

export default App;
