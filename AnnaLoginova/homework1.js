// Create function to check is the string/number a palindrome
function reverseString(str) {
    return str.split('').reverse().join('');
}
function isPalindrome(value) {
    const str = value.toString();
    const firstHalfStr = str.substring(0, Math.floor(str.length/2));
    const secondHalfStr = str.substring(Math.ceil(str.length/2), str.length);
    return (firstHalfStr.toLowerCase() === reverseString(secondHalfStr.toLowerCase()));
}
console.log('------ Check Palindrome function ------');

console.log('"ghJ4jhg" is ' + isPalindrome('ghJ4jhg'));
console.log('"547282745" is ' + isPalindrome('547282745'));
console.log('32546 is ' + isPalindrome(32546));
console.log('"A" is ' + isPalindrome('A'));

console.log('\n------ Check Quick Sort algorithm ------');

// Implementation of Quick Sort algorithm
function quickSort(array) {
    if (array.length <= 1) return array
    const lessFirst = [];
    const moreFirst = [];
    for (const index of [...Array(array.length-1).keys()]) {
        (array[index + 1] < array[0]) ? lessFirst.push(array[index + 1]) : moreFirst.push(array[index + 1]);
    }
    return (quickSort(lessFirst)).concat([array[0]], quickSort(moreFirst))
}

console.log(`${[5,4,25,8,3,5,26,2,54,13,36,2,1,5,5,3,2]} = ${quickSort([5,4,25,8,3,5,26,2,54,13,36,2,1,5,5,3,2])}`)
console.log(`'${[]}' = '${quickSort([])}'`)
console.log(`${['fdg', 'd', 'a', 're', 32]} = ${quickSort(['fdg', 'd', 'a', 're', 32])}`)
console.log(`'dsfgsfhdgfhsghfx' = ${quickSort('dsfgsfhdgfhsghfx')}`)
