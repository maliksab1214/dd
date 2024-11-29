const https = require("https");
const fs = require("fs");
const express = require("express");
const app = express();

// Read your private key and self-signed certificate
const privateKey = fs.readFileSync("private.key", "utf8");
const certificate = fs.readFileSync("server.crt", "utf8");

const credentials = { key: privateKey, cert: certificate };

app.get("/", (req, res) => {
    res.send("Hello, this is a secure connection!");
});

// Start the HTTPS server
const httpsServer = https.createServer(credentials, app);

// Bind to your IPv4 address and port 3000
httpsServer.listen(3000, "167.88.170.203", () => {
    console.log("HTTPS server is running on https://<your-ipv4-address>:3000");
});
