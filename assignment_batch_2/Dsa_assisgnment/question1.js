// Exercise 1: In a computer system, N values are stored in the memory. A
// programmer needs to find out the largest and smallest value present in the
// memory. But the condition is, only one scan is allowed, multiple scans/passes
// are not allowed. Write a program to find the largest and smallest number from
// the given list of numbers in single pass.

let memo = [1, 2, 5, 8, 10]

let smallest_number = Number.MAX_VALUE;
// returns the largest number in javascript which is  infinity;
// comparing with it we get smallest number because any number given is less than infinity;

let largest_number = Number.MIN_VALUE;
// min_value gives the smallest number that is -infinity;
// comparing with it we get largest number because any number given is greater than -infinity;

for (let i = 0; i < memo.length; i++) { 
    if (memo[i] < smallest_number) {
          smallest_number = memo[i];
    }
    if (memo[i] > largest_number) { 
          largest_number = memo[i];
    }
}

console.log("smallest_number: " + smallest_number,  "largest_number: " + largest_number);