#!/usr/bin/env node
"use strict";

/* go find node in the system and execute this file with it */
/* use strict - this needs to be at the top of file - okay in this way */

// in terminal: ./command_line_scripts_with_arguments.js --hello=world -c9
// pass two parameters to process.argv
// dont care about first 2 entries from argv
console.log(process.argv.slice(2));

// require package that will take parameters and return
// an object with those parameters
var args = require("minimist")(process.argv.slice(2));
console.log(args);

// configure minimist
var args = require("minimist")(process.argv.slice(2), {
  boolean: ["help"], // if you get "help" parameter, interpret it as boolen
  string: ["file"],
});
console.log(args);

/*
 * TEST IN CONSOLE WITH:
 * ./command_line_scripts_with_arguments.js --help=foobar
 * ./command_line_scripts_with_arguments.js --file
 */
