function validateLength(password) {
    if (password.length < 8) {
        return {
            isValid: false,
            error: 'Password must contain at least 8 characters.'
        };
    }
    return { isValid: true };
}

function validateUpperCase(password) {
    const upperCasePattern = /[A-Z]/;
    if (!upperCasePattern.test(password)) {
        return {
            isValid: false,
            error: 'Password must contain at least one uppercase letter.'
        };
    }
    return { isValid: true };
}

function validateLowerCase(password) {
    const lowerCasePattern = /[a-z]/;
    if (!lowerCasePattern.test(password)) {
        return {
            isValid: false,
            error: 'Password must contain at least one lowercase letter.'
        };
    }
    return { isValid: true };
}

function validateDigit(password) {
    const digitPattern = /[0-9]/;
    if (!digitPattern.test(password)) {
        return {
            isValid: false,
            error: 'Password must contain at least one number.'
        };
    }
    return { isValid: true };
}

function validateSpecialCharacter(password) {
    const specialCharacterPattern = /[!@#$%^&*(),.?":{}|<>]/;
    if (!specialCharacterPattern.test(password)) {
        return {
            isValid: false,
            error: 'Password must contain at least one special character.'
        };
    }
    return { isValid: true };
}

async function validatePassword(password) {
    const validators = [
        validateLength,
        validateUpperCase,
        validateLowerCase,
        validateDigit,
        validateSpecialCharacter
    ];

    for (let validator of validators) {
        const result = validator(password);
        if (!result.isValid) {
            return result;
        }
    }

    return {
        isValid: true,
        error: ''
    };
}

module.exports = {
    validatePassword
};
