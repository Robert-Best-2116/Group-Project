
const LoginHeader = () => {
    return (
        <div className="w-screen flex items-center justify-start flex-col">
            {/* MAIN NAVBAR */}
            <div className="md:w-3/4 md:flex md:items-center md:justify-between py-4 mb-2">
                <div className="flex-1 flex items-center justify-center">
                    <img className='w-auto h-[6.5rem]' src="/img/logo.png" alt="" />
                </div>
            </div> 

            {/* SUB NAVBAR */}
            {/* Will need to put props for DB info inside <span> tags */}
            {/* Example: <span>{jobTitle} </span> */}
            <div className="w-screen flex items-center justify-around px-12 md:px-0 md:w-3/4 md:flex md:items-center md:justify-between py-4 md:mb-8 mb-8">
                <div className="min-w-0 flex-1 text-center">
                    <h2 className="text-3xl font-extralight underline underline-offset-4 decoration-2 decoration-[#2ECC40] leading-7 text-gray-900 sm:truncate sm:text-3xl tracking-wide md:tracking-normal">
                        Login or register to begin tracking your applications:
                    </h2>
                </div>

            </div> 


        </div>
    )
}

export default LoginHeader
