import React from 'react';
import Login from './Login';
import Register from './Register';

const LoginReg = () => {



    return (
        <div>
            <h1>Application Tracker :D!</h1>
            <div className="row">
                <Login/>
                <Register/>
            </div>
        </div>
    )
}

export default LoginReg;