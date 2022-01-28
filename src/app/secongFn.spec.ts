import { regExp } from "./secongFn";

describe('Regular EXP', () => {
    it('is lowerCase', () => {
        expect(regExp('HELLO')).toBe('hello');
    });

    it('Direct attack...', () => {
        let first = 'BCOPL6277P';
        expect(first).toMatch(/[A-Z]{5}[0-9]{4}[A-Z]/);
    })

    it('To be bs To Equal...', () => {
        let a = {
            x: 10
        };
        let b = {
            x: 10
        };
        expect(a).toEqual(b);
    })

    it('test array',()=>{
        let arr = [1,2,3,5];
        expect(arr).toContain(5);
    })
})