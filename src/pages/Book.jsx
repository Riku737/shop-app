import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getAuthorName, getBook} from "../services/api.js";

function Book() {

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
                setBook(data);

                // Retrieve author names manually because book API doesn't show the names (only shows author IDs)
                const authors = await getAuthorName(data.authors);
                // console.log(authors);

            } catch (e) {
                console.log(e);
                setError("Failed to load book.");
            } finally {
                setLoading(false);
            }
        }
        loadBook();
    }, [id]);

    if (loading) return <h1>Loading...</h1>;
    if (error) return <h1>Failed to load book</h1>;
    if (!book) return <h1>No book found</h1>;

    let cover_image;
    (book.covers) ? cover_image = `https://covers.openlibrary.org/b/id/${book.covers[0]}-M.jpg` : cover_image = "https://placehold.net/400x600.png";

    return (
        <>
            <div className="row">
                <div className="col-6">
                    <div className="bg-light ratio ratio-1x1 d-flex justify-content-center rounded">
                        <img
                            src={cover_image}
                            className="object-fit-contain p-4"
                            alt={book.title}
                        />
                    </div>
                </div>
                <div className="col-6">
                    <h1>{book.title}</h1>
                    <p>{book.author}</p>
                </div>
            </div>
        </>
    );
}

export default Book;