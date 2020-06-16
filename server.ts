

import * as express from 'express';
import {Application} from "express";
import {getAllNotes, getAllCategories} from './server/get-notes.route';
import {saveNote, saveCategory} from './server/save-notes.route';


const bodyParser = require('body-parser');

const app: Application = express();

app.use(bodyParser.json());

app.route('/api/notes').get(getAllNotes);

app.route('/api/notes/:id').put(saveNote);

app.route('/api/categories').get(getAllCategories);

app.route('/api/categories/:id').get(saveCategory);
const httpServer = app.listen(9000, () => {
    console.log("HTTP REST API Server running at http://localhost:" + httpServer.address().port);
});



