/* eslint-disable no-unused-vars */
import React from 'react';
import { AuthContext } from '../providers/AuthProviders';
const Home = () => {
    const user=userCotext(AuthContext)
    return (
        <div>
            <h4 className=''>This is Home {user && <span>{user.displayName}</span>} </h4>
            <h2 className=''>this is home</h2>
        </div>
    );
};

export default Home;