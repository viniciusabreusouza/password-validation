const validatePasswordService = require('../services/validate-password.service');

async function validatePassword(req, res) {
    const { password } = req.body;

    if(!password) {
        return res.status(400).json(
            {error: 'Password is required.'}
        ); 
    }

    const validate = await validatePasswordService.validatePassword(password);

    if(!validate.isValid) {
        return res.status(400).json(
            {error: validate.error}
        ); 
    }

    return res.status(204).end();
}

module.exports = {
    validatePassword,
};