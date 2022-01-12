describe("Testing Algorithms features", () => {
    const numbers = require ('../../lib/jasmine_examples/Algorithms');

    it('Dado dos numeros debera retornar la suma entre ambos', () =>{
        let result = numbers.suma(1, 3);
        expect(result).toBe(4);
    })
})