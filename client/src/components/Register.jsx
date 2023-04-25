import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import axios from 'axios';

const Register = () => {
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});


    // STATE VARIABLES FOR THE FORM FOR USER - BL
    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    })

    // SET USER WHEN INPUTS ARE ADDED TO THE FORM - BL
    const changeHandler = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
    }

    // AXIOS REQUEST TO REGISTER NEW USER AS LONG AS CREDENTIALS PASS (EMAIL DOES NOT ALREADY EXIST AND PASSWORD & CONFIRM PASSWORD MATCH) - BL
    const submitHandler = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/users/register", user, {withCredentials: true})
            .then(res => {
                console.log("then")
                console.log(res)
                navigate("/dashboard")
            })
            .catch(err => {
                console.log(user, "User.catch")
                console.log("catch", err.response.data.errors)
                console.log(err)
                setErrors(err.response.data.errors)
                console.log("errors", errors)
            })
    }

    // MAKES SCREEN ALWAYS START FROM THE VERY TOP NO MATTER WHERE SCROLL BAR WAS ON PREVIOUS PAGE - JG
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className="flex-1 mt-10 md:mt-0">
            <form className="md:w-[65%] w-screen h-full m-auto md:shadow-md rounded" action='' onSubmit={submitHandler}>

                <h3 className="text-[1.5rem] mr-4 mb-2 font-semiBold underline underline-offset-2 text-center decoration-2 decoration-[#2ECC40]">Register</h3>

                {errors.firstName ? (<p style={{ color: "red" }}>{errors.firstName.message}</p>) : ("")}
                <div className="mb-2 py-4 flex items-center justify-center flex-col">
                <div className="w-3/4 flex items-start justify-center flex-col">
                    <label htmlFor="" className="text-[1.2rem] mr-4 mb-2 font-light underline underline-offset-2">First Name:</label>
                    <input type="text" className="w-full md:w-full h-[2.5rem] pl-2 border rounded shadow-md" name='firstName' value={user.firstName} onChange={changeHandler}/>
                    </div>
                </div>

                {errors.lastName ? (<p style={{ color: "red" }}>{errors.lastName.message}</p>) : ("")}
                <div className="mb-2 py-4 flex items-center justify-center flex-col">
                <div className="w-3/4 flex items-start justify-center flex-col">
                    <label htmlFor="" className="text-[1.2rem] mr-4 mb-2 font-light underline underline-offset-2">Last Name:</label>
                    <input type="text" className="w-full md:w-full h-[2.5rem] pl-2 border rounded shadow-md" name='lastName' value={user.lastName} onChange={changeHandler}/>
                    </div>
                </div>

                {errors.email ? (<p style={{ color: "red" }}>{errors.email.message}</p>) : ("")}
                <div className="mb-2 py-4 flex items-center justify-center flex-col">
                <div className="w-3/4 flex items-start justify-center flex-col">
                    <label htmlFor="" className="text-[1.2rem] mr-4 mb-2 font-light underline underline-offset-2">Email:</label>
                    <input type="email" className="w-full md:w-full h-[2.5rem] pl-2 border rounded shadow-md" name='email' value={user.email} onChange={changeHandler}/>
                    </div>
                </div>

                {errors.password ? (<p style={{ color: "red" }}>{errors.password.message}</p>) : ("")}
                <div className="mb-2 py-4 flex items-center justify-center flex-col">
                <div className="w-3/4 flex items-start justify-center flex-col">
                    <label htmlFor="" className="text-[1.2rem] mr-4 mb-2 font-light underline underline-offset-2">Password:</label>
                    <input type="password" className="w-full md:w-full h-[2.5rem] pl-2 border rounded shadow-md" name='password' value={user.password} onChange={changeHandler}/>
                    </div>
                </div>

                {errors.confirmPassword ? (<p style={{ color: "red" }}>{errors.confirmPassword.message}</p>) : ("")}
                <div className="mb-2 py-4 flex items-center justify-center flex-col">
                <div className="w-3/4 flex items-start justify-center flex-col">
                    <label htmlFor="" className="text-[1.2rem] mr-4 mb-2 font-light underline underline-offset-2">Confirm Password:</label>
                    <input type="password" className="w-full md:w-full h-[2.5rem] pl-2 border rounded shadow-md" name='confirmPassword' value={user.confirmPassword} onChange={changeHandler}/>
                    </div>
                </div>

                <div className="w-full flex items-center justify-center flex-col">
                    <button type='submit' className="transition ease-in-out delay-100 inline-flex items-center rounded-md bg-[#2ECC40af] px-6 py-2 text-md text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-[#2ECC40] hover:text-[#fff] hover:-translate-y-1 hover:scale-110 mt-4 mb-8 cursor-pointer">Register</button>
                </div>
            </form>
              {/* LINK TO GO BACK TO LOGIN FORM IN MOBILE VIEW - JG */}
              <div className='w-full flex items-center justify-center mb-8 md:hidden'>
                <p>Already have an account? <Link to={'/loginreg'}><span className='text-[#2ECC40] underline underline-offset-2 text-center decoration-2 decoration-[#2ECC40]'> Login Here</span></Link></p>
            </div>
        </div>
    )

}

export default Register;