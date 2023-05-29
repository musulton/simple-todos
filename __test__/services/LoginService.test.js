import LoginService from "../../src/services/LoginService";
import {useDeps} from "../../src/shared/context/DependencyContext";

const mockSetData = jest.fn();

jest
    .mock("../../src/shared/context/DependencyContext", () => ({
        useDeps: jest.fn().mockReturnValue({
            apiClient: jest.fn()
        })
    }))
    .mock("../../src/shared/utils/LocalStorage", () => ({
        __esModule: true,
        default: jest.fn(() => ({
            setData: mockSetData
        }))
    }));

describe('LoginService', () => {
    afterEach(jest.clearAllMocks)

    test("callLoginService", async () => {
        const mockApiClient = jest.fn();

        const email = "email@email.com";
        const password = "123456";
        const accessToken = "token123";

        useDeps().apiClient = mockApiClient.mockResolvedValue({
            "access_token": accessToken
        })

        await LoginService().callLoginService(email, password);

        expect(mockApiClient).toHaveBeenCalledWith({
            url: 'auth/login',
            method: 'post',
            params: {
                email, password
            }
        })
        expect(mockSetData).toHaveBeenCalledWith('token', accessToken)
    })
});
