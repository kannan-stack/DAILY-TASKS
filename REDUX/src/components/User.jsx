
import React from 'react';
import { useSelector } from 'react-redux';

const User = () => {
    const user = useSelector((state) => state.user);

    return (
        <div>
            <h1>User</h1>
            <p> {user.name}</p>
            <p> {user.age}</p>
            <p> {user.email}</p>
        </div>
    );
};

export default User;