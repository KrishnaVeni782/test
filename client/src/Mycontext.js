import React, { createContext, useState } from 'react';

export const MyContext = createContext();

export const MyProvider = ({ children }) => {
    const [users, setUsers] = useState([]);

    const registerUser = (user) => {
        setUsers([...users, user]);
    };

    return (
        <MyContext.Provider value={{ users, registerUser }}>
            {children}
        </MyContext.Provider>
    );
};
