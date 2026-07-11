import {useNavigate} from "react-router-dom";
import {useState} from "react";

function SearchBar() {

    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }

    return (
        <>
            <form
                onSubmit={handleSubmit}
                className="input-group position-absolute top-50 start-50 translate-middle w-25 d-none d-lg-flex"
                role="search"
            >
                {/*Search button*/}
                <button
                    className="btn btn-primary"
                    type="submit"
                    id="button-search"
                >
                    <i className="bi bi-search"></i>
                </button>
                {/*Search field*/}
                <input
                    onChange={(e) => setSearchQuery(e.target.value)}
                    value={searchQuery}
                    required
                    type="text"
                    className="form-control"
                    placeholder="Search by title or author"
                    aria-label="Search"
                    aria-describedby="button-search-field"
                />
            </form>
        </>
    );
}

export default SearchBar;