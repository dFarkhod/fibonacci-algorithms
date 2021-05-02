// bottom-up - O(n)
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

    let previous_first = 0, previous_second = 1, current = 1;
    for (let i = 2; i <= number; i++) {
        current = previous_first + previous_second;
        previous_first = previous_second;
        previous_second = current;
    }
    return current;
};