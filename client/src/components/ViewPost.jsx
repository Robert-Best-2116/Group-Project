
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react'
import axios from 'axios';
import ViewNavbar from './ViewNavbar';

const ViewPost = () => {
    const { id } = useParams();
    const [application, setApplication] = useState({});

    useEffect (() => {
      axios.get(`http://localhost:8000/api/application/${id}`)
          .then( res => {
              console.log(res.data);
              setApplication(res.data);
          }) 
          .catch((err) => {
              console.log(err);
          });
          window.scrollTo(0, 0)
    }, []);

    return (
        <div className="w-screen h-screen flex items-center justify-start flex-col">
            
            <ViewNavbar />

           {/* JOB DETAIL CARD */}
           {/* All the <dd> tags with the {} is where the props for the DB info will go */}
           {/* Example: <dd>{application.jobTitle}</dd> ✅*/}
           <div className='w-3/4 mb-8'>
                <div className="mt-6 border-t border-gray-100 px-8 mb-8">
                    <dl className="divide-y divide-gray-100">
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm font-medium leading-6 text-gray-900">Job Title:</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                              {application.jobTitle}
                            </dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm font-medium leading-6 text-gray-900">Company:</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                              {application.company}
                            </dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm font-medium leading-6 text-gray-900">Location:</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                              {application.location}
                            </dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm font-medium leading-6 text-gray-900">Salary (If Listed):</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                              {application.salary}
                            </dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm font-medium leading-6 text-gray-900">Application Link:</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                              {application.applicationLink}
                            </dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm font-medium leading-6 text-gray-900">Job Description:</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                              {application.jobDescription}
                            </dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm font-medium leading-6 text-gray-900">Initial Interviewer:</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                              {application.interview}
                            </dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm font-medium leading-6 text-gray-900">Interviewer:</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                              {application.interviewer}
                            </dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm font-medium leading-6 text-gray-900">Initial Interview Overview:</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                              {application.overview}
                            </dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm font-medium leading-6 text-gray-900">Technical Interviewer:</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                              {application.technicalInterviewer}
                            </dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm font-medium leading-6 text-gray-900">Technical Interview Overview:</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                              {application.technicalOverview}
                            </dd>
                        </div>
                    </dl>
                </div>
                    <div className='w-3/4 pl-8'>
                        {/* Edit Button will need ID Implemented in ✅ */}
                        <Link to={`/application/edit/${application._id}`}><button type="button" className="transition ease-in-out delay-100 inline-flex items-center rounded-md bg-[#f1c40faf] px-3 py-2 text-sm text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-[#f1c40f] hover:-translate-y-1 hover:scale-110 mb-12">Edit Application</button></Link>
                    </div>
            </div>
        </div>
    )
}

export default ViewPost
