const express = require("express");
const db = require("./db");
const app = express();
app.use(express.json());
app.use(express.static(__dirname));
app.post("/generate", (req, res) => {
    const result = db.process(req.body.prompt);
    res.json(result);
});
app.get("/history", (req, res) => {
    res.json(db.getHistory());
});

app.listen(3000, () => {
    console.log("🚀 http://localhost:3000");
});