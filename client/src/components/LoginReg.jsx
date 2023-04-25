import React from 'react';
import Login from './Login';
import Register from './Register';
import LoginHeader from "../components/LoginHeader"
import { useEffect } from 'react';

const LoginReg = () => {

    // MAKES SCREEN ALWAYS START FROM THE VERY TOP NO MATTER WHERE SCROLL BAR WAS ON PREVIOUS PAGE - JG
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])


    return (
        <div>

            <LoginHeader />

            <div className="w-full h-full flex items-center justify-center md:flex-row flex-col pb-8">
                <Login/>
                {/* <Register/> */}
            </div>
        </div>
    )
}

export default LoginReg;