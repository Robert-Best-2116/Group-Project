
import { Link } from 'react-router-dom';
// import HomeNavbar from './HomeNavbar';
import SideBar from './SideBar';

const Dashboard = () => {
    return (
        // Add flex-col back in, get rid of md: on flex, change justify to around for HomeNavbar
        <div className="w-screen h-screen md:flex md:items-center md:justify-between">

            {/* <HomeNavbar /> */}
            <SideBar />

           {/* APPLICATION CARD */}
           {/* This will be what is mapped over to create a separate card for each application entry in the DB */}
           {/* The <span> is where the prop for the item from the DB will go */}
           {/* For example: <span> {firstName}</span> */}
           <div className='h-auto w-full flex items-center justify-center flex-col bg-white md:pt-[4rem] m-auto'>{/* Delete this div container for HomeNavbar */}

                <div className="md:h-[15rem] w-[90%] md:w-3/4 ml-4 flex-col md:flex-row flex items-center justify-center border-2 rounded-md shadow-lg my-8 mr-8">
                    {/* LEFT SIDE CARD */}
                    <div className="w-full md:w-1/2 h-full flex items-start justify-center flex-col pl-8 py-4 md:py-0">
                        <p className="mb-4 text-[1.2rem]">Posted By: 
                            <span className='font-bold'> FirstName</span></p>
                        <p className="mb-4 text-[1.2rem]">Job Title: 
                            <span className='font-bold'> Associate JS Developer</span></p>
                        <p className="mb-4 text-[1.2rem]">Company Name: 
                            <span className='font-bold'> REI</span></p>
                    </div>
                    {/* RIGHT SIDE CARD */}
                    <div className="w-full md:w-1/2 h-full flex items-start justify-center flex-col pl-8 pb-4 md:pb-0">
                        <p className="mb-4 text-[1.2rem]">Date Posted: 
                            <span className='font-bold'> 04/04/2023</span></p>
                        <p className="mb-4 text-[1.2rem]">Updated On: 
                            <span className='font-bold'> 04/19/2023</span></p>
                        {/* Post ID needs to be implemented in */}
                        <Link to={`/view`}><p className='text-[1.2rem] text-[#3498db] hover:underline'>View Job Listing</p></Link>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Dashboard
