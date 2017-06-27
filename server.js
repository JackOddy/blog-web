const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 9090;

app.use('/', express.static(path.resolve('build')));
app.use('/*', express.static(path.resolve('build/index.html')));



app.listen(PORT, (error) => {
  if (error) throw (error);
  console.info(`==> Server started on ${PORT}`);
});
