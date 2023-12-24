const express = require('express');
const path = require('path');

const app = express();

const port = process.env.PORT || 8080;

// Middleware for printing out request
app.use((req, res, next) => {
  let {method, path} = req;
  // for index.html all the files in public is printed.
  console.log(`New request to ${method} ${path}`);
  next();
})

// for serving static contents from the public folder
// go to http://localhost:8080/index.html for checking out
const publicDirectoryPath = path.join(__dirname, './public'); // absolute path, __dirname gives the path to src
app.use(express.static(publicDirectoryPath));

// route handler callback function takes http request and response objects as parameter
app.get("/", (req, res) => {
  res.send("Hello express students!");
});

app.get("/:name", (req, res) => {
  // dynamic params can be found in the param object in req.
  res.send(`Welcome to express application ${req.params.name}!!`);
});

app.listen(port, () => {
  console.log(`Server is up on port ${port}.`);
});