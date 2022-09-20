// dependencies
const router = require("express").Router();
const {v4: uuidv4} = require('uuid');
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');

router.get("/notes", (req, res) =>{
    readFromFile("./db/db.json").then((data) => res.json(JSON.parse(data)));
});

router.post("/notes", (req, res) => {
    const { title, text } = req.body;

    if (req.body) {
        const newNote = {
            title,
            text,
            id: uuidv4(),
        };

        readAndAppend(newNote, './db/db.json');
        res.json(`Note added successfully`);
      } else {
        res.error('Error in adding note');
      }
});



module.exports = router;