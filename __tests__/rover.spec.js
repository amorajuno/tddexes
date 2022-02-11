import { sum, subtract, percent } from '../rover.js';

// describe('calculator sum', () =>{
//     test('should sum two positive values', ()=>{
//         const result = sum(2,2);

//         expect(result).toBe(4);
//     });
// })

// describe('calculator subtract', ()=>{
//     test('should subtract two positive values', ()=>{

//         const result = subtract(2,2);

//         expect(result).toBe(0)
//     })
// })

describe('calculator percentage', ()=>{
    test('should calculate the first number"s percentage of the second', ()=>{
        const result = percent(4,185000);

        expect(result).toBe(7400);
    })
})