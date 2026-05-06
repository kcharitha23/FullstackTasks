const express = require("express");
const db = require("./db");
const app = express();
app.use(express.json());
app.use(express.static(__dirname));
app.post("/run", async (req, res) => {
    await db.runPipeline();
    res.json({ msg: "Pipeline executed" });
});
app.get("/logs", (req, res) => {
    res.json(db.getLogs());
});
app.listen(3000, () => {
    console.log("http://localhost:3000");
});