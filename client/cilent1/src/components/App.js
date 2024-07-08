import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import Header from './components/Header';
import Login from './components/Login';
import Register from './components/Register';
//import UserProfile from './components/UserProfile';
import TaskManager from './components/TaskManager';
import { FormContext } from './FormContext';
//import './index.css';

export default function App() {
    const [users, setUsers] = useState([]);
    const [currentUser, setCurrentUser] = useState(null);

    return (
        <FormContext.Provider value={{ users, setUsers, currentUser, setCurrentUser }}>
            <Router>
                <Header />
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/tasks" element={<TaskManager />} />
                </Routes>
            </Router>
        </FormContext.Provider>
    );
}
