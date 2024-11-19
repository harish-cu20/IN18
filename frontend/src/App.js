import React from "react";
import './App.css';
import Body from './components/Body';
import User from './components/User';
import UserList from "./components/UserList";
import UpdateUser from "./components/UpdateUser";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Body/>} />
    <Route path="/add" element={<User/>} />
    <Route path="/list" element={<UserList/>} />
    <Route path="/update/:id" element={<UpdateUser/>} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
