import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/AdminAddBook.css'

const AdminAddBooks = () => {

    let navigate = useNavigate();

    let [title, setTitle] = useState("");
    let [authors, setAuthors] = useState("");
    let [categories, setCategories] = useState("");
    let [pageCount, setPageCount] = useState("");
    let [shortDescription, setShortDesc] = useState("");
    let [longDescription, setLongDesc] = useState("");
    let [thumbnailUrl, setThumbnail] = useState("");

    let handleSubmit = (e) => {
        e.preventDefault();

        let bookData = {
            title, authors, categories, pageCount, shortDescription, longDescription, thumbnailUrl
        }

        console.log(bookData);
        fetch(' http://localhost:4000/books',
            {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(bookData)
            })
        alert("Book added successfully");
        navigate("/admin/book-list")
    }

    return (
        <div className="admin_add_books">
            <div className="form_book">
                <h1>Add book</h1>
                <div className="form_inputs">
                    <form action="" onSubmit={handleSubmit}>
                        <div className="title">
                            <input value={title} onChange={(e) => setTitle(e.target.value)}
                                type="text" placeholder="Title" required />
                        </div>
                        <div className="authors">
                            <input value={authors} onChange={(e) => setAuthors(e.target.value)}
                                type="text" placeholder="Authors" required />
                        </div>
                        <div className="categories">
                            <input value={categories} onChange={(e) => setCategories(e.target.value)}
                                type="text" placeholder="Categories" required />
                        </div>
                        <div className="pageCount">
                            <input value={pageCount} onChange={(e) => setPageCount(e.target.value)}
                                type="text" placeholder="Page count" required />
                        </div>
                        <div className="shortDesc">
                            <textarea value={shortDescription} onChange={(e) => setShortDesc(e.target.value)}
                                placeholder='Short Description' cols="87" rows="8" required></textarea>
                        </div>
                        <div className="longDesc">
                            <textarea value={longDescription} onChange={(e) => setLongDesc(e.target.value)}
                                placeholder='Long Description' cols="87" rows="12" required></textarea>
                        </div>
                        <div className="thumbnailUrl">
                            <input value={thumbnailUrl} onChange={(e) => setThumbnail(e.target.value)}
                                type="text" placeholder="Thumbanail url" required />
                        </div>
                        <button>Add</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AdminAddBooks;