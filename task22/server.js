const express = require("express");
const db = require("./db");
const app = express();
app.use(express.json());
app.use(express.static(__dirname));
app.get("/services/:provider", (req, res) => {
    res.json(db.getServices(req.params.provider));
});
app.post("/cost", (req, res) => {
    const { provider, hours, storage } = req.body;
    const cost = db.calculate(provider, hours, storage);
    res.json({ cost });
});
app.listen(3000, () => {
    console.log("http://localhost:3000");
});