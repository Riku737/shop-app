import { Dexie } from "dexie";
import { seedDatabase } from './seed.js'

export const db = new Dexie("MyBookshelf");

/*
Status:
- Want to Read => want_to_read
- Currently Reading => reading
- Read => read
- Did Not Finish => dnf
*/

db.version(1).stores({
    books: '++id, status, title, bookKey, authors, bookCovers',
});

export async function addToBookshelf(status, title, bookKey, authors, bookCovers) {

    // Return first entry from collection
    const exists = await db.books.where("bookKey").equals(bookKey).first();

    if (!exists) {
        return await db.books.add(
            {status, title, bookKey, authors, bookCovers},
        );
    } else {
        await resetDatabase();
    }
}

async function resetDatabase() {
    await db.delete();
    await db.open();
    await seedDatabase(); // Reseed database
}
