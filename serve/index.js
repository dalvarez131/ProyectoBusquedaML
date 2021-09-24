const PORT = 3002;
const express = require("express");
const app = express();
const staticMiddleware = express.static("../client/public");

app.use(staticMiddleware);

app.listen(PORT, () => {
  console.log(`El servidor esta levantado en el puerto ${PORT}`);
});

