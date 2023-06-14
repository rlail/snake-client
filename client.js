const { IP, PORT } = require('./constants');


const connect = function (net) {
  const conn = net.createConnection({
    host: IP, 
    port: PORT,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  // Event handler for incoming data
  conn.on("data", (data) => {
    console.log("Server says:", data);
  });

  // Event handler for successful connection
  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    const name = "RL"; // Replace with your desired three-letter string
    conn.write(`Name: ${name}`);

    // Experiment 1: 
    // conn.write("Move: up");
    // conn.write("Move: up");
    // conn.write("Move: up");

    // Experiment 2: 
    // setTimeout(() => {
    //   conn.write("Move: up");
    // }, 50);
    // setTimeout(() => {
    //   conn.write("Move: up");
    // }, 100);
    // setTimeout(() => {
    //   conn.write("Move: up");
    // }, 150);

    // Experiment 3: 
    // const moveInterval = setInterval(() => {
    //   conn.write("Move: up");
    // }, 50);

    // setTimeout(() => {
    //   clearInterval(moveInterval);
    // }, 500);
  });

  return conn;
};

module.exports = { connect };