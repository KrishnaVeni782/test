import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Login from './Components/Login';
import Register from './Components/Register';
import { MyProvider } from './Mycontext';
const root = document.getElementById('root');
ReactDOM.render(
    <Router>
        <MyProvider>
            <div>
                <Header />
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Routes>
            </div>
        </MyProvider>
    </Router>,
    root
);
