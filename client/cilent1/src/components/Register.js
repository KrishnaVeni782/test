import React, { useState, useContext } from 'react';
import { FormContext } from '../FormContext';

function Fields({ fieldName, fieldType, value, setForm }) {
    function handleChange(e) {
        setForm(prevForm => ({
            ...prevForm,
            [e.target.name]: e.target.value
        }));
    }

    return (
        <div className="mb-4">
            <label htmlFor={fieldName}>{fieldName}</label>
            <input
                type={fieldType}
                name={fieldName}
                value={value}
                onChange={handleChange}
                placeholder={`Enter your ${fieldName}`}
            />
        </div>
    );
}

export default function Register() {
    const [form, setForm] = useState({
        Name: "",
        Age: "",
        Email: "",
        Password: "",
    });
    const { users, setUsers } = useContext(FormContext);

    function handleSubmit() {
        setUsers([...users, form]);
        setForm({
            Name: "",
            Age: "",
            Email: "",
            Password: ""
        });
    }

    return (
        <div className="form-container">
            <form>
                <h1>Register</h1>
                <Fields fieldName="Name" fieldType="text" value={form.Name} setForm={setForm} />
                <Fields fieldName="Age" fieldType="number" value={form.Age} setForm={setForm} />
                <Fields fieldName="Email" fieldType="email" value={form.Email} setForm={setForm} />
                <Fields fieldName="Password" fieldType="password" value={form.Password} setForm={setForm} />
                <button type="button" onClick={handleSubmit}>Sign Up</button>
            </form>
        </div>
    );
}
