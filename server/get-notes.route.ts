import { Request, Response } from 'express';
import { NOTES, CATEGORIES } from '../src/db-data';



export function getAllNotes(req: Request, res: Response) {

    res.status(200).json(Object.values(NOTES));

}

export function getAllCategories(req: Request, res: Response) {

    res.status(200).json(Object.values(CATEGORIES));

}

export function getNoteById(req: Request, res: Response) {

    const noteId = req.params['id'];

    const notes: any = Object.values(NOTES);

    const note = notes.find(course => course.id == noteId);

    res.status(200).json(note);
}

export function getCategoryById(req: Request, res: Response) {

    const categoryId = req.params['id'];

    const categories: any = Object.values(NOTES);

    const category = categories.find(category => category.id == categoryId);

    res.status(200).json(category);
}
