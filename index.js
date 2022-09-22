// dependencies
const express = require("express");

const fs = require("fs");

const app = express();

// point server to route files
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');


const PORT = process.env.PORT || 3003;


// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));


// registering routes
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);


// listener
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);