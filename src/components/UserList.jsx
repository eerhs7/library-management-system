import { useEffect, useState } from "react";
import '../styles/UserList.css'

const UserList = () => {
    let [users, setUsers] = useState([]);

    useEffect(() => {
        let fetchData = async () => {
            let response = await fetch('http://localhost:4000/users');
            let data = await response.json();
            console.log(data);
            setUsers(data)
        }
        fetchData();
    }, [users])

    let handleDelete = (id, name) => {
        fetch(`http://localhost:4000/users/${id}`,
            {
                method: "DELETE"
            })
        alert(`${name} will be deleted permanently`)
    }
    return (
        <div className="user_container">
            <h1>User List: {users.length}</h1>
            <div className="users_card">
                {users.map((data) => (
                    <div className="user_card_info">
                        <h2 id="name">{data.name}</h2>
                        <p id="age"><b>Age:</b> {data.age}</p>
                        <p id="email"><b>Email:</b> {data.email}</p>
                        <p id="phno"><b>Phone No.:</b> {data.phno}</p>
                        <button onClick={() => handleDelete(data.id, data.name)}>Delete</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default UserList;