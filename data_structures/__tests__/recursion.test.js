const {factorial} = require('../recursion')

describe('factorial recursion', ()=>{
    it('returns 1 for input of 0 and 1', ()=>{
        expect(factorial(0)).toBe(1);
        expect(factorial(1)).toBe(1);
    })
    
    it('returns correct factorial for input', ()=>{
        expect(factorial(2)).toBe(2);
        expect(factorial(5)).toBe(120);
        expect(factorial(10)).toBe(3628800);
    })
})