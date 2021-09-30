const PORT = 3002;
const express = require("express");
const fetch = require("node-fetch");
const app = express();
const path = require('path');
const staticMiddleware = express.static("./client/public");

//const query = require("./query.js");
// console.log(query);

const fetchProduct = (searhTerm) => fetch(encodeURI(`https://api.mercadolibre.com/sites/MLA/search?q=​:${searhTerm}`))
  .then(respuesta => {
    return respuesta.json();
  }).then((resp) => {
    console.log(resp);
  });

app.use("/",staticMiddleware)

app.get('*', (req, res) => {
  const id = req?.url.match(/([^\/]+$)/)[1];
  const term = req?.query?.search;
  console.log(term);
  console.log(id);
  // if(searhTerm)fetchProduct(searhTerm);
  return res.sendFile(path.join(__dirname, '../client/public/index.html'));
});

app.listen(PORT, () => {
  console.log(`El servidor esta levantado en el puerto ${PORT}`);
});

