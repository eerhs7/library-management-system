import '../styles/LandingPage.css'
import { AiOutlineUser } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const LandingPage = () => {

    return (
        <div className="landing_page">
            <div className="selectType">
                <h1>Library Management System</h1>
                <div className="selection">
                    <div className="admin">
                        <div className="outline">
                            <AiOutlineUser size={"105"} color={"#E14D2A"} />
                        </div>
                        <div>
                            <Link to={"/admin-login"}><button className='btn1'>Admin</button></Link>
                        </div>

                    </div>

                    <div className="user">
                        <div className="outline">
                            <AiOutlineUser size={"105"} color={"#144272"} />
                        </div>
                        <div>
                            <Link to={"/user-login"}><button className='btn1'>User</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LandingPage;