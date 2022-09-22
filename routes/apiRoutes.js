// Dependencies
const router = require("express").Router();
const {v4: uuidv4} = require('uuid');
const { readFromFile, readAndAppend, writeToFile } = require('../helpers/fsUtils');


// GET Route for retrieving all the notes from the JSON file
router.get("/notes", (req, res) => {
    readFromFile("./db/db.json").then((data) => res.json(JSON.parse(data)));
});


// POST Route for a new note
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


// DELETE Route for a specific note
router.delete('/notes/:id', (req, res) => {
    const noteId = req.params.id;
    readFromFile('./db/db.json')
      .then((data) => JSON.parse(data))
      .then((json) => {
        const result = json.filter((note) => note.id !== noteId);

        writeToFile('./db/db.json', result);
        res.json(`Item ${noteId} has been deleted`);
      });
  });



module.exports = router;