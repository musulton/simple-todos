import {render, screen} from "@testing-library/react-native";

import Heading from "../../../src/shared/components/Heading";

describe("Heading", () => {
    test("should render correctly", () => {
        render(<Heading />)
        
        expect(screen.toJSON()).toMatchSnapshot()
    })
})
