//Per Scholas Study Guide:

// 1. JavaScript Data Types
// Primitive values (immutable datum represented directly at the lowest level of the language)
// Boolean type
// Null type
// Undefined type
// Number type
// BigInt type
// String type
// Symbol type
// Objects (collections of properties)

// 2. Difference Between Const Let and Var
// var can be declared without initialization
// let can be declared without initialization
// const cannot be declared without initialization

// 3. Pass By Value vs Pass By Reference
// In JavaScript, you can pass by value and by reference. The main difference between the two is that passing by value happens when assigning primitives while passing by reference when assigning objects.

// 4. Map , Filter and Reduce ( Mutation or not)
// .map() does mutates the array on which is called
// .filter() does not mutate the array on which it is called.
// .reduce() does not mutate the array it is used on. However, it is possible for code inside the callback function to mutate the array.

// 5. Falsey Values
// a truthy value is a value that is considered true when encountered in a Boolean context. Falsy values In JavaScript, a falsy value is a value that is considered false when encountered in a Boolean context.

// 6. Global Variables
// A Global variable is a variable that is declared in the global scope, making it a property of the global object. Global variables are accessible from all other (local) scopes.

// 7. This
// “This” keyword refers to an object that is executing the current piece of code. It references the object that is executing the current function. If the function being referenced is a regular function, “this” references the global object.

// 8. double equals vs triple equals
// triple equals ( === ) will do the same comparison as double equals (including the special handling for NaN , -0 , and +0 ) but without type conversion; if the types differ, false is returned.

// 9. Coercion
// Type Coercion refers to the process of automatic or implicit conversion of values from one data type to another. This includes conversion from Number to String, String to Number, Boolean to Number etc. when different types of operators are applied to the values.

// 10. typeof
// typeof is a JavaScript keyword that will return the type of a variable when you call it. You can use this to validate function parameters or check if variables are defined. There are other uses as well.

// 11. delete (not the http method)
// Delete is an operator that is used to destroy array and non-array(pointer) objects which are created by new expression.

// 12. Object Notations
// JavaScript Object Notation (JSON) is a standard text-based format for representing structured data based on JavaScript object syntax. It is commonly used for transmitting data in web applications (e.g., sending some data from the server to the client, so it can be displayed on a web page, or vice versa).

// 13. Strict Mode
// Strict Mode was a new feature in ECMAScript 5 that allows you to place a program, or a function, in a “strict” operating context.

// 14. Anonymous Functions
// Anonymous Function is a function that does not have any name associated with it. Normally we use the function keyword before the function name to define a function in JavaScript, however, in anonymous functions in JavaScript, we use only the function keyword without the function name.

// 15. Callbacks
// A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.

// 16. Closure
// In JavaScript, a closure is a function that references variables in the outer scope from its inner scope. The closure preserves the outer scope inside its inner scope. To understand the closures, you need to know how the lexical scoping works first.

// 17. instanceof
// The instanceof operator tests to see if the prototype property of a constructor appears anywhere in the prototype chain of an object.

// 18. IIFE
// An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined.

// 19. HTML5 APIS
// API (Application Programming Interfaces) Application Programming Interfaces Stand in HTML5. It is a set of routines, protocols, and tools for building software applications. An API build collection of pre-built components, that can be used with JavaScript.

// 20. Destructuring
// Destructuring is a JavaScript expression that allows us to extract data from arrays, objects, and maps and set them into new, distinct variables. Destructuring allows us to extract multiple properties, or items, from an array​ at a time.

// 21. Rest and Spread
// The rest operator (…) allows us to call a function with any number of arguments and then access those excess arguments as an array. The rest operator also allows us in destructuring array or objects. The spread operator (…) allows us to expand an iterable like array into its individual elements.

// 22. Arrow Function differences
// Unlike regular functions, arrow functions do not have their own this . The value of this inside an arrow function remains the same throughout the lifecycle of the function and is always bound to the value of this in the closest non-arrow parent function.

// 23. HTTP Methods
// GET, POST, PUT, PATCH, and DELETE are the five most common HTTP methods for retrieving from and sending data to a server.

// 24. HTTP Status Codes
// Informational responses (100–199)
// Successful responses (200–299)
// Redirection messages (300–399)
// Client error responses (400–499)
// Server error responses (500–599)

// 25. HTTP 2 and HTTP 3
// The major difference is that HTTP/3 is based on QUIC as a transport layer to handle streams while HTTP/2 uses TCP to handles streams in the HTTP layer. HTTP/3 has a much quicker handshake to establish a secure session compared to HTTP/2 which achieves this using TCP and TLS.

// 26. Restful Routes
// A RESTful route is a route that provides mapping from HTTP verbs (get, post, put, delete, patch) to controller CRUD actions (create, read, update, delete). Instead of relying solely on the URL to indicate what site to visit, a RESTful route depends on the HTTP verb and the URL.

// 27. Promises
// If the promise is rejected, the rejected call back will be called instead. A promise is simply a placeholder for an asynchronous task which is yet to be completed. When you define a promise object in your script, instead of returning a value immediately, it returns a promise.

// 28. Async Await
// Async/Await is the extension of promises which we get as a support in the language. You can refer Promises in Javascript to know more about it. Async: It simply allows us to write promises based code as if it was synchronous and it checks that we are not breaking the execution thread.

// 29. CSS Specificity
// Specificity is a weight that is applied to a given CSS declaration, determined by the number of each selector type in the matching selector. When multiple declarations have equal specificity, the last declaration found in the CSS is applied to the element.

// 30. Semantic HTML
// Semantic HTML or semantic markup is HTML that introduces meaning to the web page rather than just presentation. For example, a <p> tag indicates that the enclosed text is a paragraph. This is both semantic and presentational because people know what paragraphs are, and browsers know how to display them.

// 31. How do you make a Circle in CSS
// Image result for javascript How do you make a Circle in CSS
// The main CSS property responsible for the circular shape is the border-radius property. Setting the radius of the corners to 50% of the width/height results in a circle.

// 32. What is Z-index
// The z-index property specifies the stack order of an element. An element with greater stack order is always in front of an element with a lower stack order.

// 33. Vendor Prefixes Purpose
// By specifying a browser or vendor prefix within your CSS stylesheet or style property within a JavaScript function, you can gain control of how an element will render within a specific browser (Chrome, Firefox, IE, etc.). This gets you access to these browser's newest and coolest styles and elements.

// 34. CSS Grid and Flexbox
// Dimensions define the primary demarcation between Flexbox and CSS Grid. Flexbox was designed specifically for one-dimensional layouts, while CSS Grid is engineered to enable two-dimensional layouts. Therefore, CSS Grid can easily render rows and columns simultaneously.

// 35. Speed Up a Slow App
// #1. Reduce application size with Webpack
// #2. Remove unused JavaScript
// #3. Place JavaScript at the bottom of the page
// #4. Use minification
// #5. Use Gzip compression
// #6. Use HTTP/2
// #7. Use pointer references
// #8. Trim your HTML
// #9. Use document.getElementById()
// #10. Batch your DOM changes
// #11. Buffer your DOM
// #12. Compress your files
// #13. Minify JavaScript code for smaller file sizes
// #14. Asynchronous loading of JavaScript: Defer and Async tags
// #15. Exclude unused components of .js libraries
// #16. Don’t forget var keyword when assigning a variable’s value for the first time.
// #17. Avoid the use of eval() or the Function constructor
// #18. Avoid unnecessary access to DOM
// #19. Use a JavaScript content delivery network (CDN)
// #20. Limit library dependencies

// 36. CRUD
// CRUD (Create, Read, Update, Delete) is an acronym for ways one can operate on stored data. It is a mnemonic for the four basic functions of persistent storage.

// 37. CRAP
// C.R.A.P., a design principle developed by Robin Patricia Williams, stands for Contrast, Repetition, Alignment, and Proximity. By understanding CRAP, you can consistently deliver effective design, whether it's for a website, a landing page, an eBook, or just a banner ad.

// 38. SOLID
// S.O.L.I.D The first 5 principles of Object Oriented Design with JavaScript · S.O.L.I.D. STANDS FOR:
// S — Single responsibility principle
// O — Open closed principle
// L — Liskov substitution principle
// I — Interface segregation principle
// D — Dependency Inversion principle

// 39. OOP
// JavaScript is a prototype based object oriented language, which means it doesn't have classes rather it define behaviors using constructor function and then reuse it using the prototype.

// 40. Functional Programming
// functional programming is a programming paradigm where programs are constructed by applying and composing functions.

// 41. Recursion
// A recursive function is a function that calls itself until it doesn't. And this technique is called recursion.

// 42. SPA
// An SPA (Single-page application) is a web app implementation that loads only a single web document, and then updates the body content of that single document via JavaScript APIs such as XMLHttpRequest and Fetch when different content is to be shown.

// 43. MPA
// a multi-page application (MPA) is an app that has more than one page. It works in a traditional way, requiring the app to reload entirely every time a user interacts with it. MPAs generally have large data and complex architecture.

// Imitation

// Code Along

// Write a function printSumthat will console.log the result of 10 + 10

// function printSum() {
//     let sum = 10 + 10;
//     return console.log(sum);
// }
// console.log(printSum());

// Extra Reps

// Write a function printTrianglethat will print these pound signs to the console (there are 5 console.logs inside the function):

// Make it so that printTrianglewill print the pound signs using a for loop (there is a for loop and only 1 console.log inside the function).
// Make it so that when you can invoke the function with the number of pound signs to print (not just hardcoded to print 5)

// function printTriangle(count) {
//     let string = ''; //empty string initialized
//     for (let i = 1; i <= count; i++) {
//         //first loop to count to however many numbers end up in the argument
//         for (let j = 0; j < i; j++) {
//             //second loop to increment
//             string += '#'; //what to increment
//         }
//         string += '\n'; //move to different line after loop
//     }
//     string; //what to print
// }

// console.log(printTriangle(5)); //calling function and count times

// Break a problem down into steps
// Write a function that will return true if a word is a Palindrome, or will return false if not.

// Problem solve one step at a time
// Each step might require research
// Work in layers, one layer at a time. Don't jump ahead until each piece has been tested and works.

// Determine if each step will require research, and research it.

// reverse the word (how?)
// check if the word is the same as the reverse (how?)
// return true or false

// function isPalindrome(str) {
//     //split the string into an array of single letters
//     let splitStr = str.split('');
//     // console.log(splitStr); //test it
//     //reverse array of single letters
//     let reversedStr = splitStr.reverse();
//     // console.log(reversedStr); //test it
//     //join single letters back into a string
//     let joinedStr = reversedStr.join('');
//     console.log(joinedStr); //test it
//     //conditional to compare strings and output boolean
//     if (str === joinedStr) {
//         return true;
//     } else return false;
// }

// console.log(isPalindrome('racecar'));
// console.log(isPalindrome('flamingo'));

// Practice

// Exercises

// Write a function called square that takes in a number and squares it and then assign the result to variable called ans

// function square(num) {
//     return num * num;
// }
// console.log(square(5));

// Write a function called minusOne that takes a parameter num. Assuming the argument is a number, print the argument -1.

// function minusOne(num) {
//     return num - 1;
// }
// console.log(minusOne(10)); // 9
// console.log(minusOne(100)); // 99
// console.log(minusOne(Infinity)); // Infinity

// Write a function makeSentence that takes three parameters and concatenates them into a fully formed sentence.

// function makeSentence(word1, word2, word3) {
//     return 'Oh boy, do ' + word1 + ' ' + word2 + ' ' + word3 + ' or what?';
// }
// console.log(makeSentence('I', 'want', 'chimichangas'));
// console.log(makeSentence('You', 'crave', 'pizza'));

// Write a function called getLastElementthat takes a parameter arr.
// Invoke the function with an array as the argument.
// The function should print the last element within the array.
// Hint: arr[arr.length - 1]

// function getLastElement(arr) {
//     //iterate over array's length
//     for (let i = 0; i < arr.length; i++) {
//         //return last element on the length of the array
//         return arr[arr.length - 1];
//     }
// }

// console.log(getLastElement([1, 2, 3, 4, 5, 6])); // 6
// console.log(getLastElement(['a', 'b', 'c'])); // 'c'
// console.log(
//     getLastElement([
//         [1, 2, 3],
//         [4, 5, 6],
//     ])
// ); // [4, 5, 6]

// Extra

// Write a function divideThreeNumsthat takes three parameters and prints the third parameter divided by the result of the second parameter divided by the first.

// function divideThreeNums(num1, num2, num3) {
//     //order of the parameters is important
//     return num3 / (num2 / num1);
// }

// console.log(divideThreeNums(10, 5, 2)); // 4
// console.log(divideThreeNums(30, 2, 9)); // 135

// Exercises ( aka example whiteboard questions for junior devs)
// Write a function that accepts a string. The function should capitalize the first letter of each word in the string then return the capitalized string.

// function capitalize(str) {
//     //split string to separate words into an array
//     let arr = str.split(' ');
//     // console.log(arr); //test it
//     //iterate over array and output first character
//     for (let i = 0; i < arr.length; i++) {
//         arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1); //target first element, capitalize it and added to the rest of the string in the array
//         // console.log(arr[i]); //test it
//     }
//     //joined the array to a string
//     let result = arr.join(' ');
//     return result;
// }

// // Examples
// console.log(capitalize('a short sentence')); // --> 'A Short Sentence'
// console.log(capitalize('a lazy fox')); // --> 'A Lazy Fox'
// console.log(capitalize('look, it is working!')); // --> 'Look, It Is Working!'

// Write a function that takes three parameters (numbers), sums them, converts the sum into a string and returns the string (eg. "123")

// Use your google-fu to research converting a number into a string
// Invoke the function a couple of times with different arguments each time
// Experiment

// What happens if you supply more arguments than there are parameters?
// What happens if you supply fewer arguments than there are parameters?

// function sumToStr(num1, num2, num3) {
//     console.log(arguments); //still logs fourth additional argument
//     //add numbers
//     let sum = num1 + num2 + num3;
//     //convert to string
//     let str = sum.toString();
//     //making sure output is string
//     // console.log(typeof str);//test it
//     //return result
//     return str;
// }

// console.log(sumToStr(6, 6, 6));
// console.log(sumToStr(8, 18, 24));
// console.log(sumToStr(1, 1, 1, 1)); //only sums three arguments, ignores fourth
// console.log(sumToStr(1, 1)); //NaN for missing argument

// Code handling more or fewer arguments:

// function sumToStr(num1, num2, num3) {
//     //initialized variable for results
//     let result = 0;
//     //loop to handle arguments discrepancy
//     for (let i = 0; i < arguments.length; i++) {
//         //result and sum of arguments
//         result += arguments[i];
//     }
//     //turn final result into a string
//     return result.toString();
// }

// console.log(sumToStr(6, 6, 6)); //18
// console.log(sumToStr(8, 18, 24)); //50
// console.log(sumToStr(1, 1, 1, 1)); //4
// console.log(sumToStr(1, 1)); //2
