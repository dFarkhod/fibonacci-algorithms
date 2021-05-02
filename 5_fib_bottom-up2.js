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
    let storage = [number];
    storage[1] = 1;
    storage[2] = 1;
    for (let i = 3; i <= number; i++)
    {
        storage[i] = storage[i - 1] + storage[i - 2];
    }

    return storage[number];
}