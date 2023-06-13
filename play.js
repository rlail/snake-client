const net = require("net");
const { connect } = require("./client");

console.log("Connecting ...");
connect(net);

// setup interface to handle user input from stdin

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function (data) {
  if (data === '\u0003') {
    // Check if Ctrl + C pressed
    process.exit(); // Terminate the process
  }
};

setupInput(); // Call the setupInput function 