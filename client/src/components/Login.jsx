import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Register from './Register';
import { UserContext } from './UserContext';


const Login = () => {

    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();
    const [user, setUser] = useState({});
    const {loggedInUser, setLoggedInUser} = useContext(UserContext);

    // SET USER WHEN INPUTS ARE ADDED TO THE FORM - BL
    const changeHandler = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
    };

    // AXIOS REQUEST TO LOGIN USER AS LONG AS CREDENTIALS PASS (EMAIL EXISTS AND PASSWORD MATCHES) - BL
    const submitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/users/login', user, {withCredentials: true})
            .then(res => {
                console.log(res, "response")
                setLoggedInUser(res.data.user) //++++++++
                console.log(loggedInUser, "this is the new user");
                navigate('/dashboard')
            })
            .catch(err => {
                console.log(err)
                setErrors(err.response.data.message)
            })
    }

    // MAKES SCREEN ALWAYS START FROM THE VERY TOP NO MATTER WHERE SCROLL BAR WAS ON PREVIOUS PAGE - JG
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    // LOGIN FORM WITH EMAIL AND PASSWORD INPUTS PLUS ERROR RENDER - BL
    return (
        <div className='w-full flex items-center justify-center'>
        <div className="flex-1">
            <form className="md:w-[65%] w-screen h-full m-auto md:shadow-md mb-10 md:mb-0 rounded" action="" onSubmit={submitHandler}>
                <h3 className="text-[1.5rem] mr-4 mb-2 font-semiBold underline underline-offset-2 text-center decoration-2 decoration-[#2ECC40]">Login</h3>
                {errors ? (<p style={{ color: "red" }}>{errors}</p>) : ("")}
                <div className="mb-2 py-4 flex items-center justify-center flex-col">
                <div className="w-3/4 flex items-start justify-center flex-col">
                    <label htmlFor="" className="text-[1.2rem] mr-4 mb-2 font-light underline underline-offset-2">Email:</label>
                    <input type="email" className="w-full md:w-full h-[2.5rem] pl-2 border rounded shadow-md" name='email' value={user.email} onChange={changeHandler}/>
                    </div>
                </div>
                <div className="mb-2 py-4 flex items-center justify-center flex-col">
                <div className="w-3/4 flex items-start justify-center flex-col">
                    <label htmlFor="" className="text-[1.2rem] mr-4 mb-2 font-light underline underline-offset-2">Password:</label>
                    <input type="password" className="w-full md:w-full h-[2.5rem] pl-2 border rounded shadow-md" name='password' value={user.password} onChange={changeHandler}/>
                    </div>
                </div>
                <div className="w-full flex items-center justify-center flex-col">
                    <button type='submit' className="transition ease-in-out delay-100 inline-flex items-center rounded-md bg-[#2ECC40af] px-6 py-2 text-md text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-[#2ECC40] hover:text-[#fff] hover:-translate-y-1 hover:scale-110 mt-4 md:mb-8 cursor-pointer">Login</button>
                </div>
            </form>
            {/* LINK TO GO TO REGISTER FORM IN MOBILE VIEW - JG */}
            <div className='w-full flex items-center justify-center md:hidden'>
                <p>New user? <Link to={'/register'}><span className='text-[#2ECC40] underline underline-offset-2 text-center decoration-2 decoration-[#2ECC40]'> Register Here</span></Link></p>
            </div>

        </div>
        {/* DISPLAYS REGISTER FORM IN DESKTOP/LAPTOP VIEW BUT HIDES IT IN MOBILE VIEW - JG*/}
            <div className='hidden md:flex md:flex-1'>
                <Register />
            </div>
        </div>
    )
}

export default Login;