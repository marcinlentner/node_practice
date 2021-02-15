#!/usr/bin/env node
"use strict";

// use built-in package 'path'
var path = require("path");

// access file system to print content of some file
// fs is a node built-in package
var fs = require("fs");

var args = require("minimist")(process.argv.slice(2), {
  boolean: ["help"],
  string: ["file"],
});

if (args.help) {
  printHelp();
} else if (args.file) {
  processFile(path.resolve(args.file));
} else {
  error("Incorrect usage.", true);
}

// **********************
function processFile(filepath) {
  var contents = fs.readFileSync(filepath);
  process.stdout.write(contents); // deals with buffer, console.log would not work here
  // use that if you don't want to process

  var contents_in_string = fs.readFileSync(filepath, "utf-8"); // if you pass encoding the it will work
  console.log(contents_in_string);
}

function error(msg, includeHelp = false) {
  console.error(msg);
  if (includeHelp) {
    console.log("");
    printHelp();
  }
}

function printHelp() {
  console.log("ex1 usage:");
  console.log("");
  console.log("--help                      print this help");
  console.log("-, --in                     read file from stdin");
  console.log("--file={FILENAME}           read file from {FILENAME}");
  console.log("");
  console.log("");
}
