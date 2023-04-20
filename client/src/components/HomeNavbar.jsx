
import { Link } from 'react-router-dom';

const HomeNavbar = () => {
    return (
        <div className="w-screen flex items-center justify-start flex-col">
            {/* MAIN NAVBAR */}
            <div className="md:w-3/4 md:flex md:items-center md:justify-between py-4 mb-8">
                <div className="min-w-0 flex-1">
                    <h2 className="text-3xl font-bold leading-7 text-gray-900 sm:truncate sm:text-4xl sm:tracking-tight">
                        Application Tracker
                    </h2>
                </div>

                {/* FirstName Prop will need to be implemented in */}
                {/* Example: Welcome, {firstName} */}
                <div className="mt-4 flex md:ml-4 md:mt-0 items-center justify-center">
                    <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
                        Welcome, FirstName
                    </h2>
                </div>
            </div> 

            {/* SUB NAVBAR */}
            <div className="w-screen flex items-center justify-around px-12 md:px-0 md:w-3/4 md:flex md:items-end md:justify-between py-4 mb-2">
                <div className="min-w-0 flex-1">
                    <h2 className="text-2xl font-semiBold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
                      Applications
                    </h2>
                </div>

                {/* Button to 'Create New Post' Form page */}
                <Link to={'/create'}><button type="button" className="transition ease-in-out delay-100 inline-flex items-center rounded-md bg-[#27ae5faf] px-3 py-2 mr-8 text-sm text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-[#27ae60] hover:text-[#fff] hover:-translate-y-1 hover:scale-110">+ Add an Application</button></Link>

                {/* Log Out button will use onClick Logout handler? */}
               <button type="button" className="transition ease-in-out delay-100 inline-flex items-center rounded-md bg-[#e74d3caf] px-3 py-2 text-sm text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-[#e74c3c] hover:text-[#fff] hover:-translate-y-1 hover:scale-110">Logout</button>
            </div> 


        </div>
    )
}

export default HomeNavbar