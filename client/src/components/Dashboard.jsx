
import { Link } from 'react-router-dom';
// import HomeNavbar from './HomeNavbar';
import { useState, useEffect } from 'react';
import SideBar from './SideBar';
import axios from 'axios';

const Dashboard = () => {
    const [applications, setApplications] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8000/api/applications')
        .then((res) => { 
            console.log(res)
            setApplications(res.data)
        })
        .catch((err) => console.log(err))

    }, [])

    return (
        // Add flex-col back in, get rid of md: on flex, change justify to around for HomeNavbar
        <div className="w-screen h-screen md:flex md:items-center md:justify-between">

            {/* <HomeNavbar /> */}
            <SideBar />


           {/* APPLICATION CARD */}
           {/* This will be what is mapped over to create a separate card for each application entry in the DB ✅*/}
           {/* The <span> is where the prop for the item from the DB will go */}
            <div className='hidden top-0 left-0 fixed w-full h-auto md:flex items-center justify-end py-4 pr-6 shadow-sm bg-white'>
               <img className='w-auto h-[4rem]' src="img/logo.png" alt="Logo" />
            </div>
           {/* For example: <span> {firstName}</span> */}
           <div className='h-auto w-full flex items-center justify-center flex-col bg-white pt-[2rem] md:pt-[5rem] m-auto'>{/* Delete this div container for HomeNavbar */}
           {applications.map((application) => {
                return (
                <div key={application._id} className="md:h-[15rem] w-[90%] md:w-3/4 ml-4 flex-col md:flex-row flex items-center justify-center border-2 rounded-md shadow-lg my-8 mr-8">
                    {/* LEFT SIDE CARD */}
                    <div className="w-full md:w-1/2 h-full flex items-start justify-center flex-col pl-8 py-4 md:py-0">
                        <p className="mb-4 text-[1.1rem]">Posted By: 
                            <span className='font-bold'> {application.userName}</span></p>
                        <p className="mb-4 text-[1.1rem]">Job Title: 
                            <span className='font-bold'> {application.jobTitle}</span></p>
                        <p className="mb-4 text-[1.1rem]">Company Name: 
                            <span className='font-bold'> {application.company}</span></p>
                    </div>
                    {/* RIGHT SIDE CARD */}
                    <div className="w-full md:w-1/2 h-full flex items-start justify-center flex-col pl-8 pb-4 md:pb-0">
                        {/* Use Timestamps for date section?? */}
                        <p className="mb-4 text-[1.1rem]">Date Posted: 
                            <span className='font-bold'> {application.timestamp}</span></p>
                        <p className="mb-4 text-[1.1rem]">Updated On: 
                            <span className='font-bold'> {application.timestamp}</span></p>

                        {/* Post ID needs to be implemented in ✅ */}
                        <Link to={`/application/${application._id}`}><p className='text-[1.1rem] text-[#2ECC40] hover:underline'>View Job Listing</p></Link>
                    </div>
                </div>
                )
                })}
            </div>
        </div>
    )
}

export default Dashboard
