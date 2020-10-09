const express = require('express');
const app = express();
const PORT = 8080;

app.use(express.static("public"));

app.listen(PORT, () => {
  console.log(`Battle Ship listening on port ${PORT}!`);
});

app.get('/', (req, res) => {
  res.render('index.html');
});