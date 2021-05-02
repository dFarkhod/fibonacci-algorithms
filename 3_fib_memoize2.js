// memoize - O(n)
let cache = {};
let start = new Date().getTime();
let result = calc_fib(40);
let end = new Date().getTime();
let time = end - start;
console.log('natija: ' + result +'\nketgan vaqt: ' + time + 'ms');

function calc_fib(number) {
    if (number === 0 || number === 1) {
        return number;
    }
    if (number === 2) {
        return 1;
    }
    if (number in cache)
        return cache[number];
    
    let result = calc_fib(number- 1) + calc_fib(number - 2);
    cache[number] = result;
    return result;
}