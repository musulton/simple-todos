import DepProvider, { useDeps } from "../../../src/shared/context/DependencyContext";
import {render} from "@testing-library/react-native";

const MockComponent = () => {
    const {mockFn} = useDeps();

    return mockFn()
}

describe("DepProvider", () => {
    test("should provide services props", () => {
        const mockServices = {
            mockFn: jest.fn()
        }
        render(
            <DepProvider services={mockServices}>
                <MockComponent />
            </DepProvider>
        )

        expect(mockServices.mockFn).toHaveBeenCalled()
    })
})
