import React, { useState, useContext } from 'react';
import { FormContext } from '../FormContext';

export default function TaskManager() {
    const { currentUser, setUsers, users } = useContext(FormContext);
    const [task, setTask] = useState({
        Date: "",
        Time: "",
        Note: ""
    });

    function handleChange(e) {
        setTask(prevTask => ({
            ...prevTask,
            [e.target.name]: e.target.value
        }));
    }

    function handleAddTask() {
        const updatedUsers = users.map(user =>
            user.Email === currentUser.Email
                ? { ...user, tasks: [...(user.tasks || []), task] }
                : user
        );
        setUsers(updatedUsers);
    }

    return (
        <div className="form-container">
            <h1>Task Manager</h1>
            <input type="date" name="Date" value={task.Date} onChange={handleChange} />
            <input type="time" name="Time" value={task.Time} onChange={handleChange} />
            <textarea name="Note" value={task.Note} onChange={handleChange} />
            <button type="button" onClick={handleAddTask}>Add Task</button>
        </div>
    );
}
