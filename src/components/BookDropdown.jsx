import { addToBookshelf } from "../db/database.js";

function BookDropdown({book}) {

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
            <div className="input-group">
                <button onClick={() => addToBookshelfButton("want_to_read")} type="button" className="btn btn-primary ">Want to Read</button>
                <button type="button"
                        className="btn btn-primary dropdown-toggle dropdown-toggle-split"
                        data-bs-toggle="dropdown"
                        aria-expanded="false">
                    <span className="visually-hidden">Toggle Dropdown</span>
                </button>
                <ul className="dropdown-menu dropdown-menu-end">
                    <li><button onClick={() => addToBookshelfButton("reading")} className="dropdown-item" type="button">Currently Reading</button></li>
                    <li><button onClick={() => addToBookshelfButton("read")} className="dropdown-item" type="button">Read</button></li>
                    <li><button onClick={() => addToBookshelfButton("dnf")} className="dropdown-item" type="button">Did Not Finish</button></li>
                </ul>
            </div>
        </>
    );
}

export default BookDropdown;