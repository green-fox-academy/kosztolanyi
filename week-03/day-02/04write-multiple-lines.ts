// Create a function that takes 3 parameters: a path, a word and a number
// and is able to write into a file.
// The path parameter should be a string that describes the location of the file you wish to modify
// The word parameter should also be a string that will be written to the file as individual lines
// The number parameter should describe how many lines the file should have.
// If the word is 'apple' and the number is 5, it should write 5 lines
// into the file and each line should read 'apple'
// The function should not raise any errors if it could not write the file.

"use strict";
export {};

declare function require(path: string): any;
const fs = require("fs");

function writeLines(path: string, word: string, number: number): any {
  try {
      let fileContent: string= '';
    for (let i: number = 0; i < number; i++) {
        fileContent = fileContent+ word + '\n';
    }
    fs.writeFileSync(path, fileContent);
  } catch {
    console.log("there is no file: " + path);
  }
}
writeLines("04my-file.txt", "apple", 5);
