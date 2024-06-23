const express = require("express");
const cors = require("cors"); // Import cors package

const app = express();
const port = 3000;

// Use cors middleware
app.use(cors());

app.get("/", (req, res) => {
  const a = req.query.a;
  const b = req.query.b;
  const sum = Number(a) + Number(b);
  res.send(String(sum));
});
app.listen(port);
console.log(`Server is listening on port ${port}`);
