const express = require("express");
const db = require("./db");

const app = express();

// Middleware
app.use(express.json());
app.use(express.static(__dirname)); // serve HTML

// Home route (optional but useful)
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});
// Generate output
app.post("/generate", (req, res) => {
    const result = db.processPrompt(req.body.prompt);
    res.json(result);
});
// START SERVER WITH LINK
app.listen(3000, () => {
    console.log("🚀 Server running at:");
    console.log("👉 http://localhost:3000");
});