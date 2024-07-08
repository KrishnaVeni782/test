import React, { useState, useContext } from 'react';
import { FormContext } from '../FormContext';

export default function Login() {
    const { users, setCurrentUser } = useContext(FormContext);
    const [loginForm, setLoginForm] = useState({
        Email: "",
        Password: ""
    });
    const [message, setMessage] = useState("");

    function handleChange(e) {
        setLoginForm(prevForm => ({
            ...prevForm,
            [e.target.name]: e.target.value
        }));
    }

    function handleLogin(e) {
        e.preventDefault();
        const user = users.find(
            user => user.Email === loginForm.Email && user.Password === loginForm.Password
        );
        if (user) {
            setCurrentUser(user);
            setMessage("Login successful!");
        } else {
            setMessage("Invalid email or password.");
        }
    }

    return (
        <div className="form-container">
            <form onSubmit={handleLogin}>
                <h1>Login</h1>
                <input type="email" name="Email" value={loginForm.Email} onChange={handleChange} placeholder="Enter your email" />
                <input type="password" name="Password" value={loginForm.Password} onChange={handleChange} placeholder="Enter your password" />
                <button type="submit">Log In</button>
            </form>
            {message && (
                <div className={`message ${message === "Login successful!" ? "success" : "error"}`}>
                    <p>{message}</p>
                </div>
            )}
        </div>
    );
}
