import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from './UserContext';

const EditHeader = () => {

    const {loggedInUser, setLoggedInUser} = useContext(UserContext);

    return (
        <div className="w-screen h-full flex items-center justify-start flex-col">
        {/* MAIN NAVBAR */}
        <div className="md:w-3/4 h-auto md:flex md:items-center md:justify-between py-4 mb-8">

            <div className="flex-1">
                <img className='w-auto h-[5rem] cursor-pointer' src="/img/logo.png" alt="" />
            </div>

            <div className="mt-4 flex md:ml-4 md:mt-0 items-center justify-center">
                <h2 className="text-3xl font-extralight leading-7 text-gray-900 sm:truncate sm:text-4xl sm:tracking-tight">Welcome, {loggedInUser.firstName}</h2>
            </div>

            <div className='md:w-1/4 flex items-center justify-center mt-8 md:hidden'>
                <Link to={'/dashboard'}><button type="button" className="transition ease-in-out delay-100 inline-flex items-center rounded-md bg-[#2ECC40af] px-3 py-2 text-sm text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-[#2ECC40] hover:text-[#fff] hover:-translate-y-1 hover:scale-110">&larr; Home</button></Link>
            </div>
        </div> 

        {/* SUB NAVBAR */}
        {/* Will need to put props for DB info inside <span> tags */}
        {/* Example: <span>{jobTitle} </span> */}
        <div className="w-screen flex items-center justify-around px-12 md:px-0 md:w-3/4 md:flex md:items-center md:justify-between py-4 mb-2">
            <div className="min-w-0 flex-1 text-center md:text-left">
                <h2 className="text-3xl font-extralight underline underline-offset-4 decoration-2 decoration-[#2ECC40] leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
                   Edit Application:
                </h2>
            </div>

            <div className='hidden md:w-1/4 md:flex items-center justify-end'>
            <Link to={'/dashboard'}><button type="button" className="transition ease-in-out delay-100 inline-flex items-center rounded-md bg-[#2ECC40af] px-3 py-2 text-sm text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-[#2ECC40] hover:text-[#fff] hover:-translate-y-1 hover:scale-110">&larr; Home</button></Link>
            </div>
        </div> 


    </div>
    )
}

export default EditHeader
