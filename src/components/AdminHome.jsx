import '../styles/AdminHome.css'
import AdminNavBar from './AdminNavbar';
import { Routes, Route } from 'react-router-dom';
import AdminDashboard from './AdminDashboard';
import BookList from './BookList';
import UserList from './UserList';
import ReadMore from './ReadMore';
import AdminAddUser from './AdminAddUser';
import AdminAddBooks from './AdminAddBook';

const AdminHome = () => {
    return (
        <div className="admin_home">
            <AdminNavBar />
            <Routes>
                <Route path="/" element={<AdminDashboard />} />
                <Route path='/add-book' element={<AdminAddBooks />} />
                <Route path='/add-user' element={<AdminAddUser />} />
                <Route path='/book-list/*' element={<BookList />} />
                <Route path='/user-list' element={<UserList />} />
                <Route path='/book-list/:id/' element={<ReadMore />} />
            </Routes>
        </div>
    );
}

export default AdminHome;