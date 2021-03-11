const bodyParser = require("body-parser");
const express = require("express");
var morgan = require("morgan");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan("dev"));

var routes = require("./routes");
routes(app);

app.use("/auth", require("./middleware"));

app.listen(3000, () => {
  console.log(`Server started on 3000`);
});
