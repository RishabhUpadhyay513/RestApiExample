const express = require("express");
const app = express();
const importData = require("./data.json");
const port = process.env.port || 3000;

app.get("/", (req, res) => {
    res.send("created");
});

app.get("/productData", (req, res) => {
    res.send(importData);
});

app.listen(port, () => {
    console.log(`example of rest api is port http://localhost:${port}`);
});