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
    const name = "RL"; // Replace with your desired two or three letter string
    conn.write(`Name: ${name}`);
  });

  return conn;
};

module.exports = { connect };