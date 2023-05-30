import {render, screen, fireEvent} from "@testing-library/react-native";

import TabBarItem from "../../../src/shared/components/TabBarItem";

describe("TabBarItem", () => {
    test("should render correctly when border is true", () => {
        const mockProps = {
            border: true,
            title: "title",
            setType: jest.fn(),
            type: "All",
            selected: false
        }

        render(<TabBarItem {...mockProps} />)

        expect(screen.toJSON()).toMatchSnapshot()
    })

    test("should render correctly when selected is true", () => {
        const mockProps = {
            border: false,
            title: "title",
            setType: jest.fn(),
            type: "All",
            selected: true
        }

        render(<TabBarItem {...mockProps} />)

        expect(screen.toJSON()).toMatchSnapshot()
    })

    test("should render correctly when title and type is equal", () => {
        const mockProps = {
            border: false,
            title: "ALl",
            setType: jest.fn(),
            type: "All",
            selected: false
        }

        render(<TabBarItem {...mockProps} />)

        expect(screen.toJSON()).toMatchSnapshot()
    })

    test("should call set type props with title props as params", () => {
        const mockProps = {
            border: true,
            title: "title",
            setType: jest.fn(),
            type: "title",
            selected: false
        }

        render(<TabBarItem {...mockProps} />)
        fireEvent.press(screen.getByText(mockProps.title))

        expect(mockProps.setType).toHaveBeenCalledWith(mockProps.title)
    })
})
