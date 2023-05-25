import {login} from "../../shared/store/login/LoginAction";
import {useDispatch} from "react-redux";
import {goToScreen} from "../../navigation/NavigationHelper";
import {TODO_PATH} from "../../navigation/NavigationPath";
import {showError, showLoading} from "../../shared/store/app/AppAction";

export const Login = (service) => {
    const dispatch = useDispatch();
    const {callLoginService} = service();
    const onAuthenticate = async (email, password) => {
        try {
            dispatch(showLoading(true));
            await callLoginService(email, password);
            dispatch(login({isLoggedIn: true}));
            goToScreen(TODO_PATH, true);
        } catch (e) {
            dispatch(showError(e.message));
        } finally {
            dispatch(showLoading(false));
        }
    }

    const onDismissError = () => dispatch(showError(''));
    return {
        onAuthenticate,
        onDismissError
    };
};


