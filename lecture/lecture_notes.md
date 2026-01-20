# Class Notes

## 12.1.26

### Hoisting

1. The variable declaration and Function declaration will move to top of the scope.
2. Hoisting Will Perform Only in Var variable , not in let and const
 (no initialization, as let and const are of BLOCK scope).

#### WHY?

Js Is synchronous that is line by line - like interpreter 
but when line by line code reaches in JS engine it is stored in a place caled "CALLED STACK", then is processed altogether that is like a COMPILER , and in such instance var goes to top of the scope.

## 14.1.26

In for Loop do not use VAR , use let variable instantiatoin ONLY.

---

#19.01.26
. push (element) : Adds an element to the end of the array and returns the new length of the array.

let fruits = ["apple", "banana"];
let newLength = fruits.push("cherry"); // 3

. pop() : Removes the last element from the array and returns that element.

let fruits = ["apple", "banana", "cherry"];
let removed = fruits.pop(); // "cherry"

. shift() : Removes the first element from the array and returns that element.

let fruits = ["apple", "banana", "cherry"];
let removed = fruits. shift(); // "apple"

:

. unshift(element) : Adds one or more elements to the beginning of the array and returns the new length.

let fruits = ["banana", "cherry"];
let newLength = fruits.unshift("apple"); // 3

. slice(start, end) : Returns a new array containing elements from the original array within the specified range (from start to
end , not inclusive).