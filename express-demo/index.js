const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello express");
});

app.get("/api/courses", (req, res) => {
  res.send([1, 2, 3]);
});

// PORT
const prot = process.env.PORT || 3000
app.listen(prot, () => console.log(`Listening on port ${prot}}`));
