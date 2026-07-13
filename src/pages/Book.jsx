import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAuthorName, getBook } from "../services/api.js";
import Description from "../components/books/BookDescription.jsx";
import BookCoverCarousel from "../components/books/BookCoverCarousel.jsx";
import BookCover from "../components/books/BookCover.jsx";
import LoadingBook from "../components/loading/LoadingBook.jsx";
import BookDropdown from "../components/books/BookDropdown.jsx";

export default function Book() {

    const { id } = useParams(); // Extract book ID

    const [book, setBook] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const loadBook = async () => {
            try {
                setLoading(true);
                setError(null);

                const data = await getBook(id);

                // Retrieve author names manually because book API doesn't show the names (only shows author IDs)
                data["authors"] = await getAuthorName(data.authors);
                setBook(data);

                document.title = `${data.title} | BookBook`; // Page title

            } catch (e) {
                console.log(e);
                setError("Failed to load book.");
            } finally {
                setLoading(false);
            }
        }
        loadBook();

    }, [id]);

    if (loading) {
        return(
            <LoadingBook/>
        );
    }

    if (error) {
        return(
            <h1>Failed to load book.</h1>
        );
    }

    // let cover_image;
    // (book.covers) ? cover_image = `https://covers.openlibrary.org/b/id/${book.covers[0]}-L.jpg` : cover_image = "https://placehold.net/400x600.png";

    // console.log(book);

    return (
        <>
            <div className="row g-5">

                <div className="col-md-6">
                    {(book.covers?.length === 1) ? (
                        <BookCover book={book}/>
                    ) : (
                        <BookCoverCarousel book={book} />
                    )}
                </div>

                <div className="col-md-6 d-flex flex-column row-gap-3">

                    <div>
                        <h1>{book.title}</h1>
                        <p>
                            {book.authors.map((author, index) => (
                                <span key={index}>
                                    <a
                                        href={`${author.key}`}>
                                        {author.name}
                                    </a>
                                    {index < book.authors.length - 1 && ", "}
                                </span>
                            ))}
                        </p>
                    </div>

                    <BookDropdown book={book} />

                    <Description content={book.description} />

                </div>
            </div>
        </>
    );
}