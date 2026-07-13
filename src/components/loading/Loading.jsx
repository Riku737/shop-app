import PlaceholderBookCard from "./PlaceholderBookCard.jsx";

export default function Loading() {

    const items = [];

    for (let i = 0; i < 10; i++) {
        items.push(<PlaceholderBookCard key={i} item={items[i]} />);
    }

    return(
        <>
            <h1 className="mb-4">Loading...</h1>
            <div className="row g-4">
                {items}
            </div>
        </>
    )
}