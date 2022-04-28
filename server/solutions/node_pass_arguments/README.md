# Star Wrapper

⭐ Make stars appear in your terminal! ⭐

## What you will be doing

You will be writing a CLI application which will make a row of stars appear before and after a string input.

This program should accept 2 arguments, in the following order;

- the **number** of stars to print on each row
- the **string** to be wrapped inside the rows of stars

### Example

###### Command

```bash
$ node index.js 12 Sonnenschein
```

###### Response

```bash
************
Sonnenschein
************
```

## Tasks

### Task 1

1. Create the file `stars.js`
2. Inside this file, write a function that takes 2 arguments;
   - the **number of stars**
   - the **string** of text to display

### Task 2

1. Inside your function, and using `console.log()`, print 3 lines of text;

   - **Line 1** - Should be a row of stars - the number of stars must equal the number received into the function
   - **Line 2** - The text
   - **Line 3** - Same as line 1

2. If no **number of stars** are passed to the function, the function should use **10** as the default number
3. If no **string** is passed into the function, the function should use **"hi"** as the default string
4. Export your function

## Task 3

1. Create the file `index.js`
2. Import the function you created in `stars.js`
3. Read the arguments from the terminal with `process.argv` and run the function you just imported, passing in those arguments

## Task 4

Test your program in the terminal, by running the command

```bash
node index.js 12 Sonnenschein`
```
