const generateUniqueId = require ('../../src/utils/generatedUniqueId');

describe('Generate Unique ID', ()=> {
    it('Isso vai gerar um unico ID', ()=>{
        const id = generateUniqueId();
        expect(id).toHaveLength(8);
    })
})  