import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/AdminLogin.css'

const AdminLogin = () => {
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    let navigate = useNavigate();

    let handleSubmit = (e) => {
        e.preventDefault();
        // let data = { email, password };
        // console.log(data);

        if (email === "admin@gmail.com" && password === "1234") {
            navigate('/admin/')
        } else {
            alert("Invalid credentials..!")
        }
    }
    return (
        <div className="admin_login">
            <div className="form">
                <h1>Admin Login</h1>
                <div className="form_input">
                    <form action="" onSubmit={handleSubmit}>
                        <div className="email">
                            <input placeholder='Email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                type="email"
                                required />
                        </div>

                        <div className="password">
                            <input placeholder='Password'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
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

export default AdminLogin;