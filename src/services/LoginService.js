import {useDeps} from "../shared/context/DependencyContext";
import localStorage from "../shared/utils/LocalStorage";

const LoginService = () => {
    const {apiClient} = useDeps();
    const callLoginService = async (email, password) => {
        try {
            const data = await apiClient({
                url: 'auth/login',
                method: 'post',
                params: {
                    email,
                    password,
                }
            });
            console.log("data", data)
            await localStorage().setData('token', data["access_token"]);
        } catch (e) {
            console.log(e);
            throw e;
        }
    }
    return {
        callLoginService,
    }
}

export default LoginService;
