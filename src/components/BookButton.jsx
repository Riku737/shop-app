import { addToBookshelf } from "../db/database.js";

function BookButton({book}) {

    function addToBookshelfButton(status) {
        const handleAdd = async () => {
            try {
                await addToBookshelf(status, book.title, book.key, book.authors, book.covers);
            } catch (error) {
                console.error('Error adding book to bookshelf', error);
            }
        }
        handleAdd();
    }

    return(
        <>
            <div className="input-group w-100">
                <button onClick={() => addToBookshelfButton("want_to_read")} type="button" className="btn btn-primary flex-grow-1">Want to Read</button>
                <button type="button"
                        className="btn btn-primary dropdown-toggle dropdown-toggle-split border-1 border-white border-top-0 border-bottom-0 border-end-0"
                        data-bs-toggle="dropdown"
                        aria-expanded="false">
                    <span className="visually-hidden">Toggle Dropdown</span>
                </button>
                <ul className="dropdown-menu dropdown-menu-end">
                    <li><a className="dropdown-item" href="#">Currently Reading</a></li>
                    <li><a className="dropdown-item" href="#">Read</a></li>
                    <li><a className="dropdown-item" href="#">Did Not Finish</a></li>
                </ul>
            </div>
        </>
    );
}

export default BookButton;