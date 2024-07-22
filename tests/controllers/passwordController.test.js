const request = require('supertest');
const express = require('express');
const { validatePassword } = require('../../src/services/validate-password.service');

const app = express();
app.use(express.json());

app.post('/validate-password', async (req, res) => {
    const { password } = req.body;

    if (!password) {
        return res.status(400).json({
            error: 'Password is required.'
        });
    }

    const validationResult = await validatePassword(password);

    if (!validationResult.isValid) {
        return res.status(400).json({ error: validationResult.error });
    }

    res.status(200).json(validationResult);
});

describe('POST /validate-password', () => {
    test('should return 400 if password is missing', async () => {
        const response = await request(app)
            .post('/validate-password')
            .send({});
        expect(response.status).toBe(400);
        expect(response.body).toEqual({
            error: 'Password is required.'
        });
    });

    test('should return 400 if password is invalid', async () => {
        const response = await request(app)
            .post('/validate-password')
            .send({ password: 'short' });
        expect(response.status).toBe(400);
        expect(response.body).toEqual({
            error: 'Password must contain at least 8 characters.'
        });
    });

    test('should return 200 if password is valid', async () => {
        const response = await request(app)
            .post('/validate-password')
            .send({ password: 'ValidP@ss1' });
        expect(response.status).toBe(200);
    });
});