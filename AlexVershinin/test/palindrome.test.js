import { isPalindrome } from '../src/homework11.js';
import { i18n } from '../src/i18n.js';
import faker from 'faker';

describe('palindrome suite', () => {
    const positiveTestCases = ['A', '11', 'aba', '123abccba321', 'Aazzz30011003ZzzAa', ' 12aabc cbaA21 '];
    positiveTestCases.forEach((test) => {
        it(`should return true for the valid palindrome "${test}"`, () => {
            expect(isPalindrome(test)).toBe(true);
        });
    });

    it('should return true for the big palindrome string', () => {
        let randomString = faker.random.alphaNumeric(10_000_000);
        randomString += randomString.split('').reverse().join('');

        const start = new Date();
        expect(isPalindrome(randomString)).toBe(true);
        const end = new Date();

        const diffSeconds = (end.getTime() - start.getTime()) / 1000;
        expect(diffSeconds).toBeLessThan(0.5);
    });

    const negativeTestCases = ['ca', 'cab', 'aaaabb', ' df12221 12221 fd '];
    negativeTestCases.forEach((test) => {
        it(`should return false for the invalid palindrome "${test}"`, () => {
            expect(isPalindrome(test)).toBe(false);
        });
    });

    const negativeTestCases2 = [undefined, null, 2, -5.1, true, { test: 123 }, [3, 4]];
    negativeTestCases2.forEach((test) => {
        it(`should throw an error if parameter is a/an ${typeof test}`, () => {
            expect(() => {
                isPalindrome(test);
            }).toThrow(new Error(i18n.errors.parameterShouldBeString(typeof test)));
        });
    });

    it('should throw an error if parameter is empty', () => {
        expect(() => {
            isPalindrome('');
        }).toThrow(new Error(i18n.errors.stringIsEmpty));
    });
});
