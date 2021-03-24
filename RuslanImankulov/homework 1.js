//Func to check palindrome
const isPalindrome = (str) => {
    for (let i = 0; i < str.length/2; ++i) {
        if (str[i] !== str[str.length - 1 - i]) {
            return false
        };
    }
    return true
  }
  
//Func to check palindrome v1
  const isPalindrome_v1 = (str) => {
    if (str.length === 1) {
      return true
    }
      const firstPart = str.slice(0, Math.floor(str.length/2))
      const secondPart = str.slice(-Math.floor(str.length/2))
      if (firstPart === secondPart.split('').reverse().join('')){
          return true
      }
    return false
  }

// Func to sort arrays (not best, but i tried)
const quickSort = (data, start = 0, end = data.length - 1) => {
    console.log(data);
    if (data.length === 0){
      return console.log('Вы передали пустой массив')
    };
    let result = data;
    let left = start + 1;
    let right = end;
    while (left <= right) {
      while (result[left] < result[start]){
        ++left;
      };
      while (result[right] > result[start]){
        --right ;
      };
      if (left <= right){
        [result[right], result[left]] = [result[left], result[right]];
        ++left;
        --right;
      };
    };
    let value = result[start];
    result[start] = result[right];
    result[right] = value;
    if (right > 0) {
        quickSort(result, 0, right)
    };
    if (left < end){
      quickSort(result, left, end)
    };
    return result;
  }

  console.log(isPalindrome('1'))