const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 5500;

app.use(express.static(path.join(__dirname, "client", "build")));

app.get("/", (req, res) => {
    res.sendFile(__dirname, "client", "build", "index.html");
});

app.listen(PORT, console.log(`listening on port ${PORT}...`));
