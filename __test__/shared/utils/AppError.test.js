import {GlobalError, UnauthorizedError, ValidationError} from "../../../src/shared/utils/AppError";

describe('AppError', () => {
    test('create validation error properly', () => {
        const err = new ValidationError('error');
        expect(err.name).toEqual('ValidationError');
        expect(err.message).toEqual('error')
    });

    test('create unauthorized error properly', () => {
        const err = new UnauthorizedError('error');
        expect(err.name).toEqual('UnauthorizedError');
        expect(err.message).toEqual('error')
    });

    test('create global error properly', () => {
        const err = new GlobalError('error');
        expect(err.name).toEqual('GlobalError');
        expect(err.message).toEqual('error')
    });
})
