
import { Link } from 'react-router-dom';
import HomeNavbar from './HomeNavbar';

const Dashboard = () => {
    return (
        <div className="w-screen h-screen flex items-center justify-start flex-col">

            <HomeNavbar />

           {/* APPLICATION CARD */}
           {/* This will be what is mapped over to create a separate card for each application entry in the DB */}
           {/* The <span> is where the prop for the item from the DB will go */}
           {/* For example: <span> {firstName}</span> */}
           <div className="md:h-[15rem] w-[90%] md:w-3/4 ml-4 flex-col md:flex-row flex items-center justify-center border-2 rounded-md">
                {/* LEFT SIDE CARD */}
                <div className="w-full md:w-1/2 h-full flex items-start justify-center flex-col pl-8 py-4 md:py-0">
                    <p className="mb-4 text-[1.2rem]">Posted By: 
                        <span> FirstName</span></p>
                    <p className="mb-4 text-[1.2rem]">Job Title: 
                        <span> Associate JS Developer</span></p>
                    <p className="mb-4 text-[1.2rem]">Company Name: 
                        <span> REI</span></p>
                </div>
                {/* RIGHT SIDE CARD */}
                <div className="w-full md:w-1/2 h-full flex items-start justify-center flex-col pl-8 pb-4 md:pb-0">
                    <p className="mb-4 text-[1.2rem]">Date Posted: 
                        <span> 04/04/2023</span></p>
                    <p className="mb-4 text-[1.2rem]">Updated On: 
                        <span> 04/19/2023</span></p>
                    {/* Post ID needs to be implemented in */}
                    <Link to={`/view`}><p className='text-[1.2rem] text-[#3498db] hover:underline'>View Job Listing</p></Link>
                </div>
           </div>

        </div>
    )
}

export default Dashboard
