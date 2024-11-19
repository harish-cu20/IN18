import React from 'react';
import { useNavigate } from 'react-router-dom';
const Body = () => {
  const navigate = useNavigate();

  const handleCreateUser = () => {
    navigate("/add");
  };
  const handleListUser = () => {
    navigate("/list");
  };
  return (
    <>
      <div className="button">
        <button className="create-user" type="button" onClick={handleCreateUser}>
          Create User
        </button>
        <button className="create-user" type="button" onClick={handleListUser}>
          List User
        </button>
      </div>
    </>
  );
};

export default Body;
