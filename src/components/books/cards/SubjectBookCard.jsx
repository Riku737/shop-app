import BookAuthors from "../details/BookAuthors.jsx";

export default function SubjectBookCard({book}) {

    // Extract book ID

    let book_id = book.key.split("/")[2];
    const book_link = `/books/${book_id}`;

    return(
        <>
            <div className="col-lg-3 col-md-4 col-6">

                <div className="d-flex gap-2 h-100 w-100 d-flex flex-column">

                    {/*Book Cover*/}
                    <a href={book_link} className="bg-light ratio ratio-1x1 d-flex justify-content-center rounded">
                        <img
                            src={book.cover_id ? (`https://covers.openlibrary.org/b/id/${book.cover_id}-M.jpg`) : (`https://placehold.co/400x600?text=No+Cover`)}
                            className="object-fit-contain p-4"
                            alt={book.title}
                        />
                    </a>

                    {/*Book Title & Author*/}
                    <div className="d-flex flex-column">
                        <h6 className="fw-medium m-0"><a href={book_link}>{book.title}</a></h6>
                        <p className="m-0 fs-6">
                            <small>
                                <BookAuthors names={book.authors?.map(a => a.name)} ids={book.authors?.map(a => a.key)} />
                            </small>
                        </p>
                    </div>

                </div>

            </div>
        </>
    );

}