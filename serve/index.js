const PORT = 3002;
const express = require("express");
const app = express();
const path = require('path');
const staticMiddleware = express.static("./client/public");
const { search } = require("./search.js");

var term, id;

app.use("/",staticMiddleware)

app.get(`/api/items`, (req, res) => {
  req.query = term;
  if(term) {
    search(term).then(search => res.send(search));
  };
});

app.get("*", (req, res) => {
  id = req?.url.match(/([^\/]+$)/)[1];
  term = req?.query?.search;
  return res.sendFile(path.join(__dirname, '../client/public/index.html'));
});

app.listen(PORT, () => {
  console.log(`El servidor esta levantado en el puerto ${PORT}`);
});


