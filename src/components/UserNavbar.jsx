import { AiOutlineUser } from 'react-icons/ai';
import '../styles/UserNavbar.css'
import { Link } from "react-router-dom";

const UserNavbar = () => {
    return (
        <div className="user_nav">
            <div className="logo">
                <AiOutlineUser size={"50"} color={"white"} />
                <p></p>
            </div>
            <div className="nav_links">
                <ul>
                    <li>
                        <Link to={'/user/'}>Dashboard</Link>
                    </li>
                    <li>
                        <Link to={'/user/book-list'}>Book List</Link>
                    </li>
                    <li>
                        <Link to={'/'}>Logout</Link>
                    </li>

                </ul>
            </div>
        </div>
    );
}

export default UserNavbar;