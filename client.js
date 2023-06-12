const connect = function (net) {
  const conn = net.createConnection({
  host: "192.168.0.18", // IP address here,
  port: 50541// PORT number here,
  });
  
  // interpret incoming data as text
  conn.setEncoding("utf8");
  
  // Event handler for incoming data
  conn.on("data", (data) => {
  console.log("Server says:", data);
  });
  return conn;
  };
  
  module.exports = { connect };