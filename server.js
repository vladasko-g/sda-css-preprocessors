const express = require("express");

const app = express();

app.use(express.static("dist"));

const PORT = 3006;

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
