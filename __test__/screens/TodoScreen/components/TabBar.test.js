import {fireEvent, render, screen} from "@testing-library/react-native";

import TabBar from "../../../../src/screens/TodoScreen/components/TabBar";
import {changeType} from "../../../../src/shared/store/todo/ToDoAction";

jest
    .mock("react-redux", () => ({
        ...jest.requireActual("react-redux"),
        useDispatch: jest.fn(() => jest.fn()),
        useSelector: jest.fn(() => "Active")
    }))
    .mock("../../../../src/shared/store/todo/ToDoAction", () => ({
        changeType: jest.fn()
    }))

describe("TabBar", () => {
  test("should return correctly", () => {
      render(<TabBar />)

      expect(screen.toJSON()).toMatchSnapshot()
  })

    test("should call changeType action when tab bar item is clicked", () => {
        render(<TabBar />)
        fireEvent.press(screen.getByText("Active"))

        expect(changeType).toHaveBeenCalledWith("Active")
    })
})
