// Prevent us from attempting to use variables
// that are not declared
"use strict"
/*
for (let i = 0; i < 10; i++) {
if (i === 5) {
continue;
}
console.log(i);
}
Output: 0 1 2 3 4 5 6 7 8 9  

for (let i = 0; i < 10; i++) {
if (i === 5) {
break; // Exit the loop when i is 5
}
console.log(i);
}
Output:  0 1 2 3 4

for (let i = 0; i < 10; i++) {
if (i === 5) {
    continue; // Skip the iteration when i is 5
}
console.log(i);
}
Output:  0 1 2 3 4 6 7 8 9        

const numbers = [3, -1, 8, 4, -5, 7];

for (let i = 0; i < numbers.length; i++) {
if (numbers[i] < 0) {
continue; // Skip negative numbers
}
console.log(numbers[i]);
}
Output : 3, 8, 4, 7


let i = 0;

while (i < 10) {
i++;
if (i % 2 !== 0) {
console.log(i); // Only log the odd numbers
}
}
Output: 1 3 5 7 9 9

let i = 0;

while (i < 10) {
i++;
if (i === 7) {
break; // Exit the loop when i is 7
}
if (i % 2 !== 0) {
console.log(i); // Only log the odd numbers
}
}
Output:  1 3 5 6 

let i = 0;

while (i < 10) {
if (i % 2 !== 0) {
console.log(i); // Only log odd numbers
}
if (i === 7) {
break; // Exit the loop when i is 7
}
i++;
}
Output: 1 3 5 7


while (i < 10) {
i++;
if (i % 2 === 0) {
continue; // Skip even numbers
}
console.log(i);
}
Output:  1 3 5 7 9 9

let i = 0;

while (i < 10) {
    if (i % 2 === 0) {
    i++;
    continue; // Skip even numbers
    }
    console.log(i);
    i++;
}
    Output:  1 3 5 7 9 9

    let i = 0;

do {
        i++;
        console.log(i); // Log the current value of i
    } while (i < 5);

    Output:  1 2 3 4 5

let counter = 0;

do {
        counter++;
        if (counter === 5) {
        break; // Exit the loop when counter is 5
        }
        console.log(counter);
    } while (counter < 10);

    Output:  1 2 3 4 undefined in Edge
    Output:  1 2 3 4 4 in Firefox

let counter = 0;

do {
counter++;
if (counter === 5) {
break; // Exit the loop when counter is 5
}
console.log(counter); // Log the current value of counter
} while (counter < 10);

console.log("Loop completed"); // Add a final log to indicate completion
Output:  1 2 3 4 Loop completed
        
*/
    

