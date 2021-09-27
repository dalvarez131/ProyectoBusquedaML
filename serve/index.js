const PORT = 3002;
const express = require("express");
//const fetch = require("node-fetch");
const app = express();
const staticMiddleware = express.static("../client/public");


//const query = require("./query.js");
// console.log(query);


// app.get("/items", (req,res) => {
//   console.log(req.query.search)
// });

// fetch(encodeURI("https://api.mercadolibre.com/sites/MLA/search?q=​:amor"))
//   .then(respuesta => {
//     return respuesta.json();
//   }).then((resp) => {
//     //console.log(resp);
//   })

app.use("/",staticMiddleware);

app.listen(PORT, () => {
  console.log(`El servidor esta levantado en el puerto ${PORT}`);
});

