
export const NOTES: any = [

    {
        id: 1,
        description: "To clean my home",
        longDescription: "A detailed walk-through of the most important part of Angular - the Core and Common modules",
        category: 'REGULAR',

    },
    {
        id: 2,
        description: "To buy a new shoes",
        longDescription: "Understand the RxJs Observable pattern, learn the RxJs Operators via practical examples",
        category: 'MARKET',

    },

    {
        id: 3,
        description: "To write a good website",
        longDescription: "Understand the RxJs Observable pattern, learn the RxJs Operators via practical examples",
        category: 'PLANS',

    },
];

export const CATEGORIES: any = [

    {
        id: 1,
        description: "Some regular activity",
        name: 'REGULAR',

    },
    {
        id: 2,
        description: "Shopping",
        name: 'MARKET',

    },

    {
        id: 3,
        description: "Future plans",
        name: 'PLANS',

    },
];



export function findNoteById(noteId: number) {
    return NOTES.find(note => note.id == noteId);

}
export function findCategoryById(categoryId: number) {
    return CATEGORIES.find(category => category.id == categoryId);
}

