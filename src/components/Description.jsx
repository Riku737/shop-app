import {useState} from "react";

function Description({ content }) {

    let description;

    const [open, setOpen] = useState(false);

    /*
    Description object of book can be either:
    1. Dictionary of two elements (type and value); or a
    2. Single string (only description data)
     */
    if (Object.keys(content).length === 2) {
        description = content.value;
    } else {
        description = content;
    }

    function readMore() {
        setOpen(!open);
    }

    return(
        <>
            <p className="text-break" id="book-description">
                { !open ? description.slice(0,200) : description }
                <button onClick={readMore} type="button" className="btn btn-link p-0 align-baseline">{open ? "Read Less" : "Read More"}</button>
            </p>
        </>
    );
}

export default Description;