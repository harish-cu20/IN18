import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const UpdateUser = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [dob, setDOB] = React.useState("");
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getUserDetails();
  }, []);
  const getUserDetails = async () => {
    console.warn(params);
    let result = await fetch(`http://localhost:5000/user/${params.id}`);
    result = await result.json();
    // console.warn(result)
    setName(result.name);
    setEmail(result.email);
    setDOB(result.dob);
  };
  const UpdateUser = async () => {
    console.warn(name, email, dob);
    let result = await fetch(`http://localhost:5000/users/${params.id}`, {
      method: "put",
      body: JSON.stringify({ name, email, dob }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.warn(result);
    navigate("/");
  };
  return (
    <div className="user">
      <h1 className="user_h1">Update User</h1>
      <input
        type="text"
        placeholder="Enter User Name"
        className="inputbox"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />

      <input
        type="email"
        placeholder="Enter User Email"
        className="inputbox"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />

      <input
        type="date"
        placeholder="Select Date of Birth"
        className="inputbox"
        value={dob}
        onChange={(e) => {
          setDOB(e.target.value);
        }}
      />
      <button onClick={UpdateUser} className="create_user_btn">
        Update User
      </button>
    </div>
  );
};
export default UpdateUser;
