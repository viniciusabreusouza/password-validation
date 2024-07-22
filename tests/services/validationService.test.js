const { validatePassword } = require('../../src/services/validate-password.service');

describe('validatePassword',() => {
    test('should return invalid for password with less than 8 characters', async () => {
        const result = await validatePassword('short');
        expect(result).toEqual({
            isValid: false,
            error: 'Password must contain at least 8 characters.'
        });
    });

    test('should return invalid for password without uppercase letter', async () => {
        const result = await validatePassword('lowercase1!');
        expect(result).toEqual({
            isValid: false,
            error: 'Password must contain at least one uppercase letter.'
        });
    });

    test('should return invalid for password without lowercase letter', async () => {
        const result = await validatePassword('UPPERCASE1!');
        expect(result).toEqual({
            isValid: false,
            error: 'Password must contain at least one lowercase letter.'
        });
    });

    test('should return invalid for password without digit', async () => {
        const result = await validatePassword('NoDigits!');
        expect(result).toEqual({
            isValid: false,
            error: 'Password must contain at least one number.'
        });
    });

    test('should return invalid for password without special character', async () => {
        const result = await validatePassword('NoSpecial1');
        expect(result).toEqual({
            isValid: false,
            error: 'Password must contain at least one special character.'
        });
    });

    test('should return valid for a correct password', async () => {
        const result = await validatePassword('ValidP@ss1');
        expect(result).toEqual({
            isValid: true,
            error: ''
        });
    });
});