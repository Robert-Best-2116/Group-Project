
import { Link } from 'react-router-dom';

const TopContainer = () => {

    return (
    <div className="bg-white">
      <div className="relative">
        <div className="mx-auto max-w-7xl">
          <div className="relative z-10 pt-0 lg:w-full lg:max-w-2xl">
        <div className='w-full flex items-start justify-start py-4 pl-8'>
            <img className='w-[12rem] h-auto' src='img/logo.png' alt="Logo"/>
        </div>
            <svg
              className="absolute inset-y-0 right-8 hidden h-full w-80 translate-x-1/2 transform fill-white lg:block"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="0,0 90,0 50,100 0,100" />
            </svg>

            <div className="relative px-6 py-32 sm:py-40 lg:px-8 lg:py-32 lg:pr-0">
              <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
                <div className="flex items-center justify-center w-full md:w-3/4 mb-2">
                  <img className="w-[5rem] h-auto" src="/img/singlelogo.png" />
                </div>
                <h1 className="text-4xl font-bold tracking-wide text-gray-900 sm:text-6xl">
                  Keep track of your applications and where you applied
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt
                  amet fugiat veniam occaecat fugiat aliqua.
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                  {/* Link this to Login/Registration page */}
                  <Link to={'/loginreg'}><button type="button" className="transition ease-in-out delay-100 inline-flex items-center rounded-md bg-[#2ECC40af] px-4 py-3 text-sm text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-[#2ECC40] hover:text-[#fff] hover:-translate-y-1 hover:scale-110">Login to get started &rarr;</button></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="aspect-[3/2] object-cover lg:aspect-auto lg:h-full lg:w-full"
            src="/img/resume.png"
            alt="Resumes"
          />
        </div>
      </div>
    </div>
    )
}

export default TopContainer
