import { useEffect, useState } from "react";
import '../styles/BookList.css'
import { useNavigate, useLocation } from "react-router-dom";

const BookList = () => {
    let [books, setBooks] = useState([]);
    let navigate = useNavigate();
    let location = useLocation();

    useEffect(() => {
        let fetchData = async () => {
            let response = await fetch('http://localhost:4000/books');
            let data = await response.json();

            // console.log(data);
            // let date = new Date(data.publishedDate.date)
            // console.log(date);
            setBooks(data)
        }
        fetchData();
    }, [books])

    let handleRead = (id) => {
        if (location.pathname === "/admin/book-list/") {
            navigate(`/admin/book-list/${id}`);
        }
        else {
            navigate(`/user/book-list/${id}`);
        }


    }
    //delete a book from server
    let handleDelete = (id, title) => {
        fetch(`http://localhost:4000/books/${id}`, {
            method: "DELETE"
        }
        )
        alert(`${title} will be deleted permanently.`)
    }
    return (
        <div className="book_list">
            <h1 id="title">Book List: {books.length}</h1>
            <Card data={books} fn={handleDelete} fn1={handleRead} />
        </div>
    );
}

function Card(props) {
    let location = useLocation();
    let books = props.data
    let handleDelete = props.fn
    let handleRead = props.fn1
    return (
        <div className="books_container">

            {books.map((data) => (
                // <div className="card">
                <div className="card_body" >
                    <div className="card_img">
                        <img src={data.thumbnailUrl} alt="" />
                    </div>
                    <div className="card_info">
                        <h1>{data.title}</h1>

                        <p>by <b id="authors">{data.authors.toString()}</b></p>

                        <p><b>Categories: </b>{data.categories.length === 0 ? "N/A" : data.categories.toString()}</p>

                        <p>{data.pageCount} pages</p>

                        <div className="buttons">
                            {location.pathname === '/admin/book-list' && <button className="btn1" onClick={() => handleDelete(data.id, data.title)}>Delete</button>}
                            <button className="btn2" onClick={() => handleRead(data.id)} >Read more</button>
                        </div>
                    </div>
                </div>

                // </div>
            ))}

        </div>
    )
}

export default BookList;