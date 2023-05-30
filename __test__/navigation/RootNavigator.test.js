import React from "react";
import {render, screen} from "@testing-library/react-native";

import RootNavigator from "../../src/navigation/RootNavigator";

jest.mock("react-redux");

describe("RootNavigator", () => {
    test("should renders correctly", () => {
        render(<RootNavigator />)

        expect(screen.toJSON()).toMatchSnapshot()
    })
})
