import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/AdminAddUser.css'

const AdminAddUser = () => {
    let [name, setName] = useState("");
    let [email, setEmail] = useState("");
    let [phno, setPhno] = useState("");
    let [age, setAge] = useState("");

    let navigate = useNavigate();

    let handleSubmit = (e) => {
        e.preventDefault();

        let userData = { name, email, phno, age }
        fetch('http://localhost:4000/users', {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userData)
        })

        alert("User added successfully..!")
        navigate('/admin/user-list')
    }
    return (
        <div className="add_user">
            <div className="form_container">
                <h1>Add user</h1>
                <div className="form_inputs">
                    <form action="" onSubmit={handleSubmit}>
                        <div className="name">
                            <input value={name} onChange={(e) => setName(e.target.value)}
                                type="text" placeholder="Name" required />
                        </div>
                        <div className="email">
                            <input value={email} onChange={(e) => setEmail(e.target.value)}
                                type="email" placeholder="Email" required />
                        </div>
                        <div className="phno">
                            <input value={phno} onChange={(e) => setPhno(e.target.value)}
                                type="tel" minLength={10} maxLength={10} placeholder="Phone no." required />
                        </div>
                        <div className="age">
                            <input min={1} value={age} onChange={(e) => setAge(e.target.value)}
                                type="number" placeholder="Age" required />
                        </div>
                        <button>Add</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AdminAddUser;