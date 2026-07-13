export default function BookCover({book}) {

    return(
        <>
            <div className="bg-light ratio ratio-1x1 rounded">
                <img
                    src={`https://covers.openlibrary.org/b/id/${book.covers[0]}-L.jpg`}
                    onError={(e) => {
                        e.target.src = "https://placehold.co/400x600?text=No+Cover";
                    }}
                    alt={book.title}
                    className="object-fit-contain p-4"
                />
            </div>
        </>
    );
}