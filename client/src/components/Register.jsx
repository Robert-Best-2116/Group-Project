import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
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

    return (
        <div className='col-md-5 mt-5 mx-auto'>
            <form action='' onSubmit={submitHandler}>
                <h3 className='text-center'>Register</h3>
                {errors.firstName ? (<p style={{ color: "red" }}>{errors.firstName.message}</p>) : ("")}
                <div className='form-group'>
                    <label htmlFor="" className='form-label'>First Name:</label>
                    <input type="text" className='form-control' name='firstName' value={user.firstName} onChange={changeHandler}/>
                </div>
                {errors.lastName ? (<p style={{ color: "red" }}>{errors.lastName.message}</p>) : ("")}
                <div className='form-group'>
                    <label htmlFor="" className='form-label'>Last Name:</label>
                    <input type="text" className='form-control' name='lastName' value={user.lastName} onChange={changeHandler}/>
                </div>
                {errors.email ? (<p style={{ color: "red" }}>{errors.email.message}</p>) : ("")}
                <div className='form-group'>
                    <label htmlFor="" className='form-label'>Email:</label>
                    <input type="email" className='form-control' name='email' value={user.email} onChange={changeHandler}/>
                </div>
                {errors.password ? (<p style={{ color: "red" }}>{errors.password.message}</p>) : ("")}
                <div className='form-group'>
                    <label htmlFor="" className='form-label'>Password:</label>
                    <input type="password" className='form-control' name='password' value={user.password} onChange={changeHandler}/>
                </div>
                {errors.confirmPassword ? (<p style={{ color: "red" }}>{errors.confirmPassword.message}</p>) : ("")}
                <div className='form-group'>
                    <label htmlFor="" className='form-label'>Confirm Password:</label>
                    <input type="password" className='form-control' name='confirmPassword' value={user.confirmPassword} onChange={changeHandler}/>
                </div>
                <div className="form-group">
                    <button type='submit' className='btn btn-primary mt-3'>Register</button>
                </div>
            </form>
        </div>
    )

}

export default Register;