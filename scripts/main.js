// Reverse a String: Write a function that reverses a given string.
function reverseString(str) {
    return str.split("").reverse().join("");  
}
console.log(reverseString("hello"))

// Count Characters: Create a function that counts the number of characters in a string.
function countCharacters(str) {
    return str.length
}
console.log(countCharacters("ephraim"))

// Capitalize Words: Implement a function that capitalizes the first letter of each word in a sentence.
function capitalizeWords(str) {
    return str.split(" ").map(word => word[0].toUpperCase() + word.slice(1)).join(" ")
}
 console.log(capitalizeWords("good morning ephraim"));

// Find Maximum and Minimum: Write functions to find the maximum and minimum values in an array of numbers.
function findMinMax(arr) {
    return [Math.min(...arr), Math.max(...arr)]
}
console.log(findMinMax([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));


// Sum of Array: Create a function that calculates the sum of all elements in an array.
function sumOfArray(arr) {
    return arr.reduce((a, b) => a + b, 0);
}
console.log(sumOfArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// Filter Array: Implement a function that filters out elements from an array based on a given condition.
function filterArray(arr, condition) {
    return arr.filter(condition);
}
console.log(filterArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], x => x % 2 === 0));

// Factorial: Write a function to calculate the factorial of a given number.
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}
console.log(factorial(5));

// Prime Number Check: Create a function to check if a number is prime or not.
function isPrime(n) {
    if (n <= 1) {
        return false;
    }
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        }
    }
}
console.log(isPrime(4));

// Fibonacci Sequence: Implement a function to generate the Fibonacci sequence up to a given number of terms. (search on the net )
function fibonacci(n) {
    if (n <= 1) {
        return [0, 1];
    } else {
        const sequence = fibonacci(n - 1);
        sequence.push(sequence[sequence.length - 1] + sequence[sequence.length - 2]);
        return sequence;
    }
}
console.log(fibonacci(10));
