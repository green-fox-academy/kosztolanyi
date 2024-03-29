// Write a function that takes a filename as string,
// then returns the number of lines the file contains.
// It should return zero if it can't open the file, and
// should not raise any error.

"use strict";

declare function require(path: string): any;
const fs = require("fs");

function filenameAsString(filename: string): number {
  try {
    let lines: string[] = fs.readFileSync(filename, "utf8").split("\n");
    return lines.length;
    //console.log(fs.readFileSync(filename, 'utf8').length);
  } catch (e) {
    console.log(0);
  }
}
console.log(filenameAsString("my-files.txt"));
