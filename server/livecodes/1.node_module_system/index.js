// const getNotes = require("./notes");

// const msg = getNotes();

// console.log(msg);

// const add = require("./utils");

// const sum = add(4, 5);
// console.log(sum);

// console.log("Hello world!");
// const fs = require("fs");

// fs.writeFileSync("notes.txt", "DCI...");
// fs.appendFileSync("notes.txt", " JavaScrip!");

// Task 1. Append a message to notes.txt
// 1.	Use appendFileSync to append to the file
// 2.	Run the script
// 3.	Check your work by opening the file and viewing the appended text.

// Task 2. Define and use a function in a new file.
// 1.	Create a new file called notes.js
// 2.	Create getNotes function that returns “Your notes …”
// 3.	Export getNotes function
// 4.	From index.js, load in and call the function printing the message to the console.

// Task 3. Define and use a functions in a new file.
// 1.	Inside notes.js file create two functions:  printMultiplication and printDivision functions. printMultiplication function should return multiplications of two parameters. printDivision function should return division of first parameter into the second parameter.
// 2.	Export both functions.
// 3.	From index.js, load in and call both functions and print results to the console.

// const { printDivision, printMultiplication } = require("./notes.js");

// const div = printDivision(8, 2);
// const multi = printMultiplication(5, 6);

// console.log(div);
// console.log(multi);

// const validator = require("validator");

// console.log(validator.isURL("www.web@gmail.com"));

// Task 4. Use the chalk library in your project
// 1.	Install chalk version 3.0.0 from npm.
// 2.	Load chalk into index.js.
// 3.	Use it to print the string “Success!” to the console in green.
// 4.	Test your work.

// const chalk = require("chalk");

// console.log(chalk.green.bgBlack("Success!"));

// const getNotes = require("./notes");

// import { getNotes } from "./notes.js";

// const msg = getNotes();

// console.log(msg);

// const args = process.argv.slice(2);

// function length(arr) {
//   return arr.length;
// }

// const numbers = args.map((arg) => parseInt(arg));

// console.log(numbers);
// console.log(typeof numbers[0]);

const func1 = () => {
  console.log("Hi, I am function 1");
};

debugger;

const func2 = () => {
  console.log("Hi, I am function 2");
};

const args = process.argv[2];

switch (args) {
  case "func1":
    console.log(func1());
    break;
  case "func2":
    console.log(func2());
  default:
    console.log("Wrong or no param!");
    break;
}
