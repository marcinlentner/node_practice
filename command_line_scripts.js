// execute in command line by:
// node name_of_file.js

// POSIX Input Outpute Stream
process.stdout.write("Hello, World!");

// Browser exposing IO interface
console.log("Hello, World!");
console.error("Buggy");

// node ex1.js 1>/dev/null
// redirect console.log only to normal stream

// node ex1.js 2>/dev/null
// redirect console.error only to error stream

// node ex1.js 2>/dev/null 1>&2
// redirect console.log to the address where console.error is redirected

// POSIX Output for raw stream
process.stdin.read();
