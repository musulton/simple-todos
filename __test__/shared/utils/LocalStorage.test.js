import AsyncStorage from "@react-native-async-storage/async-storage";

import LocalStorage from "../../../src/shared/utils/LocalStorage";

describe('LocalStorage', () => {
    beforeEach(() => {
        AsyncStorage.clear()
    })

    test('set data to async storage', async () => {
        const KEY = 'key'
        const VALUE = 'value'

        await LocalStorage().setData(KEY, VALUE)

        expect(AsyncStorage.setItem).toHaveBeenCalledWith(KEY, VALUE)
    });

    test('get data from async storage', async () => {
        const KEY = 'key'
        const VALUE = 'value'
        await AsyncStorage.setItem(KEY, VALUE)

        const value = await LocalStorage().getData(KEY)

        expect(value).toEqual(VALUE)
        expect(AsyncStorage.getItem).toHaveBeenCalledWith(KEY)
    });

    test('remove data from async storage', async () => {
        const KEY = 'key'

        await LocalStorage().removeData(KEY)

        expect(AsyncStorage.removeItem).toHaveBeenCalledWith(KEY)
    });
})
