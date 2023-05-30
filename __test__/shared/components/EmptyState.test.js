import {render, screen} from "@testing-library/react-native";

import EmptyState from "../../../src/shared/components/EmptyState";

describe("EmptyState", () => {
    test("should render correctly", () => {
        const textProps = "Data is empty"
        
        render(<EmptyState text={textProps} />)

        expect(screen.toJSON()).toMatchSnapshot()
    })
})
