// Write a program that opens a file called "my-file.txt", then prints
// each line from the file.
// If the program is unable to read the file (for example it does not exist),
// then it should print the following error message: "Unable to read file: my-file.txt"

"use strict";

declare function require(path: string): any;
const fs = require("fs");
try {
  let fileText: string = fs.readFileSync("my-file.txt", "utf8");
  console.log(fileText);
} catch (e) {
  console.log("Unable to read file: my-file.txt");
}
