// dependencies
const express = require("express");

const fs = require("fs");

// pooint server to route files
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');


const PORT = process.env.port || 3001;

const app = express();


// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// registering routes
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);


// listener
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);