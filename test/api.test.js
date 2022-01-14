const request = require('supertest');
const app = require('../app')
const mongoose = require('mongoose');

describe('Testing post route', () => {
    test('tests /api/listV2 endpoints', async () => {
        try {
            const response = await request(app).get(`/api/post/listV2`)
            expect(response.statusCode).toBe(200);
        }
        catch (error) {
            console.log(error)
            expect(error).toBe(401);
        }
    });
});


afterAll( async () =>{
    await mongoose.connection.close();
})