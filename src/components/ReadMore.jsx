import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import '../styles/ReadMore.css'

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
            <div className="content">
                <h1>{book.title}</h1>
                <div className="desc">
                    {book.pageCount === 0 ? <h2>No Description found!</h2> :
                        <>
                            <p id="long">{book.shortDescription}</p>
                            <p >{book.longDescription}</p></>}

                </div>
            </div>
        </div>
    );
}

export default ReadMore;