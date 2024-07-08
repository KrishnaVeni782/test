import React, { createContext, useState } from 'react';

export const FormContext = createContext();

export const FormProvider = ({ children }) => {
    const [users, setUsers] = useState([]);
    const [currentUser, setCurrentUser] = useState(null);

    return (
        <FormContext.Provider value={{ users, setUsers, currentUser, setCurrentUser }}>
            {children}
        </FormContext.Provider>
    );
};
