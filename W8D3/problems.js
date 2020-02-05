// function mysteryScoping1() {
//     var x = 'out of block';
//     if (true) {
//         var x = 'in block';
//         console.log(x);
//     }
//     console.log(x);
// }

// function mysteryScoping2() {
//     const x = 'out of block';
//     if (true) {
//         const x = 'in block';
//         console.log(x);
//     }
//     console.log(x);
// }

// function mysteryScoping3() {
//     const x = 'out of block';
//     if (true) {
//         var x = 'in block';
//         console.log(x);
//     }
//     console.log(x);
// }

// function mysteryScoping4() {
//     let x = 'out of block';
//     if (true) {
//         let x = 'in block';
//         console.log(x);
//     }
//     console.log(x);
// }

// function mysteryScoping5() {
//     let x = 'out of block';
//     if (true) {
//         let x = 'in block';
//         console.log(x);
//     }
//     let x = 'out of block again';
//     console.log(x);
// }

function madLib(verb, adjective, noun) {
    console.log(`We shall ${verb.toUpperCase()} the ${adjective.toUpperCase()} ${noun.toUpperCase()}`);
}

// madLib('make', 'best', 'guac');
// "We shall MAKE the BEST GUAC."

function isSubstring(searchString, subString) {
   return searchString.includes(subString);
}

// isSubstring("time to program", "time")
// true

// isSubstring("Jump for joy", "joys")
// false

function fizzBuzz(array) {
    var new_arr = [];
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if (element % 3 === 0 ^ element % 5 === 0) {
            new_arr.push(element);
        }
    }
    return new_arr;
}

// console.log(fizzBuzz([1, 5, 10, 15, 18]))

function isPrime(num) {
    if (num < 2) {
        return false;
    }

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
}
// console.log(isPrime(2))
// // true

// console.log(isPrime(10))
// // false

// console.log(isPrime(15485863))
// // true

// console.log(isPrime(3548563))
// // false
function sumOfNPrimes(num) {
    let sum = 0;
    let primes = firstNPrimes(num);
    for (let i = 0; i < primes.length; i++) {
        sum =  sum + primes[i];
    }
    return sum;
}

function firstNPrimes(num) {
    let primes = [];
    let i = 2;
    while (primes.length < num) {
        if (isPrime(i)) {
            primes.push(i);
        }
        i++;
    }
    return primes;
}
console.log(sumOfNPrimes(0));
// 0

console.log(sumOfNPrimes(1));
// 2

console.log(sumOfNPrimes(4));
// 17