import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const ReadMore = () => {

    let params = useParams();
    // console.log(params.id);
    let [book, setBook] = useState([]);

    useEffect(() => {
        let fetchData = async () => {
            let res = await fetch(`http://localhost:4000/books/${params.id}`);
            let data = await res.json();
            setBook(data)
        }
        fetchData();
    }, [])

    console.log(book);

    return (
        <div className="read_more">
            <h1>{book.title}</h1>
            <p>{book.shortDescription}</p>
            <p>{book.longDescription}</p>
        </div>
    );
}

export default ReadMore;