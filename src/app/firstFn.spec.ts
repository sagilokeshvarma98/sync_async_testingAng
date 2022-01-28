import { addition } from './firstFn'

describe('First Function', () => {
    it('Is Added?', () => {
        expect(addition(10,20)).toBe(30);
    });
})