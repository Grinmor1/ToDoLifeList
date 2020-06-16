import {Request, Response} from 'express';
import {findNoteById, findCategoryById} from '../src/db-data';

//TODO: rewrite this
export function saveNote(req: Request, res: Response) {

    const id = req.params["id"],
          changes = req.body;

    console.log("Saving note", id, JSON.stringify(changes));

    const note = findNoteById(id);

    note.description = changes.description;

    res.status(200).json(note);

}

//TODO: rewrite this
export function saveCategory(req: Request, res: Response) {

    const id = req.params["id"],
          changes = req.body;

    console.log("Saving note", id, JSON.stringify(changes));

    const note = findNoteById(id);

    note.description = changes.description;

    res.status(200).json(note);

}