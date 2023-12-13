// Create web server
const express = require("express");
const app = express();
const port = 3000;

// Create a route for GET /comments
app.get("/comments", (req, res) => { 
    res.send("GET /comments route on port " + port);
}); // Add closing parenthesis here
