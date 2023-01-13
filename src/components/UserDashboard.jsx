import '../styles/UserDashboard.css'

const UserDashboard = () => {
    return (
        <div className="user_dashboard">
            <div className="img">
                <p>Welcome to User Dashboard</p>
            </div>

            <div className="user_dash">
                <div className="learning">
                    <h1><u>Learning Lab</u></h1>
                    <p>The mission of the Library’s Learning Lab is to create an environment in which Greenwich Library staff and patrons can empower themselves with a practical understanding of current technology.</p>
                </div>

                <div className='dashContent'>
                    <div className="dashImg"></div>

                    <div className="information">
                        <p>LEARN</p>
                        <h1><u>LinkedIn Learning</u></h1>
                        <p>LinkedIn Learning (formerly Lynda) is an online educational site that features thousands of courses and video tutorials where you can discover, complete, and track courses related to your industry or interests.</p>
                    </div>

                </div>
            </div>

            <div className="footer">
                <h1>Learn Something New or Get Tech Help</h1>
                <p>Register on the online calendar. For more information call (203) 622-7920.</p>

                <button>{"View Calendar ->"}</button>
            </div>
        </div>
    );
}

export default UserDashboard;