import * as NavigationHelper from "../../src/navigation/NavigationHelper";
import RootNavigation from "../../src/navigation/RootNavigation";

jest
    .mock("../../src/navigation/RootNavigation", () => ({
        navigate: jest.fn()
    }))

describe("NavigationHelper", () => {
    test("go to screen", () => {
        const route = "/route";
        const isReplace = true;

        NavigationHelper.goToScreen(route, isReplace);

        expect(RootNavigation.navigate).toHaveBeenCalledWith(route, null, isReplace);
    })
});
