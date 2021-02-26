const request = require ('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ONG', () => {
    beforeEach(async() => {
        // await connection.migrate.rollback(); ZERAR O BANCO DE TESTE
        await connection.migrate.latest();
    })
    afterAll(async()=>{
        await connection.destroy();
    });

    it("É esperado que seja possível criar nova ONG", async ()=>{
        const response = await request(app).post('/ongs').send({
            name: "Ong 1",
            email: "contato@contato.com",
            whatsapp: "11955779366",
            city: "São Paulo",
            uf: "SP"
        });
        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);
    });
    
    
})