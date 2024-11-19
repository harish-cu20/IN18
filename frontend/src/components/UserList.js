import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const UserList = () => {
  const formatDate = (date) => {
    const d = new Date(date);
    const day = String(d.getDate()).padStart(2, '0');
    const month = String(d.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const year = d.getFullYear();
  
    return `${day}-${month}-${year}`;
  };
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getUsers();
  }, []);
  const getUsers = async () => {
    let result = await fetch("http://localhost:5000/users");
    result = await result.json();
    setUsers(result);
  };
  const deleteUser = async (id) => {
    console.warn(id);
    let result = await fetch(`http://localhost:5000/users/${id}`, {
      method: "Delete",
    });
    result = await result.json();
    if (result) {
      getUsers();
    }
  };
  return (
    <div className="user-list">
      <h3>User List</h3>
      <ul>
        <li>S.No</li>
        <li>Name</li>
        <li>Email</li>
        <li>DOB</li>
      </ul>
      {users.length > 0 ? (
        users.map((item, index) => (
          <ul key={item._id}>
            <li>{index + 1}</li>
            <li>{item.name}</li>
            <li>{item.email}</li>
            <li>{formatDate(item.dob)}</li>
            <li>
              <button onClick={() => deleteUser(item._id)}>Delete</button>
              <Link to={"/update/" + item._id}>Update</Link>
            </li>
          </ul>
        ))
      ) : 
        <h1>No Result Found</h1>
      }
    </div>
  );
};
export default UserList;
