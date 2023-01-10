import { useNavigate } from 'react-router-dom';
import '../styles/AdminLogin.css'
import '../styles/UserLogin.css'

const UserLogin = () => {
    let navigate = useNavigate();
    let handleSubmit = (e) => {
        e.preventDefault();

        navigate('/user')
    }

    return (
        <div className="user_login">
            <div className="form">
                <h1>User Login</h1>
                <div className="form_input">
                    <form action="" onSubmit={handleSubmit}>
                        <div className="email">
                            <input placeholder='Email'
                                type="email"
                                required />
                        </div>

                        <div className="password">
                            <input placeholder='Password'
                                type="password"
                                required />
                        </div>
                        <button>Login</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default UserLogin;