import { Link } from "react-router-dom";
import '../styles/AdminNavbar.css'
import { AiOutlineUser } from 'react-icons/ai';

const AdminNavBar = () => {
    return (
        <div className="admin_nav">
            <div className="logo">
                <AiOutlineUser size={"50"} color={"white"} />
                <p></p>
            </div>
            <div className="nav_links">
                <ul>
                    <li>
                        <Link to={'/admin/'}>Dashboard</Link>
                    </li>
                    <li>
                        <Link to={'/admin/add-book'}>Add Book</Link>
                    </li>
                    <li>
                        <Link to={'/admin/add-user'}>Add User</Link>
                    </li>
                    <li>
                        <Link to={'/admin/book-list'}>Book List</Link>
                    </li>
                    <li>
                        <Link to={'/admin/user-list'}>User List</Link>
                    </li>
                    <li>
                        <Link to={'/'}>Logout</Link>
                    </li>

                </ul>
            </div>
        </div>
    );
}

export default AdminNavBar;