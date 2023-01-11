import { Route, Routes } from "react-router-dom";
import BookList from "./BookList";
import ReadMore from "./ReadMore";
import UserDashboard from "./UserDashboard";
import UserNavbar from "./UserNavbar";

const UserHome = () => {
    return (
        <div className="user_home">
            <UserNavbar />
            <Routes>
                <Route path="/" element={<UserDashboard />} />
                <Route path="/book-list" element={<BookList />} />
                <Route path="/book-list/:id" element={<ReadMore />} />
            </Routes>
        </div>
    );
}

export default UserHome;