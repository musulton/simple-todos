import axios from "axios";
import {GlobalError, UnauthorizedError} from "../shared/utils/AppError";

const client = axios.create({
    baseURL: "https://677a-180-244-28-131.ngrok-free.app",
});

const clientService = () => {
    const get = async (url) => {
        try {
            let result = await client.get(url);
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
    const post = async (url, params) => {
        try {
            let result = await client.post(url, params);
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

    return {
        get,
        post
    }
}
export default clientService;
