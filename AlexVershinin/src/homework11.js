import { i18n } from './i18n.js';

/**
 *
 * @param {string} str string for checking the palindrome
 * @param {boolean} trimSpaces will remove all spaces from string before checking
 * @returns {boolean} the string is palindrome or not
 */
export function isPalindrome(str) {
    if (typeof str !== 'string') {
        throw new Error(i18n.errors.parameterShouldBeString(typeof str));
    }

    if (str === '') {
        throw new Error(i18n.errors.stringIsEmpty);
    }

    const finalString = str.toLowerCase();
    let len = finalString.length;
    switch (len) {
        case 1:
            return true;
        case 2:
            if (finalString[0] === finalString[1]) {
                return true;
            } else {
                return false;
            }
        case 3:
            if (finalString[0] === finalString[2]) {
                return true;
            } else {
                return false;
            }
    }

    const lengthIsOdd = len % 2 !== 0;
    const halfLength = Math.floor(len / 2);
    for (let i = 0; i < Math.floor(halfLength / 2); i++) {
        const firstLastComparising = finalString[i] !== finalString[len - i - 1];

        let middleLeftRightComparising;
        if (lengthIsOdd) {
            middleLeftRightComparising = finalString[halfLength - i - 1] !== finalString[halfLength + i + 1];
        } else {
            middleLeftRightComparising = finalString[halfLength - i - 1] !== finalString[halfLength + i];
        }

        if (firstLastComparising || middleLeftRightComparising) {
            return false;
        }
    }

    return true;
}
