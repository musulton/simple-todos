import MessageBox from "../../../src/shared/components/MessageBox";
import {Alert} from "react-native";

describe("MessageBox", () => {
    test("should call alert box correctly", () => {
        jest.spyOn(Alert, "alert")

        const title = "title"
        const message = "message"
        const callback = jest.fn()

        const result = MessageBox(title, message, callback)
        result.showAlert()

        expect(Alert.alert).toHaveBeenCalledWith(
            title,
            message,
            [
                {text: "OK", onPress: expect.any(Function)}
            ]
        )
    })
});
