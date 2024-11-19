import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const User = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [dob, setDOB] = React.useState("");
  const [error, setError] = React.useState(false);
  const navigate = useNavigate();

  const addUser = async () => {
    if (!name || !email || !dob) {
      setError(true);
      return false;
    }

    let result;
    await axios
      .post("http://localhost:5000/user", {
        name,
        email,
        dob
      })
      .then((res) => {
        result = res.data;
        alert("added succcesfully");
        
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(result);
    navigate('/');
  };
  return (
    <div className="user">
      <h1 className="user_h1">Add User</h1>
      <input
        type="text"
        placeholder="Enter user name"
        className="inputbox"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      {error && !name && (
        <span className="invalid_input">Enter valid name</span>
      )}
      <input
        type="email"
        placeholder="Enter user email"
        className="inputbox"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      {error && !email && (
        <span className="invalid_input">Enter valid email</span>
      )}
      <input
        type="date"
        placeholder="Select date of birth"
        className="inputbox"
        value={dob}
        onChange={(e) => {
          setDOB(e.target.value);
        }}
      />
      <button onClick={addUser} className="create_user_btn">
        Add User
      </button>
    </div>
  );
};
export default User;
