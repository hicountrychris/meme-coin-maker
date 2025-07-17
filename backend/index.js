
const express = require("express");
const app = express();
const port = 3001;

app.use(express.json());

app.post("/create-coin", (req, res) => {
  const { name, symbol, supply } = req.body;
  res.json({ message: `Created ${name} (${symbol}) with total supply ${supply}` });
});

app.listen(port, () => {
  console.log(`Backend listening on port ${port}`);
});
