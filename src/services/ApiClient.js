import axios from "axios";
import {GlobalError, UnauthorizedError} from "../shared/utils/AppError";
import LocalStorage from "../shared/utils/LocalStorage";

const client = axios.create({
    baseURL: "https://ace3-180-244-28-131.ngrok-free.app",
});

client.interceptors.request.use(async (config) => {
    // Do something before request is sent
    if (config.url !== '/login') {
        const token = await LocalStorage().getData('token');
        config.headers = {
            'Authorization': `Bearer ${token}`,
        }
    }
    return config;
}, function (error) {
    return Promise.reject(error);
});

const clientService = async ({url, method, params}) => {
    try {
        let result = await client[method](url, params);
        return result.data;
    } catch (e) {
        if (e.response) {
            if (e.response.status === 401) {
                throw new UnauthorizedError("Unauthorized")
            }
        } else {
            throw new GlobalError("Oops")
        }
    }
}

export default clientService;
