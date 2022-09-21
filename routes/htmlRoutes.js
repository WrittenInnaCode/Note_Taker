// dependencies
const path = require("path");
const router = require("express").Router();


// GET Route for notes.html
router.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '../public/notes.html'))
);


// GET Route for index.html
router.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '../public/index.html'))
);


module.exports = router;