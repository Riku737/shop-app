/*
NOTE:
The components HomeBookCard and BookshelfBookCard are identical visually.
However, the underlying code are completely different due to the inconsistent format of the API.
 */

import BookAuthors from "../details/BookAuthors.jsx";

export default function SearchBookCard({book}) {

    // Extract ID and generate link to book
    const book_link = `/books/${book.key.split("/")[2]}`;

    return(
        <>
        <div className="col-lg-3 col-md-4 col-6">

            <div className="d-flex gap-2 h-100 w-100 d-flex flex-column">

                {/*Book Cover*/}
                <a href={book_link} className="bg-light ratio ratio-1x1 d-flex justify-content-center rounded">
                    <img
                        src={book.cover_i ? (`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`) : (`https://placehold.co/400x600?text=No+Cover`)}
                        className="object-fit-contain p-4"
                        alt={book.title}
                    />
                </a>

                {/*Book Info*/}
                <div className="d-flex flex-column">

                    {/*Book Title*/}
                    <h6 className="fw-medium m-0"><a href={book_link}>{book.title}</a></h6>

                    {/*Authors*/}
                    <p className="m-0 fs-6">
                        <small>
                            <BookAuthors names={book.author_name} ids={book.author_key?.map(key => ("/authors/" + key))} />
                        </small>
                    </p>

                </div>

            </div>

        </div>
        </>
    );

}