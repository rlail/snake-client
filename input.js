let connection;

const setupInput = (conn) => {
  connection = conn;
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
  } else if (data === 'w') { //WASD inputs
    connection.write("Move: up");
  } else if (data === 'a') {
    connection.write("Move: left");
  } else if (data === 's') {
    connection.write("Move: down");
  } else if (data === 'd') {
    connection.write("Move: right");
  }
};

module.exports = { setupInput };