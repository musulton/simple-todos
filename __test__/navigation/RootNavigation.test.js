import {navigate, navigationRef} from "../../src/navigation/RootNavigation";
import {StackActions} from "@react-navigation/native";

jest
    .mock("@react-navigation/native", () => ({
        ...jest.requireActual("@react-navigation/native"),
        createNavigationContainerRef: jest.fn(() => ({
            current: {
                dispatch: jest.fn(),
            },
            isReady: jest.fn(() => true),
            navigate: jest.fn()
        })),
        StackActions: {
            replace: jest.fn()
        }
    }))

describe("RootNavigation", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    describe("navigate function", () => {
        test("should call navigate when isReplace is false", () => {
            const routeName = "route";
            const params = null;
            const isReplace = false;

            navigate(routeName, params, isReplace)

            expect(navigationRef.navigate).toHaveBeenCalledWith(routeName, params)
        })

        test("should dispatch replace when isReplace is true", () => {
            const routeName = "route";
            const params = null;
            const isReplace = true;

            navigate(routeName, params, isReplace)

            expect(StackActions.replace).toHaveBeenCalledWith(routeName);
        })
    })
});
