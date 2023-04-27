
import { Fragment, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { Dialog, Transition } from '@headlessui/react'
import {
  Bars3Icon,
  DocumentPlusIcon,
  HomeIcon,
  UserIcon,
  UserGroupIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import axios from 'axios'
import { useContext } from 'react';  //++++++++
import { UserContext } from './UserContext'; //++++++++


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Sidebar = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false)

    const navigate = useNavigate();

    //++++++++
    // Bringing in the User Context variable to access the first name. - BL
    const {loggedInUser, setLoggedInUser} = useContext(UserContext) 

    // LOGOUT function added. Will remove cookie once logged out. - BL
    const logout = () => {
      axios.post('http://localhost:8000/api/users/logout', {}, {withCredentials: true})
          .then(res => {
              console.log(res)
              navigate('/loginreg')
          })
          .catch(err => console.log(err))
    }

    return (
        <>
      <div>
        {/* POPOVER MENU FOR MOBILE VIEW */}
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog as="div" className="relative z-50 lg:hidden" onClose={setSidebarOpen}>
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-900/80" />
            </Transition.Child>

            <div className="fixed inset-0 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                      <button type="button" className="-m-2.5 p-2.5" onClick={() => setSidebarOpen(false)}>
                        <span className="sr-only">Close sidebar</span>
                        <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
                      </button>
                    </div>
                  </Transition.Child>
                    {/* INTERIOR OF POPOVER */}
                  <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-2">
                    <div className="flex flex-col h-18 shrink-0 items-center justify-center">
                        <h3 className="text-2xl font-light leading-7 text-gray-900 sm:truncate sm:text-2xl sm:tracking-tight my-4">Welcome, {loggedInUser.firstName}</h3>
                      
                        {/* Log Out button will use onClick Logout handler? */}
                        <button type="button" className="transition ease-in-out delay-100 inline-flex items-center justify-center rounded-md bg-[#e74d3caf] px-3 py-2 text-sm text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-[#e74c3c] hover:text-[#fff] hover:-translate-y-1 hover:scale-110 w-1/2" onClick={logout}>Logout</button>
             

                    </div>
                    <nav className="flex flex-1 flex-col">
                    <div className="text-xs font-semibold leading-6 text-gray-400">Pages:</div>
                      <ul role="list" className="flex flex-1 flex-col gap-y-7">
                        <li>
                          <ul role="list" className="-mx-2 space-y-1">
                            <Link to={'/dashboard'}>
                    <li className='cursor-pointer bg-gray-100 active:bg-gray-100 text-[#27ae60] py-2 pl-2 rounded flex items-center mb-2'><HomeIcon className='h-4 w-4 mr-2'/>Dashboard</li>
                    </Link>
                   <Link to={'/application'}>
                    <li className='cursor-pointer hover:bg-gray-100 active:bg-gray-100 hover:text-[#27ae60] py-2 pl-2 rounded flex items-center mb-2'><DocumentPlusIcon className='h-4 w-4 mr-2'/> Add an Application</li>
                    </Link>
                    <Link to={'/about'}>
                    <li className='cursor-pointer hover:bg-gray-100 active:bg-gray-100 hover:text-[#27ae60] py-2 pl-2 rounded flex items-center'><UserGroupIcon className='h-4 w-4 mr-2'/> About the Team</li>
                    </Link>
                          </ul>
                        </li>
                        <li>
                          <ul role="list" className="-mx-2 mt-2 space-y-1">
                          <li>
                  <div className="text-xs font-semibold leading-6 text-gray-400">Friends:</div>
                  <ul role="list" className="-mx-2 mt-2 space-y-1">
                    {/* Map for userName here: */}
                    <li className='flex items-center py-2 pl-2 rounded'>
                      <UserIcon className='h-4 w-4 mr-2'/>FirstName
                    </li>
                  </ul>
                </li>
                          </ul>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>


        {/* DESKTOP SIDEBAR MENU */}
        <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6">

            <div className="flex shrink-0 items-center h-auto">
                <h3 className="text-xl font-extralight leading-7 text-gray-900 sm:truncate sm:text-2xl sm:tracking-tight mt-8">Welcome, {loggedInUser.firstName}</h3>    
            </div>

            <nav className="flex flex-1 flex-col">
            <div className="text-xs font-semibold leading-6 text-gray-400 flex items-center">Pages:</div>
              <ul role="list" className="flex flex-1 flex-col gap-y-7">

                <li>
                  <ul role="list" className="-mx-2 space-y-1">
                  <Link to={'/dashboard'}>
                    <li className='cursor-pointer bg-gray-100 active:bg-gray-100 text-[#27ae60] py-2 rounded flex items-center pl-2 mb-2'><HomeIcon className='h-4 w-4 mr-2'/>Dashboard</li>
                    </Link>
                   <Link to={'/application'}>
                    <li className='cursor-pointer hover:bg-gray-100 active:bg-gray-100 hover:text-[#27ae60] py-2 rounded flex items-center pl-2 mb-2'><DocumentPlusIcon className='h-4 w-4 mr-2'/> Add an Application</li>
                    </Link>
                    <Link to={'/about'}>
                    <li className='cursor-pointer hover:bg-gray-100 active:bg-gray-100 hover:text-[#27ae60] py-2 rounded flex items-center pl-2'><UserGroupIcon className='h-4 w-4 mr-2'/> About the Team</li>
                    </Link>
                  </ul>
                </li>

                <li>
                  <div className="text-xs font-semibold leading-6 text-gray-400 flex items-center">Friends:</div>
                  <ul role="list" className="-mx-2 mt-2 space-y-1">
                    {/* Map for userName here: */}
                    <li className='py-2 rounded flex items-center pl-2'>
                      <UserIcon className='h-4 w-4 mr-2'/>{loggedInUser.firstName}
                    </li>
                  </ul>
                </li>

                <li className="mx-auto mb-2 mt-auto w-full flex items-center justify-center">
                  {/* Log Out button will use onClick Logout handler? */}
                  <button type="button" className="transition ease-in-out delay-100 inline-flex items-center justify-center rounded-md bg-[#e74d3caf] px-3 py-2 text-sm text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-[#e74c3c] hover:text-[#fff] hover:-translate-y-1 hover:scale-110 w-3/4 mb-4" onClick={logout}>Logout</button>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        {/* MOBILE VIEW TOP NAVBAR*/}
        <div className="fixed w-full top-0 z-40 flex items-center justify-evenly gap-x-6 bg-white px-4 py-4 shadow-sm sm:px-6 lg:hidden">
          <button type="button" className="-m-2.5 p-2.5 text-gray-700 lg:hidden" onClick={() => setSidebarOpen(true)}>
            <span className="sr-only">Open sidebar</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>

          <div className="flex-1 flex items-end justify-end flex-col text-sm font-semibold leading-6 text-gray-900">
            <img className='w-auto h-[4rem] mb-2' src="img/logo.png" alt="Logo" />
            {/* <h3 className='font-light leading-7 text-gray-900 text-[1.1rem] text-center'>Welcome, {loggedInUser.firstName}</h3> */}
          </div>

          {/* Log Out button will use onClick Logout handler? */}
          {/* <button type="button" className="transition ease-in-out delay-100 inline-flex items-center justify-center rounded-md bg-[#e74d3caf] px-3 py-2 text-sm text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-[#e74c3c] hover:text-[#fff] hover:-translate-y-1 hover:scale-110" onClick={logout}>Logout</button> */}
        </div>

        <main className="py-10 lg:pl-72">
          <div className="px-4 sm:px-6 lg:px-8"></div>
        </main>
      </div>
    </>
    )
}

export default Sidebar
